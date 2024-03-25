"use client";
import CustomSelect from "@/components/FormItemFloatLabel/CustomSelect";
import ListProduct from "@/components/ListProduct/ListProduct";
import axios from "axios";
import { useEffect, useState } from "react";
import { getApiProduct } from "../context/QueryApi";
import { AuthContextDefault } from "../context/AuthContext";
import Image from "next/image";

const ProductPage = () => {
  const { isLoadingProduct, dataProduct } = AuthContextDefault();
  const [typeProduct, setTypeProduct] = useState<string>("");
  const [accessoryProduct, setAccessoryProduct] = useState<string>("");
  const [nameProduct, setNameProduct] = useState<string>("");
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
              <CustomSelect
                label=""
                onChange={(value) => setNameProduct(value)}
                value={[{ value: "all", label: "Tất cả" }]}
              />
            </div>
            <div>
              <h3 className="text-white text-xl">Phụ kiện máy lọc nước</h3>
              <CustomSelect
                label=""
                onChange={(value) => setAccessoryProduct(value)}
                value={[{ value: "all", label: "Tất cả" }]}
              />
            </div>
            <div>
              <h3 className="text-white text-xl">Loại lõi lọc</h3>
              <CustomSelect
                label=""
                onChange={(value) => setTypeProduct(value)}
                value={[{ value: "all", label: "Tất cả" }]}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center">
          <div className="flex w-10/12 flex-col my-3">
            {isLoadingProduct ? (
              <div className="flex justify-center items-center">
                <Image
                  src="/image/loading-2.gif"
                  width={350}
                  height={350}
                  alt="loader"
                  className="object-contain"
                />
              </div>
            ) : (
              <ListProduct valueproduct={dataProduct} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
