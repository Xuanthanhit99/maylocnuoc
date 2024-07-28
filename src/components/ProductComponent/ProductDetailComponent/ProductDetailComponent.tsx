// "use client";
import { Breadcrumb, notification } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import "react-slideshow-image/dist/styles.css";
import ListProduct from "@/components/ListProduct/ListProduct";
import InformationProduct from "./InformationDetail/InformationProduct/InformationProduct";
import ComboProduct from "./InformationDetail/ComboProduct/ComboProduct";
import DetailReviewProduct from "./InformationDetail/DetailReviewProduct/DetailReviewProduct";
import { AuthContextDefault } from "../../../../app/context/AuthContext";
import ChatComponent from "@/components/ChatComponent/ChatComponent";
import { TypeProductNews } from "../../../../utils/TypeProduct";
const ProductDetailComponent = ({ paramSlug, valueproduct }: {paramSlug: string | string[], valueproduct: TypeProductNews[]}) => {
  const [collapseHeight, setCollapseHeight] = useState(true);
  const [recentlyViewed, setRecentlyViewed] = useState<any>([]);
  const [api, contextHolder] = notification.useNotification();
  const key = 'home';
  useEffect(() => {
    const localRecentlyViewed = JSON.parse(
      localStorage.getItem("Recently-Viewed")!
    );
    setRecentlyViewed(localRecentlyViewed);
  }, []);

  const onOpenNoti = () => {
    {api.open({
      key,
      message: 'Bình luận thành công',
      description: 'Cảm ơn bạn đã đánh giá, đánh giá của bạn sẽ được kiểm duyệt trước khi hiện lên',
    });

    setTimeout(() => {
      api.open({
        key,
        message: 'Bình luận thành công',
        description: 'Cảm ơn bạn đã đánh giá, đánh giá của bạn sẽ được kiểm duyệt trước khi hiện lên',
      });
    }, 1000);
  }
}

  return (
    <div className="flex justify-center bg-[#f3f3f3]">
      {contextHolder}
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
          valueproduct={valueproduct}
          paramSlug={paramSlug}
        />
        {/* comment */}
        {/* <ChatComponent slugParam={paramSlug} onOpenNoti={onOpenNoti}/> */}
        {/* combo sản phẩm */}
        <ComboProduct valueproduct={valueproduct} paramSlug={paramSlug}/>
        {/* thông tin chi tiết sản phẩm đã xem */}
        <DetailReviewProduct collapseHeight={collapseHeight} onClickCollapseHeight={() => setCollapseHeight(!collapseHeight)}/>
        <div className="mt-4 bg-white">
          <div className="p-3 flex justify-start items-center ">
            <b>SẢN PHẨM TƯƠNG TỰ</b>
          </div>
          <hr className="mb-4" />
          <div>
            <ListProduct valueproduct={valueproduct} />
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
