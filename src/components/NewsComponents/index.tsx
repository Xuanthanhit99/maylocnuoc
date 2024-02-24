"use client";
import React, { useEffect, useState } from "react";
import HomeNews from "./DetailNew";
import { Tabs, TabsProps } from "antd";
import { useRouter } from "next/navigation";
import CardItem from "../card/index";
import Link from "next/link";

const itemsmenu = [
  {
    id: 1,
    key: "",
    label: "Tin tức mới",
  },
  {
    id: 2,
    key: "sua-may-loc-nuoc",
    label: "Sửa máy lọc nước",
  },
  {
    id: 3,
    key: "thay-loi-loc-nuoc",
    label: "Thay lõi lọc nước",
  },
  {
    id: 4,
    key: "tu-van",
    label: "Tư vấn",
  },
  {
    id: 5,
    key: "trai-nghiem-khach-hang",
    label: "Trải nghiệm khách hàng",
  },
  {
    id: 6,
    key: "uu-dai-va-khuyen-mai",
    label: "Ưu đãi & khuyến mãi",
  },
];

const listnews = [
  {
    key: 1,
    label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
    image: "/image/product/may-loc-nuoc-kangaroo.png",
    time: "16:52 01/02/2024",
    url: "/news/may-loc-nuoc-karofi",
  },
  {
    key: 2,
    label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
    image: "/image/product/may-loc-nuoc-kangaroo.png",
    time: "16:52 01/02/2024",
    url: "/news/may-loc-nuoc-karofi",
  },
  {
    key: 3,
    label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
    image: "/image/product/may-loc-nuoc-kangaroo.png",
    time: "16:52 01/02/2024",
    url: "/news/may-loc-nuoc-karofi",
  },
  {
    key: 4,
    label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
    image: "/image/product/may-loc-nuoc-kangaroo.png",
    time: "16:52 01/02/2024",
    url: "/news/may-loc-nuoc-karofi",
  },
  {
    key: 5,
    label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
    image: "/image/product/may-loc-nuoc-kangaroo.png",
    time: "16:52 01/02/2024",
    url: "/news/may-loc-nuoc-karofi",
  },
  {
    key: 6,
    label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
    image: "/image/product/may-loc-nuoc-kangaroo.png",
    time: "16:52 01/02/2024",
    url: "/news/may-loc-nuoc-karofi",
  },
];

const News = (props: any) => {
  return (
    <div className="w-full h-auto">
      <div>
        <div className="bg-[url('/image/tintuc/bg-tintuc.jpg')] w-full h-96 flex justify-center items-center font-medium text-4xl text-center">
          Tin tức mới nhất từ cửa hàng và những chia sẻ
          <br />
          giúp bạn sống vui, sống khỏe mỗi ngày
        </div>
        <div className="flex justify-center h-14 bg-gradient-to-r from-indigo-500 via-sky-500 via-30% to-emerald-500">
          <ul className="flex py-4 w-9/12">
            {itemsmenu?.map((item) => {
              return (
                <li
                  key={item?.id}
                  className="cursor-pointer mr-6 hover:text-gray-300  text-white"
                >
                  {item?.label}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex justify-center w-full">
          <div className="flex w-9/12 flex-col my-6">
            <div>
              <div className="w-full grid grid-cols-5 gap-5">
                {listnews.map((item: any) => {
                  return (
                    <div
                      className={`${
                        item.key > 1 && item.key < 6 ? "mr-1" : ""
                      }`}
                      key={item.key}
                    >
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

export default News;
