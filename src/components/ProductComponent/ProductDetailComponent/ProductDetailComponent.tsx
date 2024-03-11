// "use client";
import { Breadcrumb, Button, Card, Checkbox, Col, Row } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Image from "next/image";
import ListProduct from "@/components/ListProduct/ListProduct";
import productnews from "../../../../utils/product.json";
import InformationProduct from "./InformationDetail/InformationProduct/InformationProduct";
import ComboProduct from "./InformationDetail/ComboProduct/ComboProduct";
import DetailReviewProduct from "./InformationDetail/DetailReviewProduct/DetailReviewProduct";
const ProductDetailComponent = ({ paramSlug }: any) => {
  const [collapseHeight, setCollapseHeight] = useState(true);
  const [recentlyViewed, setRecentlyViewed] = useState<any>([]);

  useEffect(() => {
    const localRecentlyViewed = JSON.parse(
      localStorage.getItem("Recently-Viewed")!
    );
    setRecentlyViewed([...recentlyViewed, localRecentlyViewed]);
  }, []);

  return (
    <div className="flex justify-center bg-[#f3f3f3]">
      <div className="w-10/12 md:11/12 sm:w-full sm:p-2">
        <div className="h-14 flex items-center">
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
        {/* thông tin sản phẩm đã chọn */}
        <InformationProduct
          valueproduct={productnews?.productnews}
          paramSlug={paramSlug}
        />
        {/* combo sản phẩm */}
        <ComboProduct valueproduct={productnews?.productnews} />
        {/* thông tin chi tiết sản phẩm đã xem */}
        <DetailReviewProduct collapseHeight={collapseHeight} onClickCollapseHeight={() => setCollapseHeight(!collapseHeight)}/>
        <div className="mt-4 bg-white">
          <div className="p-3 flex justify-start items-center ">
            <b>SẢN PHẨM TƯƠNG TỰ</b>
          </div>
          <hr className="mb-4" />
          <div>
            <ListProduct valueproduct={productnews?.productnews} />
          </div>
        </div>
        <div className="mt-4 bg-white">
          <div className="p-3 flex justify-start items-center ">
            <b>SẢN PHẨM ĐÃ XEM</b>
          </div>
          <hr className="mb-4" />
          <div>
            <ListProduct valueproduct={recentlyViewed} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailComponent;
