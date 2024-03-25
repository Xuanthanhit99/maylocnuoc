"use client";
import { Button, type MenuProps } from "antd";
import { useEffect, useState } from "react";
import HomeComponentComponent from "../src/components/HomeComponent/HomeComponent";
import axios from "axios";
import { error } from "console";
import { uuid } from "uuidv4";
import { useQuery } from "react-query";
import { getApiProduct } from "./context/QueryApi";
import { AuthContextDefault } from "./context/AuthContext";

export default function Home() {
  const {isLoadingProduct, dataProduct} = AuthContextDefault()

  return (
    <div>
      <HomeComponentComponent productnews={dataProduct} isLoadingProduct={isLoadingProduct}/>
    </div>
  );
}
