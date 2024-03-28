"use client";
import React, { useEffect, useState } from "react";
import HomeNews from "./DetailNew";
import { Tabs, TabsProps } from "antd";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { TypeProduct } from "../../../utils/TypeProduct";
import Image from "next/image";
import CardItem from "../Card/CardItem";

const itemsmenu = [
  {
    id: 1,
    key: "/news",
    label: "Tin tức mới",
  },
  {
    id: 2,
    key: "/news/trai-nghiem-khach-hang",
    label: "Trải nghiệm khách hàng",
  },
  {
    id: 3,
    key: "/news/uu-dai-va-khuyen-mai",
    label: "Ưu đãi & khuyến mãi",
  },
];

const NewsComponents = ({ valueProduct, paramSlug }: any) => {

  return (
    <div className="w-full h-auto">
      <div>
        <div className="bg-[url('/image/tintuc/bg-tintuc.jpg')] sm:justify-around w-full sm:h-56 lg:h-96 xl:h-96 flex justify-center items-center font-medium sm:text-lg lg:text-2xl xl:text-4xl text-center">
          Tin tức mới nhất từ cửa hàng và những chia sẻ
          <br />
          giúp bạn sống vui, sống khỏe mỗi ngày
        </div>
        <div className="flex justify-center h-14 bg-gradient-to-r from-indigo-500 via-sky-500 via-30% to-emerald-500">
          <ul className="sm:py-0 w-9/12 sm:flex sm:justify-start sm:items-center sm:overflow-auto flex">
            {itemsmenu?.map((item) => {
              return (
                <li
                  key={item?.id}
                  className="lg:text-lg xl:text-xl flex justify-center items-center sm:text-sm md:text-md cursor-pointer mr-6 hover:text-gray-300  text-white sm:w-24 sm:flex"
                >
                  <Link
                    href={item?.key}
                    className="sm:flex sm:w-24 sm:h-14 sm:justify-center sm:items-center sm:text-center"
                  >
                    {item?.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex justify-center items-center text-white">
            next
          </div>
        </div>
        <div className="bg-white">
          <div className="flex justify-center items-center flex-col">
            <Image
              src={"/image/tintuc/bg-no-tintuc.jpg"}
              width={360}
              height={360}
              alt=""
            />
            <div className="text-black text-2xl font-semibold">Chưa có tin tức mới</div>
          </div>
        </div>
        <div className="flex justify-center w-full">
          <div className="flex w-9/12 flex-col my-6">
            <div>
              <div className="w-full grid grid-cols-1 gap-1 lg:grid-cols-4 lg:gap-4 sm:grid-cols-1 sm:gap-1 md:grid-cols-2 md:gap-2 xl:grid-cols-6 xl:gap-6">
                {valueProduct?.map((item: any) => {
                  return (
                    <div className="mr-1 sm:mb-6" key={item.key}>
                      <CardItem
                        label={item?.label}
                        image={item?.image}
                        time={item?.time}
                        url={item?.url}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsComponents;
