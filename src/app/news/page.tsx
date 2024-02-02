"use client";

import Image from "next/image";
import { Tabs, type TabsProps } from "antd";
import HomeNews from "../../components/NewsComponents/index"
const NewsPage = () => {
  return (
    <div>
      <div className="flex justify-center">
            <HomeNews paramSlug={""}/>
      </div>
    </div>
  );
};

export default NewsPage;
