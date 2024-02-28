"use client";

import React, { useEffect, useState } from "react";
import CustomInput from "../FormItemFloatLabel/CustomInput";
import { getProviders, signIn } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
import Loading from "../Loading/Loading";

interface TypeSignin {
  type: string;
}

const Signin = ({ type }: TypeSignin) => {
  const [providers, setProviders] = useState<any>(null);
  const [informationTextNameLogin, setInformationTextNameLogin] =
    useState<string>();
  const [informationTextNameEmail, setInformationTextNameEmail] =
    useState<string>();
  const [informationTextPassword, setInformationTextPassword] =
    useState<string>();
  const [
    informationTextAgainPassRegister,
    setInformationTextAgainPassRegister,
  ] = useState<string>();
  const [isLoadding, setIsLoadding] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  const postCreateUser = async () => {
    setIsLoadding(true);
    try {
      const fetchApi = await fetch("/api/user", {
        method: "POST",
        body: JSON.stringify({
          username: informationTextNameLogin,
          password: informationTextPassword,
          email: informationTextNameEmail,
        }),
      });
      if (fetchApi?.ok) {
        setIsLoadding(false);
        router.push("/");
      }
    } catch (error) {
      setIsLoadding(false);
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-full">
        <div className="flex w-10/12 border-y flex-col h-full justify-between items-center">
          <div className="h-14 flex justify-center items-end my-6 w-full font-semibold font-sans text-3xl leading-10 text-black500">
            {type === "signin" ? "Đăng nhập" : "Đăng kí"}
          </div>
          <div className="max-w-[424px] max-h-[571px] h-[571px] shadow-2xl p-6 rounded-xl">
            <div className="w-96">
              <div className="">
                <div>Tên Đăng nhập</div>
                <CustomInput
                  label=""
                  name="name-login"
                  onChange={(e) =>
                    setInformationTextNameLogin(e?.target?.value)
                  }
                />
              </div>
              {type === "register" && (
                <div className="">
                  <div>Email</div>
                  <CustomInput
                    label=""
                    name="name-email"
                    onChange={(e) =>
                      setInformationTextNameEmail(e?.target?.value)
                    }
                  />
                </div>
              )}
              <div className="">
                <div>Mật khẩu</div>
                <CustomInput
                  label=""
                  name="password-login"
                  onChange={(e) => setInformationTextPassword(e?.target?.value)}
                />
              </div>
              {type === "register" && (
                <div className="">
                  <div>Xác nhận mật khẩu</div>
                  <CustomInput
                    label=""
                    name="name-xd-password"
                    onChange={(e) =>
                      setInformationTextAgainPassRegister(e?.target?.value)
                    }
                  />
                </div>
              )}
            </div>
            {type === "signin" && (
              <div>
                <div>Quên mật khẩu</div>
                <div className="">
                  <div className="h-14 my-3 flex cursor-pointer text-white justify-center items-center bg-blue-500 rounded-xl shadow-xl border">
                    Đăng nhập
                  </div>
                  <div className="h-14 font-sans flex my-3 cursor-pointer text-white justify-center items-center bg-[#ff0000] rounded-xl shadow-xl border">
                    {providers &&
                      Object.values(providers).map((provider: any) => (
                        <button
                          type="button"
                          key={provider.name}
                          onClick={() => {
                            signIn(provider.id);
                          }}
                          className="black_btn flex items-center"
                        >
                          <Image
                            src="/image/home/logo-google.png"
                            width={55}
                            height={55}
                            alt=""
                          />
                          Đặng nhập bằng google
                        </button>
                      ))}
                  </div>
                </div>
                <div className="flex justify-center my-3 ">
                  Chưa có tài khoản?{" "}
                  <Link
                    href="/register"
                    className="uppercase text-blue-500 underline"
                  >
                    Đăng kí
                  </Link>
                </div>
              </div>
            )}
            {type === "register" && (
              <div className="">
                <div
                  onClick={() => postCreateUser()}
                  className="h-14 my-3 flex cursor-pointer text-white justify-center items-center bg-blue-500 rounded-xl shadow-xl border"
                >
                  Đăng kí tài khoản
                </div>
              </div>
            )}
          </div>
          <div className="my-6 text-center justify-between font-normal text-sm not-italic text-ink500">
            © Bản quyền thuộc về Cửa Hàng Dũng Duyên
          </div>
        </div>
        {isLoadding && <Loading/>}
      </div>
    </div>
  );
};

export default Signin;
