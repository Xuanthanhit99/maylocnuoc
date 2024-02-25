"use client";
import { Breadcrumb, Button, Card, Checkbox, Col, Row, Select } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import "react-slideshow-image/dist/styles.css";
import { Divider, Radio, Table } from "antd";
import type { TableColumnsType } from "antd";
import { useState } from "react";
import Image from "next/image";
const productnews = [
  {
    key: 1,
    label: "MÁY LỌC NƯỚC NÓNG LẠNH KAROFI KAD-D66",
    price: "9.200.000 VND",
    imgage: "/image/product/may-loc-nuoc-kangaroo.png",
    type: "product",
    evaluate: "1",
  },
  {
    key: 2,
    label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
    price: "4.999.999",
    imgage: "/image/product/may-loc-nuoc-kangaroo.png",
    type: "accessory",
    evaluate: "2",
  },
  {
    key: 3,
    label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
    price: "8.999.999",
    imgage: "/image/product/may-loc-nuoc-kangaroo.png",
    type: "accessory",
    evaluate: "3",
  },
  {
    key: 4,
    label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
    price: "7.999.999",
    imgage: "/image/product/may-loc-nuoc-kangaroo.png",
    type: "product",
    evaluate: "4",
  },
  {
    key: 5,
    label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
    price: "8.999.999",
    imgage: "/image/product/may-loc-nuoc-kangaroo.png",
    type: "accessory",
    evaluate: "5",
  },
  {
    key: 6,
    label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
    price: "7.999.999",
    imgage: "/image/product/may-loc-nuoc-kangaroo.png",
    type: "product",
    evaluate: "6",
  },
  {
    key: 7,
    label: "MÁY LỌC NƯỚC NÓNG LẠNH KAROFI KAD-D66",
    price: "9.200.000 VND",
    imgage: "/image/product/may-loc-nuoc-kangaroo.png",
    type: "product",
    evaluate: "1",
  },
  {
    key: 8,
    label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
    price: "4.999.999",
    imgage: "/image/product/may-loc-nuoc-kangaroo.png",
    type: "accessory",
    evaluate: "2",
  },
  {
    key: 9,
    label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
    price: "8.999.999",
    imgage: "/image/product/may-loc-nuoc-kangaroo.png",
    type: "accessory",
    evaluate: "3",
  },
  {
    key: 10,
    label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
    price: "7.999.999",
    imgage: "/image/product/may-loc-nuoc-kangaroo.png",
    type: "product",
    evaluate: "4",
  },
  {
    key: 11,
    label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
    price: "8.999.999",
    imgage: "/image/product/may-loc-nuoc-kangaroo.png",
    type: "accessory",
    evaluate: "5",
  },
  {
    key: 12,
    label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
    price: "7.999.999",
    imgage: "/image/product/may-loc-nuoc-kangaroo.png",
    type: "product",
    evaluate: "6",
  },
];

interface DataType {
  key?: React.Key;
  image?: any;
  name?: string;
  price?: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Image",
    dataIndex: "image",
    render: (text: string) => {
      console.log("text", text)
      return (<Image
    src={text}
    alt=""
    className="mr-2"
    width={66}
    height={66}
  />)},
  },
  {
    title: "Name",
    dataIndex: "name",
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: "Giá thành",
    dataIndex: "price",
  },
  // {
  //   title: "Address",
  //   dataIndex: "address",
  // },
];

// const data: DataType[] = [
//   {
//     key: "1",
//     name: "John Brown",
//     age: 32,
//     address: "New York No. 1 Lake Park",
//   },
//   {
//     key: "2",
//     name: "Jim Green",
//     age: 42,
//     address: "London No. 1 Lake Park",
//   },
//   {
//     key: "3",
//     name: "Joe Black",
//     age: 32,
//     address: "Sydney No. 1 Lake Park",
//   },
//   {
//     key: "4",
//     name: "Disabled User",
//     age: 99,
//     address: "Sydney No. 1 Lake Park",
//   },
// ];


const data: DataType[] = productnews?.map((item,key):any => {
  return {
    key: key,
    name: item?.label,
    price: item?.price,
    image: item?.imgage,
  }
})


const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record: DataType) => ({
    disabled: record.name === "Disabled User", // Column configuration not to be checked
    name: record.name,
  }),
};

const Cart = (props: any) => {
  const [selectionType, setSelectionType] = useState<"checkbox" | "radio">(
    "checkbox"
  );

  const detailProduct = [
    {
      id: 1,
      slug: "may-loc-nuoc-nong-lanh-karofi-kad-d66",
      name: "Máy lọc nước nóng lạnh Karofi KAD-D66",
      marketPrice: 12750000,
      promotionalMarketPrice1: 9200000,
      save: -28,
      promotionalMarketPrice2: 9400000,
      trademark: "karofi",
      model: "KAD-D66",
      guarantee: "36 tháng",
      Designs: "Có cửa",
      quantity: 20,
    },
    {
      id: 2,
      name: "Máy lọc nước nóng lạnh Karofi O-D138",
      slug: "may-loc-nuoc-karofi-optimus-duo-o-d138",
      marketPrice: 12750000,
      promotionalMarketPrice1: 9200000,
      save: -28,
      promotionalMarketPrice2: 9400000,
      trademark: "karofi",
      model: "KAD-D66",
      guarantee: "36 tháng",
      Designs: "Có cửa",
      quantity: 20,
    },
    {
      id: 3,
      name: "Máy lọc nước nóng lạnh Karofi KAD-D66",
      slug: "Máy lọc nước nóng lạnh Karofi KAD-D50",
      marketPrice: 12750000,
      promotionalMarketPrice1: 9200000,
      save: -28,
      promotionalMarketPrice2: 9400000,
      trademark: "karofi",
      model: "KAD-D66",
      guarantee: "36 tháng",
      Designs: "Có cửa",
      quantity: 20,
    },
    {
      id: 4,
      name: "Máy lọc nước nóng lạnh Karofi KAD-D66",
      slug: "Máy lọc nước nóng lạnh Karofi KAD-D52",
      marketPrice: 12750000,
      promotionalMarketPrice1: 9200000,
      save: -28,
      promotionalMarketPrice2: 9400000,
      trademark: "karofi",
      model: "KAD-D66",
      guarantee: "36 tháng",
      Designs: "Có cửa",
      quantity: 20,
    },
  ];

  return (
    <div className="flex justify-center bg-[#f3f3f3]">
      <div className="w-9/12">
        {/* Breadcrumb */}
        <div className="h-14 flex items-center ">
          <Breadcrumb
            items={[
              {
                href: "/",
                title: <HomeOutlined />,
              },
              {
                href: "/product",
                title: (
                  <>
                    <span>Application List</span>
                  </>
                ),
              },
              {
                title: props?.params.slug,
              },
            ]}
          />
        </div>
        <div className="relative ">
          <Table
            rowSelection={{
              type: selectionType,
              ...rowSelection,
            }}
            columns={columns}
            dataSource={data}
            pagination={false}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-red-500 h-14 flex justify-between items-center px-5 w-full">
            <div>Số lượng sản phẩm: <span></span></div>
            <div>Giá sản phẩm: <span></span></div>
            <div>Thanh toán</div>
          </div>
        </div>
        {/* ctkm */}
      </div>
    </div>
  );
};

export default Cart;
