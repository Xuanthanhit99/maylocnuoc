"use client";
import CustomSelect from "@/components/FormItemFloatLabel/CustomSelect";
import ListProduct from "@/components/ListProduct/ListProduct";
import axios from "axios";
import { useEffect, useState } from "react";
import { getApiProduct } from "../context/QueryApi";

const ProductPage = () => {
  const [dataProduct, setDataProduct] = useState([])
  useEffect(() => {
    const getApi = async () => {
      const getApiNew = await getApiProduct()
      setDataProduct(getApiNew?.data)
    }
    getApi()
  },[]);
  return (
    <div>
      <div className="flex justify-center flex-col items-center bg-gradient-to-r from-indigo-500 via-sky-500 via-30% to-emerald-500">
        <div className="p-5 font-medium text-4xl my-4 text-white h-14 text-center flex justify-center items-center">
          Tất cả các sản phẩm tại cửa hàng
        </div>
        <div className="flex w-10/12 flex-col">
          <div className="w-full grid grid-cols-4 gap-4">
            <div>
              <h3 className="text-white text-xl">Máy lọc nước:</h3>
              <CustomSelect label="" />
            </div>
            <div>
              <h3 className="text-white text-xl">Phụ kiện máy lọc nước</h3>
              <CustomSelect label="" />
            </div>
            <div>
            <h3 className="text-white text-xl">Loại lõi lọc</h3>
              <CustomSelect label="" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center">
          <div className="flex w-10/12 flex-col my-3">
            <ListProduct valueproduct={dataProduct} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
