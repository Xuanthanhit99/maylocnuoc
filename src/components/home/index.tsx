"use client";

import { Card, Carousel, Input } from 'antd';
import { GetServerSideProps } from 'next';
import ListProduct from '../ListProduct/ListProduct';

const index = ({productnews }:any) => {
    return (
        <div>
            <div>
        <Carousel autoplay>
          <div>
            <h3 className='lg:h-[330px] sm:h-[150px] md:h-[150px] xl:h-[330px]'>
              <img
                src="/image/product/may-loc-nuoc-kangaroo.png"
                alt=""
                className="w-full h-auto"
              />
            </h3>
          </div>
          <div>
            <h3 className='lg:h-[330px] sm:h-[150px] md:h-[150px] xl:h-[330px]'>
              <img
                src="/image/product/may-loc-nuoc-kangaroo.png"
                alt=""
                className="w-full h-auto"
              />
            </h3>
          </div>
          <div>
            <h3 className='lg:h-[330px] sm:h-[150px] md:h-[150px] xl:h-[330px]'>
              <img
                src="/image/product/may-loc-nuoc-kangaroo.png"
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
          <div className="bg-[url('/image/home/bg-title-free.png')] lg:text-lg sm:text-sm md:text-md xl:text-xl w-6/12 h-14 text-white flex justify-center items-center text-xl font-medium ">
            Sản phẩm máy lọc nước được khách hàng quan tâm tại cửa hàng
          </div>
          <div className="prioritize-arrow--right relative w-3/12"></div>
        </div>
        <ListProduct valueproduct={productnews}/>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col items-center justify-center">
        <div className="flex w-10/12">
          <div className="w-full h-14 text-white flex justify-start border-b border-[#00a2e9]  items-center text-xl font-medium bg-[url('/image/home/bg-title-product.png')] bg-no-repeat bg-contain">
              <span className="">Lõi lọc nước và linh kiện</span>
          </div>
          {/* <div className="prioritize-arrow--right relative w-6/12 justify-start flex items-center ">
            <Input defaultValue="Tìm kiếm sản phẩm" className="w-6/12" />
          </div> */}
        </div>
        <ListProduct valueproduct={productnews}/>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col items-center justify-center">
        <div className="flex w-10/12 border-y">
          <div className="w-full h-14 text-white flex justify-center items-center text-xl font-medium bg-[url('/image/home/bg-title-product.png')] bg-no-repeat bg-contain">
            <span className="">Lõi lọc nước và linh kiện</span>
          </div>
          {/* <div className="prioritize-arrow--right relative w-6/12 justify-start flex items-center ">
            <Input defaultValue="Tìm kiếm sản phẩm" className="w-6/12" />
          </div> */}
        </div>
        <ListProduct valueproduct={productnews}/>
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