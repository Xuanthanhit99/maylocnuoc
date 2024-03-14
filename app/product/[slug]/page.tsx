"use client";
import ProductDetailComponent from "@/components/ProductComponent/ProductDetailComponent/ProductDetailComponent";
import { useSearchParams } from "next/navigation";

const ProductDetail = (props: any) => {
 
  const searchParams = useSearchParams();
  const paramSlug = props?.params.slug;

  return (
    <ProductDetailComponent paramSlug={paramSlug}/>
  );
};

export default ProductDetail;
