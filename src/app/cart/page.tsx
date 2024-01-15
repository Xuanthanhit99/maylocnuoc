"use client";
import { Breadcrumb, Button, Card, Checkbox, Col, Row, Select } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import Image from "next/image";
import axios from "axios";
import CustomSelect from "@/components/FormItemFloatLabel/CustomSelect";

const productnews = [
  {
    key: 1,
    label: "MÁY LỌC NƯỚC NÓNG LẠNH KAROFI KAD-D66",
    price: "9.200.000 VND",
    imgage: "/image/product/may-loc-nuoc-kangaroo.png",
    type: "product",
    evaluate: "1",
  },
  {
    key: 2,
    label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
    price: "4.999.999",
    imgage: "/image/product/may-loc-nuoc-kangaroo.png",
    type: "accessory",
    evaluate: "2",
  },
  {
    key: 3,
    label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
    price: "8.999.999",
    imgage: "/image/product/may-loc-nuoc-kangaroo.png",
    type: "accessory",
    evaluate: "3",
  },
  {
    key: 4,
    label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
    price: "7.999.999",
    imgage: "/image/product/may-loc-nuoc-kangaroo.png",
    type: "product",
    evaluate: "4",
  },
  {
    key: 5,
    label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
    price: "8.999.999",
    imgage: "/image/product/may-loc-nuoc-kangaroo.png",
    type: "accessory",
    evaluate: "5",
  },
  {
    key: 6,
    label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
    price: "7.999.999",
    imgage: "/image/product/may-loc-nuoc-kangaroo.png",
    type: "product",
    evaluate: "6",
  },
];

