"use client";

// import "react-slideshow-image/dist/styles.css";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import Image from "next/image";
import PayComponent from "@/components/PayComponent/PayComponent";
import { useEffect, useState } from "react";
import { getApiProduct } from "../../context/QueryApi";
import { useParams, useSearchParams } from "next/navigation";

const ProductDetail = (props: any) => {
  const params = useParams()
  const [dataProduct, setDataProduct] = useState([])
  useEffect(() => {
    const getApi = async () => {
      const getApiNew = await getApiProduct()
      setDataProduct(getApiNew?.data)
    }
    getApi()
  },[]);
  return (
    <PayComponent valueproduct={dataProduct} paramSlug={params.pay}/>
  );
};

export default ProductDetail;
