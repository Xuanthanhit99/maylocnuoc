"use client";

import { Card, Carousel, Input, notification } from "antd";
import { GetServerSideProps } from "next";
import ListProduct from "../ListProduct/ListProduct";
import Image from "next/image";
import { AuthContextDefault } from "../../../app/context/AuthContext";
import { useEffect } from "react";

const HomeComponent = ({ productnews }: any) => {
  const { isLoadingAuth } = AuthContextDefault()
  const key = 'home';
  const [api, contextHolder] = notification.useNotification();

  const onOpenLoading = () => {
    if(isLoadingAuth){api.open({
      key,
      message: 'Đặt hàng thành công',
      description: 'Cảm ơn bạn đã đặt hàng tại cửa hàng chúng tôi.',
    });

    setTimeout(() => {
      api.open({
        key,
        message: 'Đặt hàng thành công',
        description: 'Cảm ơn bạn đã đặt hàng tại cửa hàng chúng tôi.',
      });
    }, 1000);
  }
}
  useEffect(() => {
    onOpenLoading()
  },[isLoadingAuth])

  return (
    <div>
      {contextHolder}
      <div>
        <Carousel autoplay>
          <div>
            <h3 className="lg:h-[330px] sm:h-[150px] md:h-[150px] xl:h-[330px]">
              <img
                src="/image/slider/slider_01.jpg"
                alt=""
                className="w-full h-auto"
              />
            </h3>
          </div>
          <div>
            <h3 className="lg:h-[330px] sm:h-[150px] md:h-[150px] xl:h-[330px]">
              <img
                src="/image/slider/slider_02.jpg"
                alt=""
                className="w-full h-auto"
              />
            </h3>
          </div>
          <div>
            <h3 className="lg:h-[330px] sm:h-[150px] md:h-[150px] xl:h-[330px]">
              <img
                src="/image/slider/slider_03.jpg"
                alt=""
                className="w-full h-auto"
              />
            </h3>
          </div>
          <div>
            <h3 className="lg:h-[330px] sm:h-[150px] md:h-[150px] xl:h-[330px]">
              <img
                src="/image/slider/slider_04.png"
                alt=""
                className="w-full h-auto"
              />
            </h3>
          </div>
        </Carousel>
      </div>
      <div className=" border-[#f4f5f6] pb-6 border">
        <div className="sm:hidden flex justify-center flex-col items-center bg-gradient-to-r from-indigo-500 via-sky-500 via-30% to-emerald-500 ">
          <div className="lg:text-xl sm:text-sm md:text-lg xl:text-3xl font-sans w-full h-14 text-white flex justify-center items-center text-xl font-medium ">
            Hệ thống phân phối bán lẻ karofi tại hà nam
          </div>
          <div className="flex w-10/12 p-2">
            <div className="w-full grid grid-cols-4 gap-4">
              <div className="flex justify-center items-center p-2 bg-white shadow-2xl rounded-md md:flex-col">
                <div className="">
                  <Image
                    src={"/image/home/camketkarofi/sanphamchinhhang.jpg"}
                    alt=""
                    width={65}
                    height={65}
                  />
                </div>
                <div className="pl-4">
                  <div className="text-lg	text-pink-500 font-medium	">Sản phẩm chính hãng</div>
                  <div className="text-base">100% từ tập đoàn karofi</div>
                </div>
              </div>
              <div className="flex justify-center items-center p-2 bg-white shadow-2xl rounded-md md:flex-col">
                <div className="">
                  <Image
                    src={"/image/home/camketkarofi/sanphammoinhat.jpg"}
                    alt=""
                    width={65}
                    height={65}
                  />
                </div>
                <div className="pl-4">
                  <div className="text-lg	text-pink-500 font-medium	">Sản phẩm mới nhất</div>
                  <div className="text-base">Được cập nhập thường xuyên</div>
                </div>
              </div>
              <div className="flex justify-center items-center p-2 bg-white shadow-2xl rounded-md md:flex-col">
                <div className="">
                  <Image
                    src={"/image/home/camketkarofi/dichvutienich.jpg"}
                    alt=""
                    width={65}
                    height={65}
                  />
                </div>
                <div className="pl-4">
                  <div className="text-lg	text-pink-500 font-medium	">Dịch vụ tiện lợi</div>
                  <div className="text-base">Tại nhà và 24/7</div>
                </div>
              </div>
              <div className="flex justify-center items-center p-2 bg-white shadow-2xl rounded-md md:flex-col">
                <div className="">
                  <Image
                    src={"/image/home/camketkarofi/thanhtoan.jpg"}
                    alt=""
                    width={65}
                    height={65}
                  />
                </div>
                <div className="pl-4">
                  <div className="text-lg	text-pink-500 font-medium	">Đặt hàng, thanh toán</div>
                  <div className="text-base">Linh hoạt và bảo mật</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col sm:w-full w-10/12 justify-center mt-3 border border-[#00a2e9] rounded-md">
            <div className="lg:text-xl sm:text-sm text-center md:text-lg xl:text-xl w-full h-14 bg-gradient-to-r from-indigo-500 via-sky-500 via-30% to-emerald-500 text-white flex justify-center  items-center font-medium ">
                Sản phẩm máy lọc nước được khách hàng quan tâm tại cửa hàng
            </div>
            <div className="p-3">
            <ListProduct valueproduct={productnews}/>
            </div>
            </div>
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col items-center justify-center">
        <div className="flex w-10/12 flex-col">
          <div className="w-full h-14  text-white flex justify-start border-b border-[#00a2e9]  items-center lg:text-xl sm:text-sm text-center md:text-lg xl:text-xl font-medium bg-[url('/image/home/bg-title-product.png')] bg-no-repeat bg-contain">
            <span className="pl-16 pb-3">Lõi lọc nước và linh kiện</span>
          </div>
          <div className="my-3">
          <ListProduct valueproduct={productnews} />
          </div>
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col items-center justify-center">
        <div className="flex w-10/12 flex-col">
          <div className="w-full h-14 text-white flex justify-start border-b border-[#00a2e9]  items-center lg:text-xl sm:text-sm text-center md:text-lg xl:text-xl font-medium bg-[url('/image/home/bg-title-product.png')] bg-no-repeat bg-contain">
            <span className="pl-16 pb-3">Lõi lọc nước và linh kiện</span>
          </div>
          <div className="my-3">
          <ListProduct valueproduct={productnews} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {},
  };
};

export default HomeComponent;
