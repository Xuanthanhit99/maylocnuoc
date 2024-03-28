"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CustomInput from "../FormItemFloatLabel/CustomInput";
import CustomTextArea from "../FormItemFloatLabel/CustomTextArea";
import { Button, Result, notification } from "antd";
import axios from "axios";
import { AuthContextDefault } from "../../../app/context/AuthContext";

const MenuChat = () => {
  const [isShowListSocialMess, setIsShowListSocialMess] =
    useState<boolean>(false);
  const key = "formTT";
  const {
    onClickShowFormTT,
    isShowFormTT,
    onClickPostInformation,
    isResultFormTT,
  } = AuthContextDefault();
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [textQuestion, setTextQuestion] = useState<string | undefined>("");
  const [api, contextHolder] = notification.useNotification();
  const onOpenLoading = () => {
    if (isResultFormTT) {
      api.open({
        key,
        message: "Gửi yêu cầu thành công",
        description: "Cảm ơn bạn đã gửi yêu cầu, chúng tôi sẽ liên hệ với bạn sớm nhất",
      });

      setTimeout(() => {
        api.open({
          key,
          message: "Gửi yêu cầu thành công",
          description: "Cảm ơn bạn đã gửi yêu cầu, chúng tôi sẽ liên hệ với bạn sớm nhất",
        });
      }, 1000);
    }
  };

  useEffect(() => {
    onOpenLoading();
  }, [isResultFormTT]);
  return (
    <div>
      {contextHolder}
      <div className="fixed top-1/4 sm:top-2/4 sm:right-5 right-10">
        <div>
          <div className="border rounded-full p-1 border-gray-950">
            {isShowListSocialMess ? (
              <div>
                <ul className="my-3">
                  <li className="mb-3">
                    <a
                      href="http://zalo.me/4087784932765661863"
                      target="_blank"
                      className="footer__iconSocial footer__iconSocial--zalo"
                      data-uk-tooltip="Zalo"
                    >
                      <Image
                        src={"/image/icon-support/messenger.svg"}
                        alt=""
                        width={45}
                        height={45}
                      />
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      href="http://zalo.me/4087784932765661863"
                      target="_blank"
                      className="footer__iconSocial footer__iconSocial--zalo"
                      data-uk-tooltip="Zalo"
                    >
                      <Image
                        src={"/image/icon-support/zalo.svg"}
                        alt=""
                        width={45}
                        height={45}
                      />
                    </a>
                  </li>
                  <li
                    className="mb-3 cursor-pointer"
                    onClick={() => setIsShowListSocialMess(false)}
                  >
                    <Image
                      src={"/image/icon-support/x.png"}
                      alt=""
                      width={45}
                      height={45}
                    />
                  </li>
                </ul>
              </div>
            ) : (
              <Image
                className="cursor-pointer"
                src={"/image/icon-support/help-social.png"}
                width={45}
                height={45}
                alt=""
                onClick={() => setIsShowListSocialMess(!isShowListSocialMess)}
              />
            )}
          </div>
          <div className="my-4 border rounded-full p-1 border-gray-950">
            <a href="tel:0963594358">
              <Image
                src={"/image/icon-support/ic_phone_call.svg"}
                width={45}
                height={45}
                alt=""
              />
            </a>
          </div>
          <div
            className="border rounded-full p-1 border-gray-950 cursor-pointer"
            onClick={() => onClickShowFormTT()}
          >
            <Image
              src={"/image/icon-support/help-desk.png"}
              width={45}
              height={45}
              alt=""
            />
          </div>
        </div>
      </div>
      {isShowFormTT && (
        <div className="h-full w-full flex justify-center fixed top-0 items-center sm:top-0 left-0 right-0">
          <div className="z-10 sm:overflow-scroll bg-white sm:w-full sm:h-full sm:flex-col w-[826px] h-[459px] border border-solid border-gray-300 rounded-lg shadow-2xl flex">
            <div
              className="m-4 cursor-pointer w-8 h-8"
              onClick={() => onClickShowFormTT()}
            >
              <Image
                src={"/image/icon-support/x.png"}
                width={23}
                height={23}
                alt=""
              />
            </div>
            <div className="flex justify-center items-center sm:flex-col">
              <div className="flex justify-center items-center">
                <Image
                  src={"/image/introduce/introduce-5.jpg"}
                  width={512}
                  height={435}
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center mx-3">
                <h3 className="text-lg font-bold text-center mb-3">
                  Vui lòng để lại thông tin liên hệ
                  <br /> Máy lóc nước Hà nam sẽ tư vấn ngay cho bạn
                </h3>
                <div className="w-full">
                  <CustomInput
                    name=""
                    label="Họ và Tên"
                    onChange={(e) => setName(e?.target?.value)}
                  />
                </div>
                <div className="w-full">
                  <CustomInput
                    name=""
                    label="Số điện thoại"
                    onChange={(e) => setPhone(e?.target?.value)}
                  />
                </div>
                <div className="w-full">
                  <CustomTextArea
                    label="Câu hỏi thường gặp"
                    onChange={(e) => setTextQuestion(e?.target?.value)}
                  />
                </div>
                <div>
                  <Button
                    type="primary"
                    size={"large"}
                    className="bg-red-600"
                    onClick={() =>
                      onClickPostInformation({ name, phone, textQuestion })
                    }
                  >
                    Gửi thông tin
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 left-0 bg-black opacity-45 w-full h-full" onClick={() => onClickShowFormTT()}></div>
        </div>
      )}
    </div>
  );
};

export default MenuChat;
