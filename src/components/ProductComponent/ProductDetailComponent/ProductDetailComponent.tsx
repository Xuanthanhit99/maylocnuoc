"use client";
import { Breadcrumb, Button, Card, Checkbox, Col, Row } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Image from "next/image";

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

const ProductDetailComponent = (props: any) => {
  const [collapseHeight, setCollapseHeight] = useState(true)
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

//   const paramSlug = props?.params.slug;
  const paramSlug = "";
  return (
    <div className="flex justify-center bg-[#f3f3f3]">
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
                title: paramSlug,
              },
            ]}
          />
        </div>
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
                  <Col className="gutter-row p-0" span={16}>
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
                                <ul className="w-full grid grid-cols-4 gap-4">
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
                                <div className="border border-solid hover:bg-black hover:text-white cursor-pointer border-black w-1/2 !h-auto flex justify-center items-center flex-col p-2 rounded-md">
                                  <b className="text-base">Mua ngay</b>
                                  <span>Giao hàng tận nới</span>
                                </div>
                                <div className="bg-blue-500 hover:bg-blue-700 cursor-pointer text-white w-1/2 !h-auto flex justify-center items-center flex-col p-2 rounded-md">
                                  <b className="text-base">Thêm Vào giỏ</b>
                                  <span>Tiếp tục mua hàng</span>
                                </div>
                              </div>
                              <div className="w-full mt-1">
                                <div className="bg-red-500 hover:bg-red-700 cursor-pointer text-white w-full !h-auto flex justify-center items-center flex-col p-2 rounded-md ">
                                  <b className="text-base">
                                    Yêu cầu gọi tư vấn trực tiếp
                                  </b>
                                  <span>
                                    (Tư vấn viên gọi lại cho quý khách trong
                                    vòng 5 phút)
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </Col>
                  <Col className="gutter-row p-0" span={8}>
                    <div>
                      <div className="border border-solid border-zinc-300">
                        <div className="border-b bg-gradient-to-r from-indigo-500 via-sky-500 via-30% to-emerald-500 h-12 flex justify-center items-center text-white">
                          <b className="">YÊN TÂM MUA SẮM ONLINE</b>
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
                            Bảo trì trọn đời, tặng thêm 1 năm bảo hành an tâm sử
                            dụng
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
                            Linh kiện sẵn có tại hệ thống nhà máy Karofi toàn
                            quốc
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
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
        <div className="mt-4 bg-white">
          <div className="p-3 flex justify-start items-center ">
            <b>COMBO CẦN THIẾT CHO MÁY LỌC NƯỚC NÓNG LẠNH KAROFI KAD-D66</b>
          </div>
          <hr className="mb-4" />
          <div>
            <div className="w-full grid grid-cols-5 gap-5">
              {productnews?.filter(item => item?.key <= 2)?.map((item: any) => {
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
            <b>SẢN PHẨM TƯƠNG TỰ</b>
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

export default ProductDetailComponent;
