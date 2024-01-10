"use client";

import Image from "next/image";
export default function index(props: any) {
  console.log("props", props);
    const itemsMenu = [
        {
          label: "Trang chủ",
          key: "home",
        },
        {
          label: "Sản phẩm",
          key: "product",
        },
        {
          label: "Dịch vụ",
          key: "service",
        },
        {
          label: "Tin tức",
          key: "news",
        },
      ];
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
            <img src="/image/home/logo.png" alt="" />
          </div>
          <div className="w-9/12">
            <ul className="flex justify-center">
              {itemsMenu?.map((items) => {
                return (
                  <li key={items?.key} className="p-4 cursor-pointer">
                    {items?.label}
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
