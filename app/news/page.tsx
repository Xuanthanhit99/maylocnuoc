"use client";

import { useEffect, useState } from "react";
import HomeNews from "../../src/components/NewsComponents/index"
import { getApiProduct } from "../context/QueryApi";
const NewsPage = () => {
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
            <HomeNews paramSlug={""} valueProduct={dataProduct}/>
      </div>
    </div>
  );
};

export default NewsPage;
