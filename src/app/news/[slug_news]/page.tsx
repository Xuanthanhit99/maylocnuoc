"use client";

import Image from "next/image";
import { Tabs, type TabsProps } from "antd";
import DetailNew from "@/components/NewsComponents/DetailNew";
const NewsPage = (props: any) => {
    const paramSlug = props?.params?.slug_news;
  return (
    <div>
      <div className="flex justify-center">
        <DetailNew />
      </div>
    </div>
  );
};

export default NewsPage;
