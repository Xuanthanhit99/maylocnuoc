"use client";
import ProductDetailComponent from "@/components/ProductComponent/ProductDetailComponent/ProductDetailComponent";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getApiProduct } from "../../context/QueryApi";
import { AuthContextDefault } from "../../context/AuthContext";

const ProductDetail = (props: any) => {
  const params = useParams()
  const paramSlug = params.slug;
  const { isLoadingProduct, dataProduct } = AuthContextDefault();

  return (
    <ProductDetailComponent paramSlug={paramSlug} valueproduct={dataProduct} />
  );
};

export default ProductDetail;
