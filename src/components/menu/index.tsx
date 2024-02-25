"use client";

import Image from "next/image";
import Link from "next/link";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useEffect, useState } from "react";

const Menu = (props: any) => {
  const { data: session } = useSession<any>();

  const [providers, setProviders] = useState<any>(null);
  const [toggleDropdown, setToggleDropdown] = useState<any>(false);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      console.log("res", res);
      setProviders(res);
    })();
  }, []);

    const itemsMenu = [
        {
          label: "Trang chủ",
          key: "home",
          url: "/"
        },
        {
          label: "Sản phẩm",
          key: "product",
          url: "/product"
        },
        {
          label: "Dịch vụ",
          key: "service",
          url: "/service"
        },
        {
          label: "Tin tức",
          key: "news",
          url: "/news"
        },
        {
          label: "signin",
          key: "news",
          url: ""
        },
      ];

      console.log("providers", providers ? "1" : "2");
    return (
      <>
      <div className="min-h-12 flex justify-center flex-col border-b border-solid border-[#f4f5f6] items-center">
      <div className="w-11/12">
        <div className="flex justify-end ">
          <div className="flex justify-center items-center">
            <Image
              src={"/image/home/phone-call.svg"}
              alt=""
              width={21}
              height={22}
              className="mr-2"
            />
            <a href="tel:0366683747">Hotline: 0962.594.358</a>
          </div>
          <div className="flex ml-6">
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
        <div className="w-full flex justify-center bg-gradient-to-r from-indigo-500 via-sky-500 via-30% to-emerald-500">
        <div className="w-9/12 flex">
          <div className="w-3/12 flex justify-center">
            <Link href={"/"}><img src="/image/home/logo.png" alt="" /></Link>
          </div>
          <div className="w-9/12">
            <ul className="flex justify-center">
              {itemsMenu?.map((items) => {
                return (
                  <li key={items?.key} className="cursor-pointer flex justify-center items-center">
                    {items?.label !== "signin" && <Link href={items?.url || ""} className="p-4 ">{items?.label}</Link>}
                    {items?.label === "signin" && <button
                  type='button'
                  onClick={() => {
                    signIn();
                  }}
                  className='black_btn'
                >
                  Sign in
                </button>
                    // providers &&
              // Object.values(providers).map((provider :any) => (
              //   <button
              //     type='button'
              //     key={provider?.name}
              //     onClick={() => {
              //       signIn(provider?.id);
              //     }}
              //     className='black_btn'
              //   >
              //     Sign in
              //   </button>
              // ))
              }
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      </>
    );
}

export default Menu;