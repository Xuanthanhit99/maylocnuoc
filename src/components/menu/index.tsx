"use client";

import Image from "next/image";
import Link from "next/link";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useEffect, useState } from "react";

type typeUserGoogle = {
  email: string,
  image: string,
  name: string,
}

const Menu = (props: any) => {
  const { data: session } = useSession<any>();
  console.log("session", session);
  const [providers, setProviders] = useState<any>(null);
  const [toggleDropdown, setToggleDropdown] = useState<any>(false);
  const [isMenuMobile, setIsMenuMobile] = useState<any>(false);
  const [isMenuLeft, setIsMenuLeft] = useState<any>(false);
  const [userGoogle, setUserGoogle] = useState<typeUserGoogle>();

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  useEffect(() => {
    if(session) {
      // setUserGoogle(session.user)
    }
  }, [session])

  const itemsMenu = [
    {
      label: "Trang chủ",
      key: "home",
      url: "/",
    },
    {
      label: "Sản phẩm",
      key: "product",
      url: "/product",
    },
    {
      label: "Dịch vụ",
      key: "service",
      url: "/service",
    },
    {
      label: "Tin tức",
      key: "news",
      url: "/news",
    },
    {
      label: "signin",
      key: "signin",
      url: "/signin",
    },
  ];
  return (
    <>
      <div className="min-h-12 flex justify-center flex-col border-b border-solid border-[#f4f5f6] items-center">
        <div className="w-11/12">
          <div className="flex lg:justify-end xl:justify-end justify-between items-center">
            <div className="flex lg:hidden xl:hidden cursor-pointer">
              <div>
                <Image
                  src={"/image/home/icon-menu.jpg"}
                  alt=""
                  width={32}
                  height={32}
                  onClick={() => setIsMenuLeft(true)}
                />
              </div>
              <div className={`${isMenuLeft ? "block" : "hidden"} absolute top-0 right-0 z-30 w-full flex h-full`}>
                <div className="w-1/3 bg-slate-700 opacity-20" onClick={() => setIsMenuLeft(false)}></div>
                <ul className="flex flex-col w-2/3 h-full bg-slate-700 text-white">
                <li className="p-3 cursor-pointer border-b flex justify-end items-end bg-gradient-to-r from-indigo-500 via-sky-500 via-30% to-emerald-500">
                  <Image
                    src={"/image/icon-support/x.png"}
                    alt=""
                    width={22}
                    height={22}
                    onClick={() => setIsMenuLeft(false)}
                  />
                  </li>
                  <li className="p-3 border-b cursor-pointer hover:bg-slate-400 hover:text-slate-900">
                    <Link href={"/"}>Trang chủ</Link>
                  </li>
                  <li className="p-3 border-b cursor-pointer hover:bg-slate-400 hover:text-slate-900">
                    <Link href={"/"}>Về chúng tôi</Link>
                  </li>
                  <li className="p-3 border-b cursor-pointer hover:bg-slate-400 hover:text-slate-900">
                    <Link href={"/product"}>Sản phẩm</Link>
                  </li>
                  <li className="p-3 border-b cursor-pointer hover:bg-slate-400 hover:text-slate-900">
                    <Link href={"/product"}>Tin tức</Link>
                  </li>
                  <li className="p-3 border-b cursor-pointer hover:bg-slate-400 hover:text-slate-900">
                    <Link href={"/product"}>Dịch vụ</Link>
                  </li>
                  {session && <li className="p-3 rounded-b-lg cursor-pointer hover:bg-slate-400 hover:text-slate-900">
                  <Link href={"/signin"}>sign In</Link>
                  </li>}
                </ul>
              </div>
            </div>
            <div className="flex">
              <div
                className="flex lg:hidden xl:hidden cursor-pointer"
                onClick={() => setIsMenuMobile(!isMenuMobile)}
              >
                <Image
                  src={"/image/home/vn31.png"}
                  alt=""
                  width={32}
                  height={32}
                />
                <div className="flex items-center ml-1">
                  <Image
                    src={
                      isMenuMobile
                        ? "/image/home/arrow-top.svg"
                        : "/image/home/arrow-bottom.svg"
                    }
                    alt=""
                    width={12}
                    height={12}
                  />
                </div>
              </div>
              <div
                className={`${
                  isMenuMobile
                    ? "block absolute top-12 right-3 shadow-2xl z-30"
                    : "hidden"
                } lg:block lg:flex xl:block xl:flex bg-slate-700 lg:bg-white xl:bg-white`}
              >
                <div className="flex justify-center items-center w-40 lg:w-auto xl:w-auto h-12 p-3 rounded-t-lg ">
                  <Image
                    src={"/image/home/phone-call.svg"}
                    alt=""
                    width={21}
                    height={22}
                    className="mr-2"
                  />
                  <a href="tel:0366683747">Hotline: 0962.594.358</a>
                </div>
                <hr className="lg:hidden xl:hidden" />
                <div className="flex xl-ml-6 h-12 p-3 rounded-b-lg w-40">
                  <img
                    src={"/image/home/vn31.png"}
                    alt=""
                    className="mr-2 w-[21px] h-[22px]"
                  />
                  Tiếng việt
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center bg-gradient-to-r from-indigo-500 via-sky-500 via-30% to-emerald-500 ">
        <div className="w-9/12 flex">
          <div className="w-3/12 flex justify-center">
            {/* <Link href={"/"}><img src="/image/home/logo.png" alt="" /></Link> */}
          </div>
          <div className="w-9/12 lg:block sm:hidden md:hidden xl:block"> 
            <ul className="flex justify-center">
              {itemsMenu?.map((items) => {
                return (
                  <li
                    key={items?.key}
                    className="cursor-pointer flex justify-center items-center"
                  >
                      <Link href={items?.url || ""} className="p-4 ">
                        {items?.label}
                      </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
