"use client";
import { Breadcrumb, Button, Card, Checkbox, Col, Row, Select } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import "react-slideshow-image/dist/styles.css";
import { Divider, Radio, Table } from "antd";
import type { TableColumnsType } from "antd";
import { useEffect, useState } from "react";
import Image from "next/image";
import productnews from "../../../utils/product.json";
import { AuthContextDefault } from "../../../app/context/AuthContext";

const CartComponent = (props: any) => {
  const { cartProductContext, cartProductContextSum } = AuthContextDefault();
  const [isChecked, setIsChecked] = useState([
    {label: "all", value: true}
  ]);
  const [cartProductMenu, setCartProductMenu] = useState<any>(null);
  const [cartProductMenuSum, setCartProductMenuSum] = useState<any>(0);
  const [sumCart, setSumCart] = useState<any>(0);

  useEffect(() => {
    setCartProductMenu(cartProductContext); 
    setSumCart(cartProductContextSum) 
  }, [cartProductContext, cartProductContextSum]);

  useEffect(() => {
    const localRecentlyViewed = JSON.parse(
      localStorage.getItem("Cart-Product")!
    );
    const localSumProduct = JSON.parse(
      localStorage.getItem("Cart-Product-Sum")!
    );
    setCartProductMenu(localRecentlyViewed);
    setSumCart(localSumProduct) 

  }, []);


  const checkHandler = (value : any) => {
    const valueChecked = value
    setIsChecked([...isChecked,value]);
  };

  const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });

  return (
    <div className="flex justify-center bg-[#f3f3f3] items-center w-full flex-col">
      {/* Breadcrumb */}
      <div className="flex w-10/12 flex-col my-3 justify-start">
        <div className="h-14 flex items-center ">
          <Breadcrumb
            items={[
              {
                href: "/",
                title: <HomeOutlined />,
              },
              {
                href: "/product",
                title: (
                  <>
                    <span>Application List</span>
                  </>
                ),
              },
              {
                title: (
                  <>
                    <span>Cart</span>
                  </>
                ),
              },
            ]}
          />
        </div>
      </div>
      <div className="flex justify-center items-center text-center text-2xl text-white font-semibold bg-gradient-to-r from-indigo-500 via-sky-500 via-30% to-emerald-500 h-14 w-full">
        Giỏ hàng
      </div>
      <div className="flex sm:w-11/12 w-10/12 flex-col h-4/5 overflow-y-scroll">
      {cartProductMenu?.length ? <div className="">
          <ul>
            <li className="flex items-center h-14 w-full" >
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="w-full">
              <Col className="flex justify-center items-center" span={2}>
                STT
              </Col>
              <Col className="flex justify-center items-center" span={2}>
                <input
                  type="checkbox"
                  id="vehicle1"
                  checked={isChecked?.[0]?.value}
                  value="all"
                  onChange={() => checkHandler({
                    
                  })}
                />
              </Col>
              <Col className="flex justify-center items-center text-center" span={5}>
                hình ảnh sản phẩm
              </Col>
              <Col className="flex justify-center items-center" span={10}>
                Tên sản phẩm
              </Col>
              <Col className="flex justify-center items-center" span={5}>
                Giá sản phẩm
              </Col>
              </Row>
            </li>
            <hr />
            {cartProductMenu?.map((item: any, index: any) => {
              return (
                <li key={item?.key} className="w-full">
                  <Row className="flex flex-row items-center h-36 hover:shadow-xl w-full" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="flex justify-center items-center" span={2}>
                      {index + 1}
                    </Col>
                    <Col className="flex justify-center items-center" span={2}>
                      <input
                        type="checkbox"
                        id="vehicle1"
                        checked={isChecked?.[0]?.value ? true : isChecked?.[index]?.value}
                        value="all"
                        onChange={() => checkHandler(item)}
                      />
                    </Col>
                    <Col className="flex justify-center items-center" span={5}>
                      <Image
                        src={item?.image}
                        width={75}
                        height={75}
                        alt={item?.label}
                      />
                    </Col>
                    <Col className="flex justify-center items-center" span={10}>
                      {item?.label}
                    </Col>
                    <Col className="flex justify-center items-center" span={5}>
                      {VND.format(item?.price)}
                    </Col>
                  </Row>
                  <hr />
                </li>
              );
            })}
          </ul>
        </div>: ""}
      </div>
       <div className="border-b sm:w-11/12 w-10/12 flex justify-center items-center text-center text-2xl text-white font-semibold bg-gradient-to-r from-indigo-500 via-sky-500 via-30% to-emerald-500 h-24">
       {cartProductMenu?.length ?<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="flex justify-center items-center text-center text-2xl text-white font-semibold bg-gradient-to-r from-indigo-500 via-sky-500 via-30% to-emerald-500 h-20 w-full">
            <Col span={6} className="!p-0 !m-0  !h-20">
                <div>Số lượng sản phẩm</div>
                <div>{cartProductMenu?.length}</div>
            </Col>
            <Col span={6} className="!p-0 !m-0 !h-20">
              <div>Giá sản phẩm</div>
              <div>{VND.format(sumCart)}</div>
            </Col >
            <Col span={6} className="!p-0 !m-0  !h-20">Thanh toán</Col>
          </Row>: ""}
          </div>
      {/* ctkm */}
    </div>
  );
};

export default CartComponent;
