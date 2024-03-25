"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { VND } from "../../../../../../utils/format";

const ComboProduct = ({ valueproduct, paramSlug }: any) => {
  const [sumMoneyProduct, setSumMoneyProduct] = useState<number>(0);
  const [sumMoneySaveProduct, setSumMoneySaveProduct] = useState<number>(0);

  useEffect(() => {
    const sumArrayPrice = () => {
      const sumArray = valueproduct.reduce((total: any, item:any) => {
        if (item.price > valueproduct?.length) {
            return total + Number(item.price);
        }
        return total;
    }, 0)
    setSumMoneyProduct(sumArray)

    const sumSaveArray = valueproduct.reduce((total: any, item:any) => {
      if (item.marketPrice > valueproduct?.length) {
          return total + Number(item.marketPrice);
      }
      return total;
  }, 0)
  setSumMoneySaveProduct(sumSaveArray)
}
    sumArrayPrice();
  }, [valueproduct]);

  return (
    <div className="mt-4 bg-white">
      <div className="p-3 flex justify-start items-center ">
        <b>
          COMBO CẦN THIẾT CHO{" "}
          {valueproduct
            ?.filter(
              (item: any) =>
                item?.slug?.toLowerCase() === paramSlug?.toLowerCase()
            )?.[0]
            ?.name?.toUpperCase()}
        </b>
      </div>
      <hr className="mb-4" />
      <div className="flex justify-start items-center flex-row sm:flex-col">
        <div className="flex justify-start items-center w-4/5  sm:flex-col sm:w-full">
          {valueproduct
            ?.filter((item: any) => item?.key <= 4)
            ?.map((item: any) => {
              return (
                <div
                  className={`${
                    item.key > 0 && item.key < 6 ? "mr-2" : ""
                  } flex xl:w-1/4 justify-around items-center flex-col xl:h-80 sm:h-32	h-72  border border-[#e5e7eb] hover:shadow-2xl sm:w-full sm:p-3 sm:flex-row`}
                  key={item.key}
                >
                  <div className="w-full flex justify-center items-center sm:w-1/5">
                    {/* !mobile */}
                    <Image
                      src={item?.image}
                      alt=""
                      className="sm:hidden block"
                      width={150}
                      height={150}
                    />
                    {/* mobile */}
                    <Image
                      src={item?.image}
                      alt=""
                      className="sm:block hidden"
                      width={75}
                      height={75}
                    />
                  </div>
                  <div className="mt-1 sm:w-4/5">
                    <h5 className="text-base font-medium	text-center">
                      {item?.label}
                    </h5>
                    <p className="text-sx font-medium	text-center text-red-500">
                      <span className="">{VND(item?.price)} </span>
                    </p>
                    <p className="font-medium	text-sx text-center">Liên hệ</p>
                  </div>
                </div>
              );
            })}
        </div>
        <hr className="my-4 sm:hidden" />
        <div className="sm:h-full flex justify-center items-center flex-col w-1/5 h-72 sm:w-full xl:h-80 border border-[#e5e7eb]">
          <div className="mt-1 flex justify-start items-center flex-col">
            <h5 className="sm:text-base font-medium text-2xl text-center">
              Tổng tiền
            </h5>
            <p className="text-sx font-medium text-center text-red-500 text-base">
              <span className="text-xl">
                {VND(sumMoneyProduct)
                  ?.toString()
                  ?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
              </span>
            </p>
            <p className="font-medium	text-center text-[#999] line-through text-base">
              {VND(sumMoneySaveProduct)?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
            </p>
          </div>
          <div className="w-full mt-4 p-3 text-white flex justify-center items-center flex-col bg-black rounded-sm bg-gradient-to-r from-indigo-500 via-sky-500 via-30% to-emerald-500">
            <b className="xl:text-xl text-center">Mua 4 sản phẩm</b>
            <p className="text-center">
              Tiết kiệm{" "}
              {VND(sumMoneySaveProduct - sumMoneyProduct)?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComboProduct;
