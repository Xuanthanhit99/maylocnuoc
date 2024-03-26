"use client";
import { Breadcrumb, Col, Row ,notification} from "antd";
import { HomeOutlined } from "@ant-design/icons";
import "react-slideshow-image/dist/styles.css";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AuthContextDefault } from "../../../app/context/AuthContext";
import Link from "next/link";
import { VND } from "../../../utils/format";

type NotificationType = 'success' | 'info' | 'warning' | 'error';

const CartComponent = (props: any) => {
  const { cartProductContext, cartProductContextSum, onClickByProduct, sumArrayPriceAuth } = AuthContextDefault();
  const [isChecked, setIsChecked] = useState<any>([]);
  const [cartProductMenu, setCartProductMenu] = useState<any>(null);
  const [sumCart, setSumCart] = useState<number>(0);
  const [payItemProduct, setItemPayProduct] = useState<any>([])
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    setCartProductMenu(cartProductContext); 
  }, [cartProductContext, cartProductContextSum]);

  useEffect(() => {
    const localRecentlyViewed = JSON.parse(
      localStorage.getItem("Cart-Product")!
    );
    setCartProductMenu(localRecentlyViewed);
  }, []);


  const checkHandler = (event : React.ChangeEvent<HTMLInputElement>, value: any) => {
    const valueChecked = parseInt(event.target.value);
    if(!isChecked?.includes(valueChecked)) {
      setIsChecked([...isChecked, valueChecked]);
      setItemPayProduct([...payItemProduct, value]);
      const payArrayPriceAuth = [...payItemProduct, value]
      sumArrayPrice(payArrayPriceAuth);
      sumArrayPriceAuth(payArrayPriceAuth)
    } else {
      setIsChecked(
        isChecked.filter((isCheckedId: any) => {
          return isCheckedId !== valueChecked
        })
      )
      setItemPayProduct(
        payItemProduct.filter((payItemProduct: any) => {
          return payItemProduct?.idvalue !== valueChecked
        })
      )
      sumArrayPrice([])
      sumArrayPriceAuth([])
    }
  };

  const checkHandlerAll = () => {
    if(isChecked?.length < cartProductMenu?.length) {
      setIsChecked(cartProductMenu?.map((item:any) => item?.idvalue))
      setItemPayProduct(cartProductMenu);
      sumArrayPrice(cartProductMenu)
      sumArrayPriceAuth(cartProductMenu)
    } else {
      setIsChecked([])
      setItemPayProduct([])
      setSumCart(0)
      sumArrayPriceAuth(0)
    }
  }

  const sumArrayPrice = (value: any) => {
    let sum = 0;
    if(value?.length > 0) {
      for(var i = 0; i < value?.length; i++) {
        sum += value?.[i]?.price;
        if(!Number.isNaN(sum)) {
          if(sum) {
            setSumCart(sum);
          }
        }
    }
    return sum
    }
    else {
      setSumCart(0);
    }
  }

  const onClickNoProduct = (type: NotificationType) => {
    api[type]({
      message: 'Thanh toán thất bại',
      description: 'Bạn chưa chọn sản phẩm để thanh toán',
    });
      }

  return (
    <div className="flex justify-center bg-[#f3f3f3] items-center w-full flex-col">
      {/* Breadcrumb */}
      {contextHolder}
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
                  checked={isChecked.length === cartProductMenu?.length}
                  onChange={checkHandlerAll}
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
                <li key={item?.idvalue} className="w-full">
                  <Row className="flex flex-row items-center h-36 hover:shadow-xl w-full" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="flex justify-center items-center" span={2}>
                      {index + 1}
                    </Col>
                    <Col className="flex justify-center items-center" span={2}>
                      <input
                        type="checkbox"
                        id="vehicle1"
                        checked={isChecked.includes(item?.idvalue)}
                        value={item?.idvalue}
                        onChange={(e) => checkHandler(e,item)}
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
                      {VND(item?.price)}
                    </Col>
                  </Row>
                  <hr />
                </li>
              );
            })}
          </ul>
        </div>: <div className="w-full flex-col flex justify-center items-center h-full">
        <Image
                        src={"/image/home/no-cart-1.png"}
                        width={350}
                        height={350}
                        alt={"no-cart"}
                      />
          <Link href={"/"} className="bg-red-500 w-24 h-12 rounded-xl justify-center flex items-center text-center text-lg text-white font-medium">Home</Link>
          </div>}
      </div>
       <div className="border-b sm:w-11/12 w-10/12 flex justify-center items-center text-center text-2xl text-white font-semibold bg-gradient-to-r from-indigo-500 via-sky-500 via-30% to-emerald-500 h-24">
       {cartProductMenu?.length ?<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="flex justify-center items-center text-center text-2xl text-white font-semibold bg-gradient-to-r from-indigo-500 via-sky-500 via-30% to-emerald-500 h-20 w-full">
            <Col span={6} className="!p-0 !m-0  !h-20">
                <div>Số lượng sản phẩm</div>
                <div>{payItemProduct?.length}</div>
            </Col>
            <Col span={6} className="!p-0 !m-0 !h-20">
              <div>Giá sản phẩm</div>
              <div>{VND(sumCart)}</div>
            </Col >
            <Col span={6} className="!p-0 !m-0  !h-20">
              <div className="w-full cursor-pointer hover:bg-white hover:border-black hover:text-black h-14 flex justify-center items-center text-center border border-white text-white font-medium rounded-xl my-4" onClick={() =>  !payItemProduct?.length ? onClickNoProduct('error') : onClickByProduct(payItemProduct)}>
                Thanh toán
              </div>
              </Col>
          </Row>: ""}
          </div>
      {/* ctkm */}
    </div>
  );
};

export default CartComponent;
 