"use client";

import Image from "next/image";
import Link from "next/link";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useEffect, useState } from "react";
import CustomInput from "../FormItemFloatLabel/CustomInput";
import { AuthContextDefault } from "../../../app/context/AuthContext";
import { Router } from "next/router";
import { useRouter } from "next/navigation";
import {
  itemsMenu,
  typeMenuItem,
  TypeProduct,
} from "../../../utils/TypeProduct";
import { Badge, Result } from "antd";
import axios from "axios";
import { toNonAccentVietnamese } from "../../../utils/format";
import { getApiProduct } from "../../../app/context/QueryApi";

type typeUserGoogle = {
  email: string;
  image: string;
  name: string;
};

const Menu = () => {
  const { data: session } = useSession<any>();
  const [providers, setProviders] = useState<any>(null);
  const [isMenuMobile, setIsMenuMobile] = useState<any>(false);
  const [isMenuLeft, setIsMenuLeft] = useState<any>(false);
  const [isSign, setIsSign] = useState<boolean>(true);
  const { user, cartProductContext, cartProductContextSum } =
    AuthContextDefault();
  const [cartProductMenu, setCartProductMenu] = useState<any>(null);
  const [textSearch, setTextSearch] = useState("");
  const [resultSearch, setResultSearch] = useState<any>([]);
  const [dataProduct, setDataProduct] = useState<any>([]);
  useEffect(() => {
    setCartProductMenu(cartProductContext);
  }, [cartProductContext, cartProductContextSum]);

  useEffect(() => {
    const localRecentlyViewed = JSON.parse(
      localStorage.getItem("Cart-Product")!
    );
    const localSumProduct = JSON.parse(
      localStorage.getItem("Cart-Product-Sum")!
    );
    setCartProductMenu(localRecentlyViewed);
  }, []);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  useEffect(() => {
    if (session || user?.success) {
      setIsSign(true);
    } else {
      setIsSign(false);
    }
  }, [session, user]);

  const router = useRouter();

  useEffect(() => {
    const getApi = async () => {
      const getApiNew = await getApiProduct();
      setDataProduct(getApiNew?.data);
    };
    getApi();
  }, [textSearch]);

  useEffect(() => {
    const filterApiNew = dataProduct?.filter((item: any) =>
      toNonAccentVietnamese(item?.name)
        ?.toUpperCase()
        ?.includes(toNonAccentVietnamese(textSearch).toUpperCase())
    );

    textSearch && setResultSearch([...filterApiNew]);
  }, [textSearch, dataProduct]);


  return (
    <>
      <div className="min-h-12 flex justify-center flex-col border-b border-solid border-[#f4f5f6] items-center">
        <div className="w-11/12">
          <div className="flex lg:justify-end xl:justify-end justify-between items-center">
            <div className="flex lg:hidden xl:hidden cursor-pointer">
              <div>
                <Image
                  src={"/image/home/icon-menu.jpg"}
                  alt=""
                  width={32}
                  height={32}
                  onClick={() => setIsMenuLeft(true)}
                />
              </div>
              <div
                className={`${
                  isMenuLeft ? "block" : "hidden"
                } absolute top-0 right-0 z-30 w-full flex h-full`}
              >
                <div
                  className="w-1/3 bg-slate-700 opacity-20"
                  onClick={() => setIsMenuLeft(false)}
                ></div>
                <ul className="flex flex-col w-2/3 h-full bg-slate-700 text-white">
                  <li className="p-3 cursor-pointer border-b flex justify-end items-end bg-gradient-to-r from-indigo-500 via-sky-500 via-30% to-emerald-500">
                    <Image
                      src={"/image/icon-support/x.png"}
                      alt=""
                      width={22}
                      height={22}
                      onClick={() => setIsMenuLeft(false)}
                    />
                  </li>
                  {itemsMenu?.map((items: typeMenuItem, key: number) => {
                    console.log("first", items?.label == "Signin" && isSign ? "hidden" : "");
                    return (
                      <li
                        key={key}
                        className={`${items?.label == "Signin" && isSign ? "hidden" : ""} p-3 border-b cursor-pointer hover:bg-slate-400 hover:text-slate-900`}
                      >
                        <Link href={items?.url || ""}>{items?.label}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="flex">
              <div
                className="flex lg:hidden xl:hidden cursor-pointer"
                onClick={() => setIsMenuMobile(!isMenuMobile)}
              >
                <Image
                  src={"/image/home/vn31.png"}
                  alt=""
                  width={32}
                  height={32}
                />
                <div className="flex items-center ml-1">
                  <Image
                    src={
                      isMenuMobile
                        ? "/image/home/arrow-top.svg"
                        : "/image/home/arrow-bottom.svg"
                    }
                    alt=""
                    width={12}
                    height={12}
                  />
                </div>
              </div>
              <div
                className={`${
                  isMenuMobile
                    ? "block absolute top-12 right-3 shadow-2xl z-30"
                    : "hidden"
                } lg:flex xl:flex  xl:bg-white`}
              >
                <div className="flex justify-center items-center w-40 lg:w-auto xl:w-auto h-12 p-3 rounded-t-lg ">
                  <Image
                    src={"/image/home/phone-call.svg"}
                    alt=""
                    width={21}
                    height={22}
                    className="mr-2"
                  />
                  <a href="tel:0366683747">Hotline: 0366.683.747</a>
                </div>
                <hr className="lg:hidden xl:hidden" />
                <div className="flex xl-ml-6 h-12 p-3 rounded-b-lg w-40">
                  <img
                    src={"/image/home/vn31.png"}
                    alt=""
                    className="mr-2 w-[21px] h-[22px]"
                  />
                  Tiếng việt
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center bg-gradient-to-r from-indigo-500 via-sky-500 via-30% to-emerald-500 ">
        <div className="w-9/12 flex">
          <div className="w-3/12 flex justify-center">
            {/* <Link href={"/"}><img src="/image/home/logo.png" alt="" /></Link> */}
          </div>
          <div className="w-9/12 lg:block sm:hidden md:hidden xl:block">
            <ul className="flex justify-center text-white ">
              {itemsMenu?.map((items: typeMenuItem, key: number) => {
                return (
                  <li
                    key={key}
                    className={`cursor-pointer flex justify-center items-center ${
                      items?.label === "signin" && isSign
                        ? "signin-user relative"
                        : ""
                    }`}
                  >
                    {items?.label === "signin" &&
                      (isSign ? (
                        <div className="border-l flex pl-3">
                          <Image
                            src={session?.user?.image || ""}
                            alt=""
                            width={25}
                            height={25}
                            className="mr-2 rounded-full"
                          />
                          {session
                            ? session?.user?.email?.split("@")?.[0]
                            : user?.data?.username}
                          <Image
                            src="/image/home/h-tamgiac.png"
                            alt=""
                            width={25}
                            height={25}
                            className="ml-2 rounded-full"
                          />
                          <div className="signin-user--children w-[180px] h-[240px] z-10 bg-gradient-to-r from-indigo-500 via-sky-500 via-30% to-emerald-500 absolute left-0 top-full">
                            <div className="flex justify-center items-center flex-col h-full text-white text-lg font-medium	">
                              <Image
                                src={"/image/home/shopping-cart.png"}
                                alt=""
                                width={150}
                                height={150}
                                className="mr-2"
                              />
                              Chưa có sản phẩm
                            </div>
                          </div>
                        </div>
                      ) : (
                        <Link href={items?.url || ""} className="p-4 ">
                          {items?.label}
                        </Link>
                      ))}
                    {items?.label !== "Signin" && (
                      <Link href={items?.url || ""} className="p-4 ">
                        {items?.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="p-4 w-full grid grid-cols-1 gap-1 lg:grid-cols-3 lg:gap-3 sm:grid-cols-1 sm:gap-1 md:grid-cols-3 md:gap-3 xl:grid-cols-3 xl:gap-3">
        <div className="flex justify-center sm:justify-between items-center">
          <Link href="/">
            <Image
              src={"/image/home/logo-karofi.png"}
              alt=""
              width={240}
              height={45}
              className="mr-2"
            />
          </Link>
          <div className="sm:flex hidden justify-end items-center relative shopping-cart w-14 cursor-pointer">
            <Badge count={cartProductMenu?.length} showZero>
              <Image
                src={"/image/home/shopping-cart.png"}
                alt=""
                width={45}
                height={45}
                className="mr-2 sm:mb-1 "
              />
            </Badge>
            <div className="shopping-cart--children max-h-[280px] sm:w-[320px] p-1 w-[380px] h-[280px] z-10 bg-gradient-to-r from-indigo-500 via-sky-500 via-30% to-emerald-500  absolute right-0 top-12">
              {cartProductMenu?.length ? (
                <div className="h-full overflow-y-auto">
                  <ul>
                    {cartProductMenu?.map((item: any, index: number) => {
                      return (
                        <li
                          key={index}
                          className="h-14 mb-2"
                          onClick={() => {
                            router.push("/cart/pay");
                          }}
                        >
                          {" "}
                          <div className=" flex justify-center items-center text-white text-sm font-medium">
                            <Image
                              src={item?.image}
                              alt=""
                              width={50}
                              height={50}
                              className="mr-2"
                            />
                            <div>{item?.label}</div>
                          </div>
                          <hr className="my-2" />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ) : (
                <div className="flex justify-center items-center flex-col h-full text-white text-lg font-medium	">
                  <Image
                    src={"/image/home/shopping-cart.png"}
                    alt=""
                    width={150}
                    height={150}
                    className="mr-2"
                  />
                  Chưa có sản phẩm
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center relative forcus-result">
          <input
            type="text"
            placeholder="Bạn cần tìm sản phẩm nào"
            onChange={(e) => setTextSearch(e?.target?.value)}
            name="search-product--home"
            className="w-full border h-10 rounded-lg p-2"
          />
          <div className="absolute right-0 cursor-pointer">
            <Image
              src={"/image/home/search-svg.png"}
              alt=""
              width={25}
              height={25}
              className="mr-2"
            />
          </div>
          <div className="overflow-y-scroll absolute right-0 cursor-pointer w-full top-12 max-h-[200px] forcus-result--show hidden z-[999] bg-white rounded-b-lg border-[#e5e7eb] border">
            <div>
              {resultSearch?.length > 0 ? (
                resultSearch?.map((item: any, index: number) => {
                  return (
                    <div
                      key={index}
                      className="cursor-pointer h-14 flex items-center text-start p-2 font-sans text-sm border-b"
                    >
                      <Link href={item?.link}>{item?.name}</Link>
                    </div>
                  );
                })
              ) : (
                <div className="flex items-center flex-col justify-center text-center p-2 h-[200px] font-sans text-sm border-b">
                  <Image
                    src={"/image/home/shopping-cart.png"}
                    alt=""
                    width={75}
                    height={75}
                    className="mb-6"
                  />
                  Không có sản phẩm bạn tìm kiếm
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center sm:hidden">
          <div className="flex justify-center items-center relative shopping-cart cursor-pointer">
            <Image
              src={"/image/home/shopping-cart.png"}
              alt=""
              width={45}
              height={45}
              className="mr-2"
            />
            <div
              className="flex flex-col mx-4 "
              onClick={() => {
                router.push("/cart");
              }}
            >
              <span>Giỏ hàng</span>
              <span>
                {cartProductMenu?.length
                  ? `Có ${cartProductMenu?.length}`
                  : "Chưa có"}{" "}
                sản phẩm
              </span>
              {/* shopping-cart--children */}
              <div className="shopping-cart--children w-[380px] h-[280px] max-h-[280px] p-1 z-10 bg-gradient-to-r from-indigo-500 via-sky-500 via-30% to-emerald-500  absolute right-0 top-12">
                {cartProductMenu?.length ? (
                  <div className="h-full overflow-y-auto">
                    <ul>
                      {cartProductMenu?.map((item: any, index: number) => {
                        return (
                          <li
                            key={index}
                            className="h-14 mb-2"
                            onClick={() => {
                              router.push("/cart/pay");
                            }}
                          >
                            {" "}
                            <div className=" flex justify-center items-center text-white text-base font-medium">
                              <Image
                                src={item?.image}
                                alt=""
                                width={50}
                                height={50}
                                className="mr-2"
                              />
                              <div>{item?.label}</div>
                            </div>
                            <hr className="my-2" />
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ) : (
                  <div className="flex justify-center items-center flex-col h-full text-white text-lg font-medium	">
                    <Image
                      src={"/image/home/shopping-cart.png"}
                      alt=""
                      width={150}
                      height={150}
                      className="mr-2"
                    />
                    Chưa có sản phẩm
                  </div>
                )}
              </div>
            </div>
            <Image
              src={"/image/home/h-tamgiac.png"}
              alt=""
              width={22}
              height={22}
              className="mr-2"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
