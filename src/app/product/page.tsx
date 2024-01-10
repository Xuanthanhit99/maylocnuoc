'use client'
import { Card, Input } from "antd";
import { useEffect, useState } from "react";

const productnews = [
    {
      key: 1,
      label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
      price: "3.999.999",
      imgage: "/image/product/may-loc-nuoc-kangaroo.png",
      type: 'product',
      evaluate: '1'
    },
    {
      key: 2,
      label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
      price: "4.999.999",
      imgage: "/image/product/may-loc-nuoc-kangaroo.png",
      type: 'accessory',
      evaluate: '2'
    },
    {
      key: 3,
      label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
      price: "8.999.999",
      imgage: "/image/product/may-loc-nuoc-kangaroo.png",
      type: 'accessory',
      evaluate: '3'
    },
    {
      key: 4,
      label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
      price: "7.999.999",
      imgage: "/image/product/may-loc-nuoc-kangaroo.png",
      type: 'product',
      evaluate: '4',
    },
    {
      key: 5,
      label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
      price: "7.999.999",
      imgage: "/image/product/may-loc-nuoc-kangaroo.png",
      type: 'product',
      evaluate: '1'
    },
    {
      key: 6,
      label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
      price: "7.999.999",
      imgage: "/image/product/may-loc-nuoc-kangaroo.png",
      type: 'product',
      evaluate: '1'
    },
    {
      key: 7,
      label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
      price: "7.999.999",
      imgage: "/image/product/may-loc-nuoc-kangaroo.png",
      type: 'accessory',
      evaluate: '1'
    },
    {
      key: 8,
      label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
      price: "7.999.999",
      imgage: "/image/product/may-loc-nuoc-kangaroo.png",
      type: 'accessory',
      evaluate: '1'
    },
    {
      key: 9,
      label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
      price: "7.999.999",
      imgage: "/image/product/may-loc-nuoc-kangaroo.png",
      type: 'accessory',
      evaluate: '1'
    },
    {
      key: 10,
      label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
      price: "7.999.999",
      imgage: "/image/product/may-loc-nuoc-kangaroo.png",
      type: 'accessory',
      evaluate: '3'
    },
    {
      key: 11,
      label: "Ma",
      price: "7.999.999",
      imgage: "/image/product/may-loc-nuoc-kangaroo.png",
      type: 'product',
      evaluate: '1'
    },
    {
      key: 12,
      label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
      price: "7.999.999",
      imgage: "/image/product/may-loc-nuoc-kangaroo.png",
      type: 'accessory',
      evaluate: '1'
    },
  ];
const ProductPage = () => {
    const [itemSearch, setItemSearch] = useState("")
    const [filterProduct,setFilterProduct] = useState(productnews)
    const onchangeSearch = (value: any) => {
        const textValue = value.textContent || value.innerText
        console.log(textValue)
        setItemSearch(textValue)
    }

    useEffect(() => {
        if(itemSearch) {
            const filterDataSearch = filterProduct?.filter(item => item?.label?.toLowerCase()?.includes(itemSearch?.toLowerCase()));
            console.log("itemSearch", filterProduct?.map(item => item?.label?.toLowerCase()?.includes(itemSearch?.toLowerCase())));
            console.log("filterDataSearch", filterDataSearch)
            setFilterProduct(filterDataSearch)
        } else {
            setFilterProduct(productnews)

        }
     
    },[itemSearch, productnews])
    return (
        <div>
            <div className="flex justify-center items-center">
                <h3 className="p-5 font-medium text-2xl">Sản phẩm tại cửa hàng</h3>
            </div>
            <div className="flex justify-center items-end">
                <Input defaultValue="Tìm kiếm sản phẩm" className="w-6/12" onChange={(e) => onchangeSearch(e.target.value)}/>
            </div>
            <div>
            <div className="flex justify-center">
          <div className="flex w-10/12 justify-center mt-3">
            <div className="w-full grid grid-cols-6 gap-6">
              {filterProduct.map((item: any) => {
                return (
                    <div
                      className={`${
                        item.key > 1 && item.key < 6 ? "mr-1" : ""
                      }`}
                      key={item.key}
                    >
                      <Card
                        hoverable
                        cover={<img alt="example" src={item?.imgage} />}
                      >
                        <div className="mt-1">
                          <h5 className="text-base font-medium	text-center">
                            {item?.label}
                          </h5>
                          <p className="text-sx font-medium	text-center text-red-500">
                            <span className="">{item?.price} </span>đ
                          </p>
                          <p className="font-medium	text-sx text-center">
                            Liên hệ
                          </p>
                        </div>
                      </Card>
                    </div>
                );
              })}
            </div>
          </div>
        </div>
            </div>
        </div>
    );
}

export default ProductPage