"use client";
import { Breadcrumb, Button, Card, Checkbox, Col, Row } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import Image from "next/image";
import PayComponent from "@/components/PayComponent/PayComponent";

const ProductDetail = (props: any) => {

  return (
    <PayComponent />
  );
};

export default ProductDetail;
