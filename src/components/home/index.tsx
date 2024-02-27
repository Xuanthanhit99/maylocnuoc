"use client";

import { Card, Carousel, Input } from 'antd';
import { GetServerSideProps } from 'next';


const contentStyle: React.CSSProperties = {
    height: "330px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };


const index = ({productnews }:any) => {
    return (
        <div>
            <div>
        <Carousel autoplay>
          <div>
            <h3 style={contentStyle}>
              <img
                src="/image/slider/slider1.png"
                alt=""
                className="w-full h-auto"
              />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img
                src="/image/slider/slider2.png"
                alt=""
                className="w-full h-auto"
              />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img
                src="/image/slider/slider4.png"
                alt=""
                className="w-full h-auto"
              />
            </h3>
          </div>
        </Carousel>
      </div>
      <div className=" border-[#f4f5f6] pb-6 pt-3">
        <div className="flex justify-center">
          <div className="prioritize-arrow--left relative w-3/12"></div>
          <div className="w-6/12 h-14 text-white flex justify-center items-center text-xl font-medium bg-gradient-to-r from-indigo-500 via-sky-500 via-30% to-emerald-500">
            Sản phẩm máy lọc nước được khách hàng quan tâm tại cửa hàng
          </div>
          <div className="prioritize-arrow--right relative w-3/12"></div>
        </div>
        <div className="flex justify-center">
          <div className="flex w-10/12 justify-center mt-3">
            <div className="w-full grid grid-cols-1 gap-1 lg:grid-cols-4 lg:gap-4 sm:grid-cols-1 sm:gap-1 md:grid-cols-2 md:gap-2 xl:grid-cols-6 xl:gap-6">
              {productnews.map((item: any) => {
                return (
                  item.key >= 1 &&
                  item.key <= 6 && (
                    <div
                      className={`${
                        item.key > 1 && item.key < 6 ? "mr-1" : ""
                      }`}
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
                  )
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col items-center justify-center">
        <div className="flex w-10/12 border-y">
          <div className="w-4/12 h-14 text-white flex justify-center items-center text-xl font-medium bg-gradient-to-r from-indigo-500 via-sky-500 via-30% to-emerald-500">
            <span className="">Lõi lọc nước và linh kiện</span>
          </div>
          <div className="prioritize-arrow--right relative w-6/12 justify-start flex items-center ">
            <Input defaultValue="Tìm kiếm sản phẩm" className="w-6/12" />
          </div>
        </div>
        <div className="w-10/12 flex justify-center">
          <div className="w-full grid grid-cols-6 gap-6">
            {productnews.map((item: any) => {
              return (
                <div
                  className={` ${item.key > 1 && item.key < 6 ? "mr-1" : ""}
                  `}
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
                      <p className="font-medium	text-sx text-center">Liên hệ</p>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col items-center justify-center">
        <div className="flex w-10/12 border-y">
          <div className="w-4/12 h-14 text-white flex justify-center items-center text-xl font-medium bg-gradient-to-r from-indigo-500 via-sky-500 via-30% to-emerald-500">
            <span className="">Lõi lọc nước và linh kiện</span>
          </div>
          <div className="prioritize-arrow--right relative w-6/12 justify-start flex items-center ">
            <Input defaultValue="Tìm kiếm sản phẩm" className="w-6/12" />
          </div>
        </div>
        <div className="w-10/12 flex justify-center">
          <div className="w-full grid grid-cols-6 gap-6">
            {productnews.map((item:any) => {
              return (
                <div
                  className={` ${item.key > 1 && item.key < 6 ? "mr-1" : ""}
                  `}
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
                      <p className="font-medium	text-sx text-center">Liên hệ</p>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {


    return {
        props:{

        }
    }
}

export default index