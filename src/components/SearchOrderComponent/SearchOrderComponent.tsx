"use client";
import React, { useEffect, useState } from "react";
import { Tabs, TabsProps } from "antd";
import { useRouter } from "next/navigation";
import CardItem from "../Card/CardItem";
import Link from "next/link";
import CustomInput from "../FormItemFloatLabel/CustomInput";
import axios from "axios";

const SearchOrderComponent = (props: any) => {
  const [phone, setPhone] = useState("");
  const [maDonHang, setMaDonHang] = useState("");
  const [dataOrder, setDataOrder] = useState<any>([]);

  const onSearchOrder =async () => {
    try {
      const dataPush =await axios.post("/api/product/SearchOrderApi", {
        phone,maDonHang
      })
      if(dataPush?.data?.success) {
        setDataOrder(dataPush?.data?.data)
      }
    } catch (error) {
      console.log("error", error);
    }
  }

  console.log("dataOrder", dataOrder);
  
  return (
    <div className="w-full h-auto">
      <div>
        <div className="bg-[url('/image/tintuc/bg-tintuc.jpg')] w-full h-96 flex justify-center items-center font-medium text-4xl text-center">
           Tra cứu đơn hàng tại cửa hàng
        </div>
        <div className="flex justify-center w-full flex-col items-center">
        <div className="w-full text-center flex justify-center items-center h-14 text-xl text-white bg-gradient-to-r from-indigo-500 via-sky-500 via-30% to-emerald-500">Nhập thông tin tìm kiếm đơn hàng</div>
          <div className="flex w-9/12 flex-col my-6">
            <div>
              <div className="mb-4 w-full grid grid-cols-4 gap-4 sm:grid-cols-1 sm:gap-1 md:grid-cols-2 md:grid-2 lg:grid-cols-4 lg:grid-4">
                <div>
                  <CustomInput label="Mã đơn hàng" name="madonhang" value={maDonHang} onChange={(e) => {setMaDonHang(e?.target?.value)}}/>
                  {maDonHang === "" && <div className="text-red-500 text-sm text-start">*Bạn cần điền mã đơn hàng để tra cứu</div>}
                </div>
                <div>
                  <CustomInput label="Số điện thoại" name="phone" value={phone} onChange={(e) => {setPhone(e?.target?.value)}}/>
                  {/* {phone === "" && <div className="text-red-500 text-sm text-start">*Bạn cần điền mã đơn hàng để tra cứu</div>} */}
                </div>
                <div>
                  {/* {phone === "" && <div className="text-red-500 text-sm text-start">*Bạn cần điền mã đơn hàng để tra cứu</div>} */}
                </div>
                <button className="flex justify-center items-center text-center text-base text-white bg-red-500 h-12 rounded-lg" onClick={() => onSearchOrder()}>Tìm kiếm</button>
              </div>
              <hr className="my-3"/>
            </div>
            <div className="border">
              <div className="w-full text-center flex justify-center items-center h-14 text-xl text-white bg-gradient-to-r from-indigo-500 via-sky-500 via-30% to-emerald-500">Thông tin đơn hàng</div>
              <div className="flex justify-center items-center sm:flex-col">
              <div className="w-1/2 border-r sm:w-full md:w-full">
                <div className="h-14 border-b flex justify-center items-center text-center bg-red-500 text-white text-xl">Thông tin người đặt</div>
                <div>
                  <p className="h-14 border-b flex justify-start items-center text-start text-lg ">Họ và tên: <span className="text-red-500 ml-2">{dataOrder?.[0]?.username}</span></p>
                  <p className="h-14 border-b flex justify-start items-center text-start text-lg ">Số điện thoại: <span className="text-red-500 ml-2">{dataOrder?.[0]?.phone}</span></p>
                  <p className="h-14 border-b flex justify-start items-center text-start text-lg ">Email: <span className="text-red-500 ml-2">{dataOrder?.[0]?.email}</span></p>
                  <p className="h-14 border-b flex justify-start items-center text-start text-lg ">Trạng thái đơn hàng: <span className="text-red-500 ml-2">{dataOrder?.[2]?.orderstatus}</span></p>
                  <p className="h-14 border-b flex justify-start items-center text-start text-lg ">Trạng thái thanh toán: <span className="text-red-500 ml-2">{dataOrder?.[2]?.paymentstatus ? "Đã thanh toán" : "Chưa thanh toán"}</span></p>
                </div>
              </div>
              <div className="w-1/2 sm:w-full md:w-full">
                <div className="h-14 border-b flex justify-center items-center text-center bg-red-500 text-white text-xl">Thông tin nhận hàng</div>
                <div>
                  <p className="h-14 border-b flex justify-start items-center text-start text-lg" >Tỉnh/Thành phố: <span className="text-red-500 ml-2">{dataOrder?.[1]?.city}</span></p>
                  <p className="h-14 border-b flex justify-start items-center text-start text-lg" >Quận/Huyện: <span className="text-red-500 ml-2">{dataOrder?.[1]?.district}</span></p>
                  <p className="h-14 border-b flex justify-start items-center text-start text-lg" >Địa chỉ: <span className="text-red-500 ml-2">{dataOrder?.[1]?.address}</span></p>
                  <p className="h-14 border-b flex justify-start items-center text-start text-lg" >Ghi chú: <span className="text-red-500 ml-2">{dataOrder?.[1]?.note}</span></p>
                  <p className="h-14 border-b flex justify-start items-center text-start text-lg" >Mã đơn hàng: <span className="text-red-500 ml-2">{dataOrder?.[2]?.codeorders}</span></p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchOrderComponent;
