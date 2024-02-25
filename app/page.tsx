"use client";
import { Button, type MenuProps } from "antd";
import { useEffect, useState } from "react";
import HomeComponentComponent from "../components/home/index";
import axios from "axios";
import { error } from "console";
import { uuid } from "uuidv4";

const productnews = [
  {
    key: 1,
    label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
    price: "7.999.999",
    imgage: "/image/product/may-loc-nuoc-kangaroo.png",
  },
  {
    key: 2,
    label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
    price: "7.999.999",
    imgage: "/image/product/may-loc-nuoc-kangaroo.png",
  },
  {
    key: 3,
    label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
    price: "7.999.999",
    imgage: "/image/product/may-loc-nuoc-kangaroo.png",
  },
  {
    key: 4,
    label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
    price: "7.999.999",
    imgage: "/image/product/may-loc-nuoc-kangaroo.png",
  },
  {
    key: 5,
    label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
    price: "7.999.999",
    imgage: "/image/product/may-loc-nuoc-kangaroo.png",
  },
  {
    key: 6,
    label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
    price: "7.999.999",
    imgage: "/image/product/may-loc-nuoc-kangaroo.png",
  },
  {
    key: 7,
    label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
    price: "7.999.999",
    imgage: "/image/product/may-loc-nuoc-kangaroo.png",
  },
  {
    key: 8,
    label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
    price: "7.999.999",
    imgage: "/image/product/may-loc-nuoc-kangaroo.png",
  },
  {
    key: 9,
    label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
    price: "7.999.999",
    imgage: "/image/product/may-loc-nuoc-kangaroo.png",
  },
  {
    key: 10,
    label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
    price: "7.999.999",
    imgage: "/image/product/may-loc-nuoc-kangaroo.png",
  },
  {
    key: 11,
    label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
    price: "7.999.999",
    imgage: "/image/product/may-loc-nuoc-kangaroo.png",
  },
  {
    key: 12,
    label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
    price: "7.999.999",
    imgage: "/image/product/may-loc-nuoc-kangaroo.png",
  },
];

export default function Home() {
  const [imageValue, setImageValue] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      const getData = await axios.get("/api/getApiProduct")
      console.log("getData", getData);
    };
    fetchData();
  }, [imageValue]);

  const covertToBase64 = (e: any) => {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      // setImageValue(reader.result);

      const fetchPostApi = async () => {
        const data = await axios.post(
          "/api/postApiProduct",
          JSON.stringify({
            base64: reader.result,
            id: uuid(),
          }),
          {
            headers: {
              Accept: "application/json",
              "Access-Control-Allow-Origin": "*",
              "Content-Type": `application/json`,
            },
          }
        );

        setImageValue(data)
      };
      fetchPostApi();
    };

    reader.onerror = (error) => {
      console.log("error", error);
    };
  };
  return (
    <div>
      {/* <input
        type="file"
        id="avatar"
        name="avatar"
        accept="image/*"
        onChange={(e) => covertToBase64(e)}
      /> */}
      <HomeComponentComponent productnews={productnews} />
    </div>
  );
}