const Cart = (props: any) => {
  const [collapseHeight, setCollapseHeight] = useState(true)
  const [valueQuantity, setValueQuantity] = useState(1)
  const [valueConscious, setValueConscious] = useState()
  const [valueSelectConscious, setValueSelectConscious] = useState<string>()

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

  const onClickQuantity = (value: number) => {
    setValueQuantity(valueQuantity + value)
  }

  console.log("valueSelectConscious", valueSelectConscious)

  useEffect(() => {
    const fetchDataProvinces = async () => {
    try {
            const funtGetProvinces = await axios.get("https://provinces.open-api.vn/api/?depth=1")
            const arryMapData = funtGetProvinces?.data?.map((value:any) => {
                return { value: value?.code , label: value?.name }
            })
            setValueConscious(arryMapData)
    } catch (error) {
        console.log(error)
    }
}
fetchDataProvinces()
  }, [])

  useEffect(() => {
    const fetchDataProvinces = async () => {
    try {
            const funtGetProvinces = await axios.get(`https://provinces.open-api.vn/api/p/${valueSelectConscious}?depth=2`)
            const arryMapData = funtGetProvinces?.data?.map((value:any) => {
                return { value: value?.code , label: value?.name }
            })
            console.log(funtGetProvinces)
    } catch (error) {
        console.log(error)
    }
}
fetchDataProvinces()
  }, [valueSelectConscious])

  console.log("first", valueConscious);
  return (
    <div className="flex justify-center bg-[#f3f3f3]">
      <div className="w-9/12">
        {/* Breadcrumb */}
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
        {/* ctkm */}
        <div className="bg-white p-6">
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row p-0" span={8}>
              <div>
                <div className="mb-3">
                  <img
                    alt="example"
                    src="/image/product/may-loc-nuoc-kangaroo.png"
                  />
                </div>
              </div>
            </Col>
            <Col className="gutter-row p-0" span={16}>
              <div>
                <Row
                  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                  className="flex "
                >
                  <Col className="gutter-row p-0" span={16}>
                    <h3 className="text-2xl font-bold mb-5">MÁY LỌC NƯỚC NÓNG LẠNH KAROFI KAD-D66</h3>
                    <div className="border border-solid ">
                        <div className="border-b bg-gradient-to-r from-indigo-500 via-sky-500 via-30% to-emerald-500 h-12 flex justify-center items-center text-white"><h3>Khuyến mãi</h3></div>
                        <div>
                            <ul className="font-medium text-sm">
                                <li className="py-1 border-b">
                                    <div>
                                        <p>Gói bảo trì, bảo dưỡng máy lọc nước 1 năm <span>(Xem chi tiết)</span></p>
                                        <p>Giá trị: 400.000đ</p>
                                    </div>
                                </li>
                                <li className="py-1 border-b">
                                    <div>
                                        <p>Bút thử nước TDS cao cấp</p>
                                        <p>Giá trị: 400.000đ</p>
                                    </div>
                                </li>
                                <li className="py-1 border-b">
                                    <div>
                                        <p>Miễn phí vận chuyển toàn quốc</p>
                                    </div>
                                </li>
                                <li className="py-1 border-b">
                                    <div>
                                        <p>Áp dụng cho khách hàng gọi điện Hotline, đặt hàng trước trên website ƯU ĐÃI đến hết 31/01/2024!</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                  </Col>
                  <Col className="gutter-row p-0" span={8}>
                    <div>
                      <div className="border border-solid border-zinc-300">
                        <div className="border-b bg-gradient-to-r from-indigo-500 via-sky-500 via-30% to-emerald-500 h-12 flex justify-center items-center text-white">
                          <b className="">Số lượng</b>
                        </div>
                      </div>
                      <div className="hover:shadow-2xl cursor-pointer text-white flex justify-center items-center flex-col p-4 bg-gradient-to-r from-indigo-500 via-sky-500 via-30% to-emerald-500">
                        <a href="tel:0366683747" className="hover:text-white">
                          <div className="flex flex-col items-center">
                            <div className="flex justify-between mb-2">
                                <button onClick={() => onClickQuantity(-1)} className="w-5 h-5 bg-white text-black">-</button>
                                <p className="mx-5">{valueQuantity}</p>
                                <button onClick={() => onClickQuantity(+1)} className="w-5 h-5 bg-white text-black">+</button>
                            </div>
                            <p className="text-xl mb-2 font-medium	line-through">25.500.000</p>
                            <p className="text-red-500 text-2xl font-bold">18.400.000Đ</p>
                            <div>Giảm giá 28%</div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
        {/* ttkh */}
        <div>
            <div className="border-b bg-gradient-to-r from-indigo-500 via-sky-500 via-30% to-emerald-500 h-12 flex justify-center items-center text-white">Thông tin khách hàng</div>
            <div>
                <div className="text-base bg-white p-3">
                    <h3>Thông tin người đặt</h3>
                    <div className="flex my-2">
                        <Checkbox onChange={(e) => console.log(e)}>Anh</Checkbox>
                        <Checkbox onChange={(e) => console.log(e)}>Chị</Checkbox>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="relative my-2">
                            <input type="text" id="floating_fullname" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label htmlFor="floating_fullname" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Nhập họ và tên</label>
                        </div>
                        <div className="relative my-2">
                            <input type="text" id="floating_phonenumber" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label htmlFor="floating_phonenumber" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Nhập số điện thoại</label>
                        </div>
                        <div className="relative my-2">
                            <input type="text" id="floating_email" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label htmlFor="floating_email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Nhập email (không bắt buộc)</label>
                        </div>
                    </div>
                </div>
                <hr className="my-3"/>
                <div className="text-base bg-white p-3">
                    <h3>Thông tin người nhận</h3>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="relative my-2">
                            <input type="text" id="floating_fullname" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label htmlFor="floating_fullname" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Nhập họ và tên</label>
                        </div>
                        <div className="relative my-2">
                            <input type="text" id="floating_phonenumber" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label htmlFor="floating_phonenumber" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Nhập số điện thoại</label>
                        </div>
                        <div className="relative my-2">
                            <input type="text" id="floating_email" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label htmlFor="floating_email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Nhập email (không bắt buộc)</label>
                        </div>
                    </div>
                </div>
                <hr className="my-3"/>
                <div className="text-base bg-white p-3">
                    <h3>Địa chỉ nhận hàng</h3>
                    <div className="grid grid-cols-2 gap-2">
                        <div className=" my-2">
                        <CustomSelect
                            label="Chọn Tỉnh"
                            className="w-full h-full"
                            onChange={(value:any) => setValueSelectConscious(value)}
                            options={valueConscious}
                        />
                        </div>
                        <div className=" my-2">
                        <CustomSelect
                            label="Chọn Quận/Huyện"
                            value={""}
                            className="w-full h-full"
                            onChange={() => console.log("first")}
                            options={[]}
                        />
                        </div>
                        <div className=" my-2">
                        <CustomSelect
                            label="Chọn Quận/Huyện"
                            value={valueSelectConscious}
                            className="w-full h-full"
                            onChange={() => console.log("first")}
                            options={valueConscious}
                        />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-4 bg-white">
          <div className="p-3 flex justify-start items-center ">
            <b>COMBO CẦN THIẾT CHO MÁY LỌC NƯỚC NÓNG LẠNH KAROFI KAD-D66</b>
          </div>
          <hr className="mb-4" />
          <div>
            <div className="w-full grid grid-cols-5 gap-5">
              {productnews?.filter(item => item?.key <= 4)?.map((item: any) => {
                return (
                  <div
                    className={`${item.key > 1 && item.key < 6 ? "mr-1" : ""}`}
                    key={item.key}
                  >
                    <Card
                      hoverable
                      cover={<img alt="example" src={item?.imgage} />}
                    >
                      <div className="mt-1">
                        <h5 className="text-base font-medium	text-center">
                          {item?.label}
                        </h5>
                        <p className="text-sx font-medium	text-center text-red-500">
                          <span className="">{item?.price} </span>đ
                        </p>
                        <p className="font-medium	text-sx text-center">
                          Liên hệ
                        </p>
                      </div>
                    </Card>
                  </div>
                );
              })}
              <div className="h-full h-full flex justify-center items-center">
                <Card
                  hoverable
                  className="h-full flex justify-center items-center"
                >
                  <div className="mt-1 flex justify-center flex-col items-center">
                    <h5 className="text-base font-medium	text-center">
                      Tổng tiền
                    </h5>
                    <p className="text-sx font-medium	text-center text-red-500 text-base">
                      <span className="">
                        {19999999
                          ?.toString()
                          ?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                      </span>
                      đ
                    </p>
                    <p className="font-medium	text-sx text-center text-[#999] line-through">
                      {19999999
                        ?.toString()
                        ?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                    </p>
                    <div className="mt-4 p-3 text-white flex justify-center items-center flex-col bg-black rounded-sm bg-gradient-to-r from-indigo-500 via-sky-500 via-30% to-emerald-500">
                      <b>Mua 4 sản phẩm</b>
                      <p>
                        Tiết kiệm{" "}
                        {19999999
                          ?.toString()
                          ?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                        đ
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 bh-white ">
          <div className="border-b border-solid border-[#dcdcdc]">
            <h3 className="h-14 bg-blue-500 w-2/12 flex justify-center items-center text-white rounded-t-md">Thông tin sản phẩm</h3>
          </div>
          <div className={`${collapseHeight ? "h-96 " : "h-auto"} overflow-hidden relative`}>
            <div>
            <p>Máy lọc nước Karofi D66 là dòng máy mới được Karofi cho ra mắt vào giữa năm 2021. Máy sở hữu 11 cấp lọc vùng tiện ích 2 vòi với 3 chức năng nóng-lạnh-nguội mang tới những trải nghiệm tiện nghi bậc nhất cho khách hàng.</p>
            <p>Cùng Karofi Việt Nam khám phá những tính năng đáng sở hữu nhất và tiên ích mà dòng sản phẩm máy lọc nước Karofi D66 này mang lại nhé!</p>
            <div className="flex justify-center flex-col items-center mt-2">
              <video controls className="w-8/12 h-auto">
                <source src="../file/bunny.mp4" />
              </video>
              <span className="text-sm text-red-500 p-2">Video giới thiệu máy lọc nước D66</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Thông số kỹ thuật máy lọc nước nóng lạnh Karofi KAD D66</h3>
            <Image
              src="/image/product/icon/inforlist.PNG"
              alt=""
              className="mr-2"
              width={750}
              height={750}
            />
            <p className="mt-2">Máy lọc nước Karofi D66 là một trong những dòng máy lọc nước thông minh đầu tiên tại Việt Nam đầu tiên sở hữu công nghệ 11 lõi lọc cao cấp - công nghệ Smax, với 3 lõi lọc thô, màng RO tách rời và cụm lõi chức năng đúc nguyên khối. Đây là cải tiến đặc biệt, khiến sản phẩm trở nên thực sự khác biệt trên thị trường. Khách hàng không chỉ giảm được khả năng rò rỉ nước, mà còn tránh được nhầm lẫn khi thay lõi lọc khoáng.<br />
Đặc biệt nhất là lõi Hydrogen, giúp nâng cao độ pH đến mức 7,5-8,5. Điều này mang ý nghĩa đặc biệt với sức khoẻ, nhất là với những đối tượng thường xuyên thu nạp thực phẩm giàu tính axit hay các chất kích thích như bia, rượu,..
            </p>
            </div>
            {collapseHeight ? <div className="h-56 bottom-0 left-0 right-0 w-full absolute bg-gradient-to-r from-indigo-500 via-sky-500 via-30% to-emerald-500 opacity-25"></div> : ""}
          </div>
            <div className="cursor-pointer w-full h-14 bg-red-500 flex justify-center items-center text-white text-base font-medium bg-gradient-to-r from-indigo-500 via-sky-500 via-30% to-emerald-500 rounded-md" onClick={() => setCollapseHeight(!collapseHeight)}>Thu Gọn</div>
        </div>
        <div className="mt-4 bg-white">
          <div className="p-3 flex justify-start items-center ">
            <b>SẢN PHẨM ĐÃ XEM</b>
          </div>
          <hr className="mb-4" />
          <div>
            <div className="w-full grid grid-cols-6 gap-6">
              {productnews?.map((item: any) => {
                return (
                  <div
                    className={`${item.key > 1 && item.key < 6 ? "mr-1" : ""}`}
                    key={item.key}
                  >
                    <Card
                      hoverable
                      cover={<img alt="example" src={item?.imgage} />}
                    >
                      <div className="mt-1">
                        <h5 className="text-base font-medium	text-center">
                          {item?.label}
                        </h5>
                        <p className="text-sx font-medium	text-center text-red-500">
                          <span className="">{item?.price} </span>đ
                        </p>
                        <p className="font-medium	text-sx text-center">
                          Liên hệ
                        </p>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
