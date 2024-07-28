"use client";
import ProductDetailComponent from "@/components/ProductComponent/ProductDetailComponent/ProductDetailComponent";
import { useParams } from "next/navigation";
import { AuthContextDefault } from "../../context/AuthContext";

const ProductDetail = () => {
  const params = useParams()
  const paramSlug = params.slug;
  const { dataProduct } = AuthContextDefault();

  return (
    <ProductDetailComponent paramSlug={paramSlug} valueproduct={dataProduct} />
  );
};

export default ProductDetail;
