"use client";

import Image from "next/image";
import { Tabs, type TabsProps } from "antd";
import DetailNew from "@/components/NewsComponents/DetailNew";
import { useEffect, useState } from "react";
import { getApiProduct } from "../../context/QueryApi";
const NewsPage = (props: any) => {
    const paramSlug = props?.params?.slug_news;
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
      <div className="flex justify-center">
        <DetailNew paramSlug={""} valueProduct={dataProduct}/>
      </div>
    </div>
  );
};

export default NewsPage;
