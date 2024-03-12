"use client";
import { Button, type MenuProps } from "antd";
import { useEffect, useState } from "react";
import HomeComponentComponent from "../src/components/home/index";
import axios from "axios";
import { error } from "console";
import { uuid } from "uuidv4";
import productnews from "../utils/product.json"

export default function Home() {
  const [imageValue, setImageValue] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      const getData = await axios.get("/api/getApiProduct")
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
      <HomeComponentComponent productnews={productnews?.productnews} />
    </div>
  );
}
