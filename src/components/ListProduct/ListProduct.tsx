import { Card } from 'antd';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { AuthContextDefault } from '../../../app/context/AuthContext';
import { VND } from '../../../utils/format';

const ListProduct = ({valueproduct}: any) => {
  const { onClickrecentlyViewed } = AuthContextDefault()
  return (
      <div className="w-full grid grid-cols-1 gap-1 lg:grid-cols-4 lg:gap-4 sm:grid-cols-2 sm:gap-2 md:grid-cols-2 md:gap-2 xl:grid-cols-6 xl:gap-6">
        {valueproduct?.map((item: any) => {
          return (
            item?.key >= 1 &&
            item?.key <= 6 && (
              <div
                className={`sm:mb-6 ${
                  item.key > 1 && item.key < 6 ? "mr-1" : ""
                }`}
                key={item.key}
                onClick={()=>onClickrecentlyViewed(item)}
              >
                <Link href={item?.link}>
                <Card
                  hoverable
                  cover={<img alt="example" src={item?.image} />}
                >
                  <div className="mt-1">
                    <h5 className="text-base font-medium	text-center">
                      {item?.label}
                    </h5>
                    <p className="text-sx font-medium	text-center text-red-500">
                      <span className="">{VND(item?.price)} </span>
                    </p>
                    <p className="font-medium	text-sx text-center">
                      Liên hệ
                    </p>
                  </div>
                </Card>
                </Link>
              </div>
            )
          );
        })}
      </div>
  )
}

export default ListProduct