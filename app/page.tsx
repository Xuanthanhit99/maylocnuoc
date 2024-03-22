"use client";
import { Button, type MenuProps } from "antd";
import { useEffect, useState } from "react";
import HomeComponentComponent from "../src/components/HomeComponent/HomeComponent";
import axios from "axios";
import { error } from "console";
import { uuid } from "uuidv4";
import { useQuery } from "react-query";
import { getApiProduct } from "./context/QueryApi";

export default function Home() {
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
      <HomeComponentComponent productnews={dataProduct} />
    </div>
  );
}
