"use client";
import Image from "next/image";
import React, { useState } from "react";
import CustomInput from "../FormItemFloatLabel/CustomInput";
import CustomTextArea from "../FormItemFloatLabel/CustomTextArea";
import { Button } from "antd";
import axios from "axios";

const MenuChat = () => {
  const [isShowFormTT, setIsShowFormTT] = useState<boolean>(false);
  const [isShowListSocialMess, setIsShowListSocialMess] = useState<boolean>(false);

    const onClickPostInformation = async () => {
        try {
            const postApi = await axios.post("/api/postApiInformationAdvise", {
                name: "testname",
                phone: "036683747",
                questions: "test-textarea"
            })
            if(postApi) {
                return postApi
            }
            console.log("dâd", postApi)
        } catch (error) {
            
        }
    }

  return (
    <div>
      <div>
        <div className="border rounded-full p-1 border-gray-950">
            {isShowListSocialMess ? <div>
            <ul className="my-3">
            <li className="mb-3">
                    <a
                    href="http://zalo.me/4087784932765661863"
                    target="_blank"
                    className="footer__iconSocial footer__iconSocial--zalo"
                    data-uk-tooltip="Zalo"
                  >
                    <Image src={"/image/icon-support/messenger.svg"} alt="" width={45} height={45}/>
                  </a>
                  </li>
                <li className="mb-3">
                    <a
                    href="http://zalo.me/4087784932765661863"
                    target="_blank"
                    className="footer__iconSocial footer__iconSocial--zalo"
                    data-uk-tooltip="Zalo"
                  >
                    <Image src={"/image/icon-support/zalo.svg"} alt="" width={45} height={45}/>
                  </a>
                  </li>
                  <li className="mb-3 cursor-pointer" onClick={() => setIsShowListSocialMess(false)}>
                    <Image src={"/image/icon-support/x.png"} alt="" width={45} height={45}/>
                  </li>
            </ul>
            </div> : 
            <Image
            className="cursor-pointer"
              src={"/image/icon-support/help-social.png"}
              width={45}
              height={45}
              alt=""
              onClick={() => setIsShowListSocialMess(!isShowListSocialMess)}
            />}
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
          onClick={() => setIsShowFormTT(true)}
        >
          <Image
            src={"/image/icon-support/help-desk.png"}
            width={45}
            height={45}
            alt=""
          />
        </div>
      </div>
      {isShowFormTT && (
        <div className="h-full w-full flex justify-center fixed top-1/4 left-0 right-0">
          <div className="bg-white h-3/6 w-3/6 border border-solid border-gray-300 rounded-lg shadow-2xl flex">
            <div
              className="m-4 cursor-pointer"
              onClick={() => setIsShowFormTT(false)}
            >
              <Image
                src={"/image/icon-support/x.png"}
                width={23}
                height={23}
                alt=""
              />
            </div>
            <div className="flex justify-center items-center">
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
                  <CustomInput name="" label="Họ và Tên" />
                </div>
                <div className="w-full">
                  <CustomInput name="" label="Số điện thoại" />
                </div>
                <div className="w-full">
                  <CustomTextArea label="Câu hỏi thường gặp" />
                </div>
                <div>
                  <Button type="primary" size={"large"} className="bg-red-600" onClick={() => onClickPostInformation()}>
                    Gửi thông tin
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuChat;
