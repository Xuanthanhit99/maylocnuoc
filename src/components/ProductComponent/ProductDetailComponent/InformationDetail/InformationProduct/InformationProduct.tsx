'ú'
import Image from 'next/image';
import React, { useState } from 'react'
import { Breadcrumb, Button, Card, Checkbox, Col, Row } from "antd";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { AuthContextDefault } from '../../../../../../app/context/AuthContext';

const InformationProduct = ({valueproduct, paramSlug}: any) => {
  const { onClickByProduct, onClickAddCartProduct } = AuthContextDefault()

  return (
    <div className="bg-white p-6 sm:p-2 md:p-3 flex sm:flex-col md:flex-col">
    <div className="w-1/3 sm:w-full md:w-full mr-6 md:mr-0 md:flex md:justify-center">
      <div className="md:w-2/3">
      <Carousel showArrows={true} showIndicators={false} infiniteLoop={false} autoPlay={false} showStatus={false}>
                <div>
                    <img src="/image/product/may-loc-nuoc-kangaroo.png" />
                </div>
                <div>
                    <img src="/image/product/may-loc-nuoc-kangaroo.png" />
                </div>
                <div>
                    <img src="/image/product/may-loc-nuoc-kangaroo.png" />
                </div>
            </Carousel>
      </div>
      </div>
      <hr className="my-6 xl:hidden"/>
      <div className="w-2/3 lg:ml-0 xl:ml-6 flex xl:mt-0 sm:ml-0 mt-6 sm:w-full md:w-full sm:flex-col">
      {valueproduct
        ?.filter(
          (item: any) => item?.slug?.toLowerCase() === paramSlug?.toLowerCase()
        )
        ?.map((item:any) => {
          return (
            <div key={item?.idvalue} className="xl:w-8/12 w-full mr-3 sm:flex sm:flex-col">
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
                          ?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
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
                          ?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
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
                          ?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
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
                {valueproduct?.find(
                  (item:any) =>
                    item?.slug?.toLowerCase() === paramSlug?.toLowerCase()
                )?.quantity !== 0
                  ? "Còn hàng"
                  : "Hết hàng"}
              </div>
              <div className="my-2">
                <h3 className="text-[#333] text-sm mb-2">
                  <b>Tùy chọn sản phẩm</b>
                </h3>
                <div>
                  <ul className="w-full grid grid-cols-4 gap-4">
                    {valueproduct?.map((itemModel: any, key: any) => {
                      return (
                        <li
                          key={key}
                          className="flex flex-col justify-center items-start  xl:items-center border border-solid xl:px-3 px-1 py-4 rounded-lg"
                        >
                          <div className="flex flex-col xl:flex-row">
                            <Checkbox
                              className="mr-2"
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
                    })}
                  </ul>
                </div>
              </div>
              <div className="mt-8">
                <div className="flex justify-between sm:mb-3">
                  <div onClick={() => onClickByProduct(item)} className="sm:mr-2 mr-3 border border-solid hover:bg-black hover:text-white cursor-pointer border-black w-1/2 !h-auto flex justify-center items-center flex-col p-2 rounded-md">
                    <b className="text-base">Mua ngay</b>
                    <span>Giao hàng tận nới</span>
                  </div>
                  <div onClick={() => onClickAddCartProduct(item)} className="bg-blue-500 ml-3 hover:bg-blue-700 cursor-pointer text-white w-1/2 !h-auto flex justify-center items-center flex-col p-2 rounded-md">
                    <b className="text-base">Thêm Vào giỏ</b>
                    <span>Tiếp tục mua hàng</span>
                  </div>
                </div>
                <div className="w-full mt-1">
                  <div className="bg-red-500 hover:bg-red-700 cursor-pointer text-white w-full !h-auto flex justify-center items-center flex-col p-2 rounded-md ">
                    <b className="text-base text-center">
                      Yêu cầu gọi tư vấn trực tiếp
                    </b>
                    <span className="text-center">
                      (Tư vấn viên gọi lại cho quý khách trong vòng 5
                      phút)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      <div className="xl:w-4/12 ml-3 sm:ml-0">
        <div className="border border-solid border-zinc-300 sm:mt-3">
          <div className="border-b bg-gradient-to-r from-indigo-500 via-sky-500 via-30% to-emerald-500 h-12 flex justify-center items-center text-white">
            <b className="p-3">YÊN TÂM MUA SẮM ONLINE</b>
          </div>
          <ul className="text-sm p-3">
            <li className="border-b border-solid pb-2 flex justify-start items-center">
              <Image
                src="/image/product/icon/lapdat.png"
                alt=""
                className="mr-2"
                width={23}
                height={23}
              />
              Bảo trì trọn đời, tặng thêm 1 năm bảo hành an tâm sử dụng
            </li>
            <li className="border-b border-solid py-2 flex justify-start items-center">
              <Image
                src="/image/product/icon/doimoi.png"
                alt=""
                className="mr-2"
                width={23}
                height={23}
              />
              Miễn phí giao hàng lắp đặt tại nhà
            </li>
            <li className="border-b border-solid py-2 flex justify-start items-center">
              <Image
                src="/image/product/icon/doitra.png"
                alt=""
                className="mr-2"
                width={23}
                height={23}
              />
              Linh kiện sẵn có tại hệ thống nhà máy Karofi toàn quốc
            </li>
            <li className="border-b border-solid py-2 flex justify-start items-center">
              <Image
                src="/image/product/icon/baohanh.png"
                alt=""
                className="mr-2"
                width={23}
                height={23}
              />
              Nhận hàng thanh toán yên tâm mua sắm online
            </li>
            <li className="border-b border-solid py-2 flex justify-start items-center">
              <Image
                src="/image/product/icon/doingulapdat.png"
                alt=""
                className="mr-2"
                width={23}
                height={23}
              />
              Đảm bảo hàng chính hãng tập đoàn Karofi
            </li>
            <li className="border-b border-solid py-2 flex justify-start items-center">
              <Image
                src="/image/product/icon/baohanhtainoi.png"
                alt=""
                className="mr-2"
                width={23}
                height={23}
              />
              Được kiểm định chất lượng theo tiêu chuẩn quốc tế
            </li>
            <li className="pt-2 flex justify-start items-center">
              <Image
                src="/image/product/icon/baohanhlapdat.png"
                alt=""
                className="mr-2"
                width={23}
                height={23}
              />
              Hàng việt nam chất lượng cao
            </li>
          </ul>
        </div>
        <div className="hover:shadow-2xl cursor-pointer text-white flex justify-center items-center flex-col mt-3 p-4 bg-gradient-to-r from-indigo-500 via-sky-500 via-30% to-emerald-500">
          <a href="tel:0366683747" className="hover:text-white">
            <b>Gọi ngay! Sẽ có giá tốt hơn</b>
            <p className="flex mt-1 justify-center items-center">
              <Image
                src="/image/home/phone-call.svg"
                alt=""
                className="mr-2"
                width={23}
                height={23}
              />
              Hotline: 0962.594.358
            </p>
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default InformationProduct