"use client";
import ProductDetailComponent from "@/components/ProductComponent/ProductDetailComponent/ProductDetailComponent";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getApiProduct } from "../../context/QueryApi";

const ProductDetail = (props: any) => {
  const params = useParams()
  const paramSlug = params.slug;
  const [dataProduct, setDataProduct] = useState([])
  useEffect(() => {
    const getApi = async () => {
      const getApiNew = await getApiProduct()
      setDataProduct(getApiNew?.data)
    }
    getApi()
  },[]);
  return (
    <ProductDetailComponent paramSlug={paramSlug} valueproduct={dataProduct} />
  );
};

export default ProductDetail;
