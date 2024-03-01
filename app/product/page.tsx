'use client'
import ListProduct from "@/components/ListProduct/ListProduct";
import { Card, Input } from "antd";
import { useEffect, useState } from "react";

const productnews = [
  {
    key: 1,
    label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
    price: "3.999.999",
    imgage: "/image/product/may-loc-nuoc-kangaroo.png",
    type: 'product',
    evaluate: '1',
    link: "/product/may-loc-nuoc-nong-lanh-karofi-kad-d66",
  },
  {
    key: 2,
    label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
    price: "4.999.999",
    imgage: "/image/product/may-loc-nuoc-kangaroo.png",
    type: 'accessory',
    evaluate: '2',
    link: "/product/may-loc-nuoc-nong-lanh-karofi-kad-d66",

  },
  {
    key: 3,
    label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
    price: "8.999.999",
    imgage: "/image/product/may-loc-nuoc-kangaroo.png",
    type: 'accessory',
    evaluate: '3',
    link: "/product/may-loc-nuoc-nong-lanh-karofi-kad-d66",
  },
  {
    key: 4,
    label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
    price: "7.999.999",
    imgage: "/image/product/may-loc-nuoc-kangaroo.png",
    type: 'product',
    evaluate: '4',
    link: "/product/may-loc-nuoc-nong-lanh-karofi-kad-d66",
  },
  {
    key: 5,
    label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
    price: "7.999.999",
    imgage: "/image/product/may-loc-nuoc-kangaroo.png",
    type: 'product',
    evaluate: '1',
    link: "/product/may-loc-nuoc-nong-lanh-karofi-kad-d66",
  },
  {
    key: 6,
    label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
    price: "7.999.999",
    imgage: "/image/product/may-loc-nuoc-kangaroo.png",
    type: 'product',
    evaluate: '1',
    link: "/product/may-loc-nuoc-nong-lanh-karofi-kad-d66",
  },
];
const ProductPage = () => {
  const [itemSearch, setItemSearch] = useState("")
  const [filterProduct, setFilterProduct] = useState(productnews)
  const onchangeSearch = (value: any) => {
    const textValue = value.textContent || value.innerText
    console.log(textValue)
    setItemSearch(textValue)
  }

  useEffect(() => {
    if (itemSearch) {
      const filterDataSearch = filterProduct?.filter(item => item?.label?.toLowerCase()?.includes(itemSearch?.toLowerCase()));
      console.log("itemSearch", filterProduct?.map(item => item?.label?.toLowerCase()?.includes(itemSearch?.toLowerCase())));
      console.log("filterDataSearch", filterDataSearch)
      setFilterProduct(filterDataSearch)
    } else {
      setFilterProduct(productnews)

    }

  }, [itemSearch, productnews])
  return (
    <div>
      <div className="flex justify-center items-center">
        <h3 className="p-5 font-medium text-2xl">Sản phẩm tại cửa hàng</h3>
      </div>
      <div className="flex justify-center items-end">
        <Input defaultValue="Tìm kiếm sản phẩm" className="w-6/12" onChange={(e) => onchangeSearch(e.target.value)} />
      </div>
      <div>
        <div className="flex justify-center">
          <ListProduct valueproduct={filterProduct} />
        </div>
      </div>
    </div>
  );
}

export default ProductPage