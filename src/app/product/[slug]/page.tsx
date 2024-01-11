"use client";
import { Breadcrumb, Button, Checkbox, Col, Row } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import type { CheckboxChangeEvent } from "antd/es/checkbox";

const ProductDetail = (props: any) => {
  const detailProduct = [
    {
      id: 1,
      slug: "may-loc-nuoc-nong-lanh-karofi-kad-d66",
      name: "Máy lọc nước nóng lạnh Karofi KAD-D66",
      marketPrice: 12750000,
      promotionalMarketPrice1: 9200000,
      save: -28,
      promotionalMarketPrice2: 9400000,
      trademark: "karofi",
      model: "KAD-D66",
      guarantee: "36 tháng",
      Designs: "Có cửa",
      quantity: 20,
    },
    {
      id: 2,
      name: "Máy lọc nước nóng lạnh Karofi O-D138",
      slug: "may-loc-nuoc-karofi-optimus-duo-o-d138",
      marketPrice: 12750000,
      promotionalMarketPrice1: 9200000,
      save: -28,
      promotionalMarketPrice2: 9400000,
      trademark: "karofi",
      model: "KAD-D66",
      guarantee: "36 tháng",
      Designs: "Có cửa",
      quantity: 20,
    },
    {
      id: 3,
      name: "Máy lọc nước nóng lạnh Karofi KAD-D66",
      slug: "Máy lọc nước nóng lạnh Karofi KAD-D50",
      marketPrice: 12750000,
      promotionalMarketPrice1: 9200000,
      save: -28,
      promotionalMarketPrice2: 9400000,
      trademark: "karofi",
      model: "KAD-D66",
      guarantee: "36 tháng",
      Designs: "Có cửa",
      quantity: 20,
    },
    {
      id: 4,
      name: "Máy lọc nước nóng lạnh Karofi KAD-D66",
      slug: "Máy lọc nước nóng lạnh Karofi KAD-D52",
      marketPrice: 12750000,
      promotionalMarketPrice1: 9200000,
      save: -28,
      promotionalMarketPrice2: 9400000,
      trademark: "karofi",
      model: "KAD-D66",
      guarantee: "36 tháng",
      Designs: "Có cửa",
      quantity: 20,
    },
  ];

  const paramSlug = props?.params.slug;

  return (
    <div className="flex justify-center">
      <div className="w-9/12">
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
                title: props?.params.slug,
              },
            ]}
          />
        </div>
        <div>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row p-0" span={8}>
              <div>
                <div className="mb-3">
                  <img
                    alt="example"
                    src="/image/product/may-loc-nuoc-kangaroo.png"
                  />
                </div>
                <div>
                  <Slide slidesToScroll={2} slidesToShow={3}>
                    <div
                      style={{
                        textAlign: "center",
                        fontSize: "25px",
                        border: "1px solid #dfdfdf",
                        margin: "0 4px",
                      }}
                    >
                      <img
                        alt="example"
                        src="/image/product/may-loc-nuoc-kangaroo.png"
                      />
                    </div>
                    <div
                      style={{
                        textAlign: "center",
                        fontSize: "25px",
                        border: "1px solid #dfdfdf",
                        margin: "0 4px",
                      }}
                    >
                      <img
                        alt="example"
                        src="/image/product/may-loc-nuoc-kangaroo.png"
                      />
                    </div>
                    <div
                      style={{
                        textAlign: "center",
                        fontSize: "25px",
                        border: "1px solid #dfdfdf",
                        margin: "0 4px",
                      }}
                    >
                      <img
                        alt="example"
                        src="/image/product/may-loc-nuoc-kangaroo.png"
                      />
                    </div>
                  </Slide>
                </div>
              </div>
            </Col>
            <Col className="gutter-row p-0" span={16}>
              <div>
                <Row
                  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                  className="flex "
                >
                  <Col className="gutter-row p-0" span={15}>
                    {detailProduct
                      ?.filter(
                        (item) =>
                          item?.slug?.toLowerCase() === paramSlug?.toLowerCase()
                      )
                      ?.map((item, key): any => {
                        return (
                          <div key={key}>
                            <div className="h-14 flex flex-col">
                              <h3 className="text-xl font-semibold text-[#333] flex items-start">
                                {item?.name}
                              </h3>
                              <p>
                                <span>{`(${89} đánh giá)`}</span>
                              </p>
                            </div>
                            <hr className="my-2" />
                            <div>
                              <ul>
                                <li className="mb-2">
                                  <p className="text-sm">
                                    Giá thị trường:{" "}
                                    <span className="text-base font-bold line-through">
                                      {item?.marketPrice
                                        ?.toString()
                                        ?.replace(
                                          /\B(?=(\d{3})+(?!\d))/g,
                                          ","
                                        )}{" "}
                                      đ
                                    </span>
                                  </p>
                                </li>
                                <li className="mb-2">
                                  <p className="text-sm">
                                    Giá khuyến mại miền bắc:{" "}
                                    <span className="text-[#ee1923] text-xl font-semibold">
                                      {item?.promotionalMarketPrice1
                                        ?.toString()
                                        ?.replace(
                                          /\B(?=(\d{3})+(?!\d))/g,
                                          ","
                                        )}{" "}
                                      đ
                                    </span>
                                  </p>
                                </li>
                                <li className="mb-2">
                                  <p className="text-sm ">
                                    Tiết kiệm:{" "}
                                    <span className="bg-[#d52632] text-white py-0.5 px-2 rounded-lg">
                                      {item?.save} %
                                    </span>
                                  </p>
                                </li>
                                <li className="text-sm mb-2">
                                  <p className="text-sm">
                                    Giá khuyến mại miền Nam:{" "}
                                    <span className="text-lg text-[#ee1923] font-semibold">
                                      {item?.promotionalMarketPrice2
                                        ?.toString()
                                        ?.replace(
                                          /\B(?=(\d{3})+(?!\d))/g,
                                          ","
                                        )}{" "}
                                      đ
                                    </span>
                                  </p>
                                </li>
                              </ul>
                            </div>
                            <div className="ml-[20px] my-3">
                              <ul className="list-disc">
                                <Row>
                                  <Col span={12}>
                                    <li>
                                      <p className="text-red-500 font-medium">
                                        Thương hiệu:{" "}
                                        <span className="text-black font-normal">
                                          {item?.trademark}
                                        </span>
                                      </p>
                                    </li>
                                  </Col>
                                  <Col span={12}>
                                    <li>
                                      <p className="text-red-500 font-medium">
                                        Model:{" "}
                                        <span className="text-black font-normal">
                                          {item?.model}
                                        </span>
                                      </p>
                                    </li>
                                  </Col>
                                </Row>
                                <li>
                                  <Row>
                                    <Col span={12}>
                                      <li>
                                        <p className="text-red-500 font-medium">
                                          Bảo hành:{" "}
                                          <span className="text-black font-normal">
                                            {item?.guarantee}
                                          </span>
                                        </p>
                                      </li>
                                    </Col>
                                    <Col span={12}>
                                      <li>
                                        <p className="text-red-500 font-medium">
                                          Kiểu dáng:{" "}
                                          <span className="text-black font-normal">
                                            12.750.000
                                          </span>
                                        </p>
                                      </li>
                                    </Col>
                                  </Row>
                                </li>
                              </ul>
                            </div>
                            <div className="text-[#4c8cf5] text-base font-medium mb-2">
                              {detailProduct?.find(
                                (item) =>
                                  item?.slug?.toLowerCase() ===
                                  paramSlug?.toLowerCase()
                              )?.quantity !== 0
                                ? "Còn hàng"
                                : "Hết hàng"}
                            </div>
                            <div className="my-2">
                              <h3 className="text-[#333] text-sm mb-2">
                                <b>Tùy chọn sản phẩm</b>
                              </h3>
                              <div>
                                <ul className="flex justify-between">
                                  {detailProduct?.map(
                                    (itemModel: any, key: any) => {
                                      return (
                                        <li
                                          key={key}
                                          className="flex flex-col justify-center items-center border border-solid px-3 py-4 rounded-lg"
                                        >
                                          <div className="flex">
                                            <Checkbox
                                              className="mr-2"
                                              onChange={() => console.log("")}
                                              checked={
                                                itemModel?.slug?.toLowerCase() ===
                                                paramSlug?.toLowerCase()
                                                  ? true
                                                  : false
                                              }
                                            />
                                            <p className="text-xs font-medium">
                                              {itemModel?.model}
                                            </p>
                                          </div>
                                          <div className="flex font-medium justify-center text-xs text-red-500">
                                            {itemModel?.promotionalMarketPrice1
                                              ?.toString()
                                              ?.replace(
                                                /\B(?=(\d{3})+(?!\d))/g,
                                                ","
                                              )}{" "}
                                            đ
                                          </div>
                                        </li>
                                      );
                                    }
                                  )}
                                </ul>
                              </div>
                            </div>
                            <div className="mt-8">
                              <div className="flex justify-between">
                                    <div
                                      className="bg-red-500 w-[49.5%] !h-auto"
                                    >
                                      <p>Mua ngay</p>
                                      <span>Giao hàng tận nới</span>
                                    </div>
                                    <div
                                      className="bg-red-500  w-[49.5%] !h-auto"
                                    >
                                      <p>Thêm Vào giỏ</p>
                                      <span>Tiếp tục mua hàng</span>
                                    </div>
                              </div>
                              <div className="w-full mt-1">
                              <div
                                      className="bg-red-500 w-full !h-auto"
                                    >
                                      <p>Yêu cầu gọi tư vấn trực tiếp</p>
                                      <span>(Tư vấn viên gọi lại cho quý khách trong vòng 5 phút)</span>
                                    </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </Col>
                  <Col className="gutter-row p-0 bg-red-500" span={9}></Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
