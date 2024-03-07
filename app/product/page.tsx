"use client";
import CustomSelect from "@/components/FormItemFloatLabel/CustomSelect";
import ListProduct from "@/components/ListProduct/ListProduct";
import { Card, Input } from "antd";
import { useEffect, useState } from "react";
import productnews from "../../utils/product.json"
// const productnews = [
//   {
//     key: 1,
//     label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
//     price: "3.999.999",
//     imgage: "/image/product/may-loc-nuoc-kangaroo.png",
//     type: "product",
//     evaluate: "1",
//     link: "/product/may-loc-nuoc-nong-lanh-karofi-kad-d66",
//   },
//   {
//     key: 2,
//     label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
//     price: "4.999.999",
//     imgage: "/image/product/may-loc-nuoc-kangaroo.png",
//     type: "accessory",
//     evaluate: "2",
//     link: "/product/may-loc-nuoc-nong-lanh-karofi-kad-d66",
//   },
//   {
//     key: 3,
//     label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
//     price: "8.999.999",
//     imgage: "/image/product/may-loc-nuoc-kangaroo.png",
//     type: "accessory",
//     evaluate: "3",
//     link: "/product/may-loc-nuoc-nong-lanh-karofi-kad-d66",
//   },
//   {
//     key: 4,
//     label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
//     price: "7.999.999",
//     imgage: "/image/product/may-loc-nuoc-kangaroo.png",
//     type: "product",
//     evaluate: "4",
//     link: "/product/may-loc-nuoc-nong-lanh-karofi-kad-d66",
//   },
//   {
//     key: 5,
//     label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
//     price: "7.999.999",
//     imgage: "/image/product/may-loc-nuoc-kangaroo.png",
//     type: "product",
//     evaluate: "1",
//     link: "/product/may-loc-nuoc-nong-lanh-karofi-kad-d66",
//   },
//   {
//     key: 6,
//     label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
//     price: "7.999.999",
//     imgage: "/image/product/may-loc-nuoc-kangaroo.png",
//     type: "product",
//     evaluate: "1",
//     link: "/product/may-loc-nuoc-nong-lanh-karofi-kad-d66",
//   },
// ];
const ProductPage = () => {
  // const [itemSearch, setItemSearch] = useState("");
  // const [filterProduct, setFilterProduct] = useState(productnews);

  // useEffect(() => {
  //   if (itemSearch) {
  //     const filterDataSearch = filterProduct?.filter((item) =>
  //       item?.label?.toLowerCase()?.includes(itemSearch?.toLowerCase())
  //     );
  //     setFilterProduct(filterDataSearch);
  //   } else {
  //     setFilterProduct(productnews);
  //   }
  // }, [itemSearch, productnews]);
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
            <ListProduct valueproduct={productnews?.productnews} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
