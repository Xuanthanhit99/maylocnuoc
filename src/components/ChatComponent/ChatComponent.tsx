"use client";
import React, { useEffect, useRef, useState } from "react";
import SocketIOClient, { io } from "socket.io-client";
import Pusher from "pusher-js";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import CustomUpload from "../FormItemFloatLabel/CustomUpload";
import { Avatar, Checkbox, Rate } from "antd";
import CustomInput from "../FormItemFloatLabel/CustomInput";

interface IMsg {
  user: string;
  msg: string;
}

// create random user
const user = "User_" + String(new Date().getTime()).substr(-3);

const ChatComponent = ({slugParam, onOpenNoti}: any) => {
  const [textMessage, setTextMessage] = useState<any>([]);
  const [valueComment, setValueComment] = useState<any>([]);
  const [valueCommentImage, setValueCommentImage] = useState<any>("");
  const desc = ["terrible", "bad", "normal", "good", "wonderful"];
  const [rateValue, setRateValue] = useState<any>(5);
  const [useValueName, setUseValueName] = useState<string>("");
  const [useValuePhone, setUseValuePhone] = useState<string>("");
  const [isPurchase, setIsPurchase] = useState<boolean>(false);
  const [isReply, setIsReply] = useState<boolean>(false);
  const [rateValueComment, setRateValueComment] = useState<number>(0);

  const inputRef = useRef(null);
  // init chat and message
  const [chat, setChat] = useState<IMsg[]>([]);
  const [msg, setMsg] = useState<string>("");
  var pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_APP_KEY as string, {
    cluster: "ap1",
  });

  var channel = pusher.subscribe("chat");
  channel.bind("hello", function (data: any) {
    const parsedComments = JSON.parse(data.message);
    setTextMessage((prev: any) => [...prev, parsedComments]);
  });

  const covertToBase64 = (e: any) => {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      // setImageValue(reader.result);
      setValueCommentImage(reader.result);
    };

    reader.onerror = (error) => {
      console.log("error", error);
    };
  };

  const sendMessage = async () => {
    const message = {
      name: useValueName,
      phone: useValuePhone,
      image: valueCommentImage || "",
      textcomment: msg,
      isPurchase: isPurchase,
      nameId: uuidv4(),
      isAdmin: false,
      nameproduct: slugParam,
      evaluate: rateValue,
      replypeople: [],
    };

    // dispatch message to other users
    const resp = await fetch("/api/pusher", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(message),
    });
    const repons = await resp.json();
    onOpenNoti()
    setIsReply(false)
    // if (repons?.success) {
    //   const arrayApi = await [...valueComment, repons?.data];
    //   setValueComment(arrayApi);
    //   setUseValueName("");
    //   setRateValueComment(0);
    //   setUseValuePhone("");
    //   setMsg("");
    // }
    // focus after click
    // @ts-ignore
    inputRef?.current?.focus();
  };

  useEffect(() => {
    const sendMessageReply = async () => {
      const apiGet = await axios.post("/api/pusher/getCommentByNameProduct", {
        nameproduct: slugParam,
      });
      setValueComment([...apiGet?.data?.data]);
    };

    sendMessageReply();
  }, [slugParam]);

  const onClickReplyComment = async (value: any) => {
    const message = {
      name: value?.name,
      phone: value?.phone,
      image: value?.image || "",
      textcomment: value?.textcomment,
      isPurchase: value?.isPurchase,
      nameId: value?.nameId,
      isAdmin: value?.isAdmin,
      nameproduct: value?.nameproduct,
      evaluate: value?.evaluate,
      replypeople: [
        ...value?.replypeople,
        {
          nameComment: useValueName,
          phoneComment: useValuePhone,
          evaluateComment: rateValue,
          textComment: msg,
        },
      ],
    };

    // dispatch message to other users
    const resp = await fetch("/api/pusher/postReplyComment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(message),
    });
    const repons = await resp.json();
    onOpenNoti()
    setIsReply(false)
  };

  return (
    <div className="flex justify-center bg-[#f3f3f3] relative">
      <div className="w-full">
        {/*Gửi bình luận */}
        <div>
          <div className="font-semibold h-14 flex items-center font-serif text-xl text-black ">
            Hỏi và đáp ({valueComment?.length} Bình luận)
          </div>
          <div className="border p-3 bg-white">
            <div className="">
              <textarea
                ref={inputRef}
                rows={5}
                cols={5}
                value={msg}
                placeholder={"Connecting..."}
                className="w-full h-full rounded border-[#9580ff] border-2 px-1 hover:border-[#8aff80] focus:border-[#80ffea] focus:outline-none"
                onChange={(e: any) => {
                  setMsg(e.target.value);
                }}
                onKeyPress={(e: any) => {
                  if (e.key === "Enter") {
                    sendMessage();
                  }
                }}
              />
              <CustomUpload label={"upload image"} onChange={covertToBase64} />
              <div>
                <div className="my-3">
                  <div className="mb-1">Đánh giá</div>{" "}
                  <Rate
                    tooltips={desc}
                    onChange={setRateValue}
                    value={rateValue}
                  />{" "}
                </div>
                <div className="flex w-full">
                  <div className="w-1/2 mr-4">
                    <CustomInput
                      label="Họ tên*"
                      name="username"
                      className="mb-2"
                      onChange={(e) => setUseValueName(e?.target?.value)}
                    />
                  </div>
                  <div className="w-1/2 ml-4">
                    <CustomInput
                      label="Số điện thoại*"
                      name="phone"
                      className="mb-2"
                      onChange={(e) => setUseValuePhone(e?.target?.value)}
                    />
                  </div>
                </div>
              </div>
              <div>
                <Checkbox onChange={(e) => setIsPurchase(e.target.value)}>
                  Đã mua hàng tại cửa hàng
                </Checkbox>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-stretch my-2 w-2/12">
            <button
              className="bg-red-500 border-2 w-36 h-14 rounded-xl shadow text-sm text-white px-2 hover:bg-white hover:text-red-500 hover:border-red-500"
              onClick={() => sendMessage()}
            >
              Gửi bình luận
            </button>
          </div>
        </div>
        <div className="flex ">
          <div
            onClick={() => setRateValueComment(0)}
            className={` ${
              rateValueComment === 0
                ? "bg-white text-red-500 hover:bg-red-500 hover:text-white"
                : "text-white bg-red-500 hover:bg-white hover:text-red-500"
            } mr-4 cursor-pointer h-9 rounded-lg flex justify-center items-center text-center text-sm  font-semibold w-24  border-2 border-red-500`}
          >
            Tất cả
          </div>
          <div
            onClick={() => setRateValueComment(5)}
            className={` ${
              rateValueComment === 5
                ? "bg-white text-red-500 hover:bg-red-500 hover:text-white"
                : "text-white bg-red-500 hover:bg-white hover:text-red-500"
            } mr-4 cursor-pointer h-9 rounded-lg flex justify-center items-center text-center text-sm  font-semibold w-24  border-2 border-red-500`}
          >
            5 sao{" "}
            {`(${
              valueComment?.filter((item: any) => item?.evaluate === 5)?.length
            })`}
          </div>
          <div
            onClick={() => setRateValueComment(4)}
            className={` ${
              rateValueComment === 4
                ? "bg-white text-red-500 hover:bg-red-500 hover:text-white"
                : "text-white bg-red-500 hover:bg-white hover:text-red-500"
            } mr-4 cursor-pointer h-9 rounded-lg flex justify-center items-center text-center text-sm  font-semibold w-24  border-2 border-red-500`}
          >
            4 sao{" "}
            {`(${
              valueComment?.filter((item: any) => item?.evaluate === 4)?.length
            })`}
          </div>
          <div
            onClick={() => setRateValueComment(3)}
            className={` ${
              rateValueComment === 3
                ? "bg-white text-red-500 hover:bg-red-500 hover:text-white"
                : "text-white bg-red-500 hover:bg-white hover:text-red-500"
            } mr-4 cursor-pointer h-9 rounded-lg flex justify-center items-center text-center text-sm  font-semibold w-24  border-2 border-red-500`}
          >
            3 sao{" "}
            {`(${
              valueComment?.filter((item: any) => item?.evaluate === 3)?.length
            })`}
          </div>
          <div
            onClick={() => setRateValueComment(2)}
            className={` ${
              rateValueComment === 2
                ? "bg-white text-red-500 hover:bg-red-500 hover:text-white"
                : "text-white bg-red-500 hover:bg-white hover:text-red-500"
            } mr-4 cursor-pointer h-9 rounded-lg flex justify-center items-center text-center text-sm  font-semibold w-24  border-2 border-red-500`}
          >
            2 sao{" "}
            {`(${
              valueComment?.filter((item: any) => item?.evaluate === 2)?.length
            })`}
          </div>
          <div
            onClick={() => setRateValueComment(1)}
            className={` ${
              rateValueComment === 1
                ? "bg-white text-red-500 hover:bg-red-500 hover:text-white"
                : "text-white bg-red-500 hover:bg-white hover:text-red-500"
            } mr-4 cursor-pointer h-9 rounded-lg flex justify-center items-center text-center text-sm  font-semibold w-24  border-2 border-red-500`}
          >
            1 sao{" "}
            {`(${
              valueComment?.filter((item: any) => item?.evaluate === 1)?.length
            })`}
          </div>
        </div>
        {/* list bình luận */}
        <hr className="my-3 " />
        <div>
          {valueComment
            ? valueComment
                ?.filter((item: any) =>
                  rateValueComment > 0
                    ? item?.evaluate === rateValueComment
                    : item?.evaluate !== rateValueComment
                )
                ?.map((item: any, index: any) => {
                  return (
                    <div key={index}>
                      <div>
                        <Avatar
                          style={{ verticalAlign: "middle" }}
                          className="bg-red-500"
                          size="large"
                        >
                          {item?.name?.slice(0, 1)?.toUpperCase()}
                        </Avatar>
                        <span className="text-sm font-mono text-black ml-3">
                          {item?.name}
                        </span>
                        <div className="my-2">
                          <div
                            onClick={() => {
                              setIsReply(index);
                              setUseValueName("");
                              setRateValueComment(0);
                              setUseValuePhone("");
                              setMsg("");
                            }}
                            className="cursor-pointer text-sm font-medium py-2"
                          >
                            Trả lời
                          </div>
                          {isReply === index && (
                            <div>
                              <textarea
                                ref={inputRef}
                                rows={5}
                                cols={5}
                                value={msg}
                                placeholder={"Connecting..."}
                                className="w-full h-full rounded border-[#9580ff] border-2 px-1 hover:border-[#8aff80] focus:border-[#80ffea] focus:outline-none"
                                onChange={(e: any) => {
                                  setMsg(e.target.value);
                                }}
                                onKeyPress={(e: any) => {
                                  if (e.key === "Enter") {
                                    sendMessage();
                                  }
                                }}
                              />
                              <div className="mb-1">Đánh giá</div>{" "}
                  <Rate
                    tooltips={desc}
                    onChange={setRateValue}
                    value={rateValue}
                  />{" "}
                              <div className="flex w-full">
                                <div className="w-1/2 mr-4">
                                  <CustomInput
                                    label="Họ tên*"
                                    name="username"
                                    className="mb-2"
                                    onChange={(e) =>
                                      setUseValueName(e?.target?.value)
                                    }
                                  />
                                </div>
                                <div className="w-1/2 ml-4">
                                  <CustomInput
                                    label="Số điện thoại*"
                                    name="phone"
                                    className="mb-2"
                                    onChange={(e) =>
                                      setUseValuePhone(e?.target?.value)
                                    }
                                  />
                                </div>
                              </div>
                              <div className="flex">
                                <div
                                  className="mr-3 flex justify-center items-center rounded-lg text-white font-sans hover:text-red-500 hover:bg-white border-2 border-red-500 cursor-pointer text-sm h-9 w-24 bg-red-500"
                                  onClick={() => setIsReply(false)}
                                >
                                  Hủy
                                </div>
                                <div
                                  className="ml-3 flex justify-center items-center rounded-lg text-white font-sans hover:text-red-500 hover:bg-white border-2 border-red-500 cursor-pointer text-sm h-9 w-24 bg-red-500"
                                  onClick={() => onClickReplyComment(item)}
                                >
                                  Trả lời
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      <div></div>
                      <hr className="my-3" />
                    </div>
                  );
                })
            : "Chưa có bình luận nào"}
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;
