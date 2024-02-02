"use client";

import Image from "next/image";
import { Tabs, type TabsProps } from "antd";
import ServiceComponent from "../../components/ServiceComponent/ServiceComponent"
const NewsPage = () => {
  return (
    <div>
      <div className="flex justify-center">
            <ServiceComponent paramSlug={""}/>
      </div>
    </div>
  );
};

export default NewsPage;
