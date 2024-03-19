"use client";
import React, { useEffect, useRef, useState } from "react";
import SocketIOClient, { io } from "socket.io-client";
import Pusher from "pusher-js";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import CustomUpload from "../FormItemFloatLabel/CustomUpload";
import { Checkbox, Rate } from "antd";
import CustomInput from "../FormItemFloatLabel/CustomInput";

interface IMsg {
  user: string;
  msg: string;
}

// create random user
const user = "User_" + String(new Date().getTime()).substr(-3);

const ChatComponent = () => {
  const [connected, setConnected] = useState<boolean>(true);
  const [textMessage, setTextMessage] = useState<any>([]);
  const [valueComment, setValueComment] = useState<any>([]);
  const [commentProduct, setCommentProduct] = useState<any>([]);
  const [valueCommentImage, setValueCommentImage] = useState<any>("");
  const desc = ["terrible", "bad", "normal", "good", "wonderful"];
  const [rateValue, setRateValue] = useState<any>(5);
  const [useValueName, setUseValueName] = useState<string>("");
  const [useValuePhone, setUseValuePhone] = useState<string>("");
  const [isPurchase, setIsPurchase] = useState<boolean>(false);

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
        nameproduct: "",
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
      const repons =await resp.json()
      setValueComment(resp);
    // focus after click
    // @ts-ignore
    inputRef?.current?.focus();
  };

  useEffect(() => {
      sendMessageReply()
  }, [])

  const sendMessageReply = async () => {
    const nameproduct = "";
    const apiGet = await axios.post("/api/pusher/getCommentByNameProduct",
      nameproduct,
    );

    setCommentProduct(apiGet);
    console.log("idproduct", apiGet);
  };

  return (
    <div className="flex justify-center bg-[#f3f3f3] relative">
    <div className="w-9/12 sm:w-11/12 md:w-11/12">
      <div className="font-semibold font-serif text-xl text-black ">
        Hỏi và đáp ({commentProduct?.length} Bình luận)
      </div>
      <div className="pr-2 flex-1">
        <div>
          <textarea
            ref={inputRef}
            rows={5}
            cols={5}
            value={msg}
            placeholder={connected ? "Type a message..." : "Connecting..."}
            className="w-full h-full rounded border-[#9580ff] border-2 px-1 hover:border-[#8aff80] focus:border-[#80ffea] focus:outline-none"
            disabled={!connected}
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
              <Rate tooltips={desc} onChange={setRateValue} value={rateValue} />{" "}
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
          <div><Checkbox onChange={(e) => setIsPurchase(e.target.value)}>Đã mua hàng tại cửa hàng</Checkbox></div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-stretch pl-2 w-2/12">
        <button
          className="bg-[#9580ff] border-2 rounded shadow text-sm text-white h-full px-2 hover:bg-white hover:text-[#9580ff] hover:border-[#9580ff]"
          onClick={() => sendMessage()}
        >
          Gửi bình luận
        </button>
        {/* <button
          className="bg-[#9580ff] border-2 rounded shadow text-sm text-white h-full px-2 hover:bg-white hover:text-[#9580ff] hover:border-[#9580ff]"
          onClick={() => sendMessageReply()}
          disabled={!connected}
        >
          trả lời
        </button> */}
      </div>
    </div>
    </div>
  );
};

export default ChatComponent;
