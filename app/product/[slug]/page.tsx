"use client";
import { Breadcrumb, Button, Card, Checkbox, Col, Row } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
// import "react-slideshow-image/dist/styles.css";
import Image from "next/image";
import ProductDetailComponent from "@/components/ProductComponent/ProductDetailComponent/ProductDetailComponent";
import { useSearchParams } from "next/navigation";

// const productnews = [
//   {
//     key: 1,
//     label: "MÁY LỌC NƯỚC NÓNG LẠNH KAROFI KAD-D66",
//     price: "9.200.000 VND",
//     imgage: "/image/product/may-loc-nuoc-kangaroo.png",
//     type: "product",
//     evaluate: "1",
//   },
//   {
//     key: 2,
//     label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
//     price: "4.999.999",
//     imgage: "/image/product/may-loc-nuoc-kangaroo.png",
//     type: "accessory",
//     evaluate: "2",
//   },
//   {
//     key: 3,
//     label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
//     price: "8.999.999",
//     imgage: "/image/product/may-loc-nuoc-kangaroo.png",
//     type: "accessory",
//     evaluate: "3",
//   },
//   {
//     key: 4,
//     label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
//     price: "7.999.999",
//     imgage: "/image/product/may-loc-nuoc-kangaroo.png",
//     type: "product",
//     evaluate: "4",
//   },
//   {
//     key: 5,
//     label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
//     price: "8.999.999",
//     imgage: "/image/product/may-loc-nuoc-kangaroo.png",
//     type: "accessory",
//     evaluate: "5",
//   },
//   {
//     key: 6,
//     label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
//     price: "7.999.999",
//     imgage: "/image/product/may-loc-nuoc-kangaroo.png",
//     type: "product",
//     evaluate: "6",
//   },
// ];

const ProductDetail = (props: any) => {
  // const [collapseHeight, setCollapseHeight] = useState(true)
  // const detailProduct = [
  //   {
  //     id: 1,
  //     slug: "may-loc-nuoc-nong-lanh-karofi-kad-d66",
  //     name: "Máy lọc nước nóng lạnh Karofi KAD-D66",
  //     marketPrice: 12750000,
  //     promotionalMarketPrice1: 9200000,
  //     save: -28,
  //     promotionalMarketPrice2: 9400000,
  //     trademark: "karofi",
  //     model: "KAD-D66",
  //     guarantee: "36 tháng",
  //     Designs: "Có cửa",
  //     quantity: 20,
  //   },
  //   {
  //     id: 2,
  //     name: "Máy lọc nước nóng lạnh Karofi O-D138",
  //     slug: "may-loc-nuoc-karofi-optimus-duo-o-d138",
  //     marketPrice: 12750000,
  //     promotionalMarketPrice1: 9200000,
  //     save: -28,
  //     promotionalMarketPrice2: 9400000,
  //     trademark: "karofi",
  //     model: "KAD-D66",
  //     guarantee: "36 tháng",
  //     Designs: "Có cửa",
  //     quantity: 20,
  //   },
  //   {
  //     id: 3,
  //     name: "Máy lọc nước nóng lạnh Karofi KAD-D66",
  //     slug: "Máy lọc nước nóng lạnh Karofi KAD-D50",
  //     marketPrice: 12750000,
  //     promotionalMarketPrice1: 9200000,
  //     save: -28,
  //     promotionalMarketPrice2: 9400000,
  //     trademark: "karofi",
  //     model: "KAD-D66",
  //     guarantee: "36 tháng",
  //     Designs: "Có cửa",
  //     quantity: 20,
  //   },
  //   {
  //     id: 4,
  //     name: "Máy lọc nước nóng lạnh Karofi KAD-D66",
  //     slug: "Máy lọc nước nóng lạnh Karofi KAD-D52",
  //     marketPrice: 12750000,
  //     promotionalMarketPrice1: 9200000,
  //     save: -28,
  //     promotionalMarketPrice2: 9400000,
  //     trademark: "karofi",
  //     model: "KAD-D66",
  //     guarantee: "36 tháng",
  //     Designs: "Có cửa",
  //     quantity: 20,
  //   },
  // ];
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");
  const paramSlug = props?.params.slug;

  return (
    <ProductDetailComponent paramSlug={paramSlug}/>
  );
};

export default ProductDetail;
