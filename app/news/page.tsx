"use client";

import { useEffect, useState } from "react";
import NewsComponents from "../../src/components/NewsComponents/NewsComponents"
import { getApiProduct } from "../context/QueryApi";
import { AuthContextDefault } from "../context/AuthContext";
const NewsPage = () => {
  const { isLoadingProduct, dataProduct } = AuthContextDefault();


  return (
    <div>
      <div className="flex justify-center">
            <NewsComponents />
      </div>
    </div>
  );
};

export default NewsPage;
