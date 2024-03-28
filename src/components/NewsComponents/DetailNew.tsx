import { Button } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import CardItem from "../Card/CardItem";
import CustomInput from "../FormItemFloatLabel/CustomInput";
import CustomTextArea from "../FormItemFloatLabel/CustomTextArea";
import axios from "axios";
import ListProduct from "../ListProduct/ListProduct";
import { AuthContextDefault } from "../../../app/context/AuthContext";

const DetailNew = ({paramSlug, valueProduct}: any) => {
  const { onClickShowFormTT } = AuthContextDefault()
  
  const onClickLink = (param:string) => {
    if(param === "buy") {
      window.open("/product", "_blank")
    } else {
      onClickShowFormTT()
    }
  }
  return (
    <div className="w-full h-auto relative">
      <div className="flex justify-center items-center">
        <div className="flex w-9/12 flex-col items-center justify-center">
          <div className="bg-[url('/image/tintuc/bg-tintuc.jpg')] my-5 rounded-xl w-full h-52 flex justify-center items-center font-medium text-4xl text-center"></div>
          <div className="flex justify-center w-full flex-col text-[#333] text-sm">
              <h2 className="text-xl	font-medium	">Máy lọc nước Karofi chạy không ngắt và cách khắc phục triệt để</h2>
              <span className="text-xs mb-3">21-12-2023, 12:00 am</span>
              <p className="text-sm	">Máy lọc nước Karofi chạy không ngắt, nước thải vẫn ra đều nhưng máy thì không dừng cả ngày. Điều này khiến cho nhiều gia đình lo lắng bởi thường thì sau khi hoạt động 1-1,5 giờ để bình chứa đầy nước máy sẽ tự dừng. Vậy máy lọc nước Karofi nhà bạn đang gặp vấn đề ở đâu và cách khắc phục nào triệt để nhất, hãy đọc ngay bài viết dưới đây của <a href="/" className="text-blue-600">Karofi Hà nam</a> bạn nhé.</p>

              <div className="my-4">
                <h4 className="text-xl	font-medium text-red-700 my-4">Dấu hiệu lỗi máy lọc nước chạy không ngắt</h4>
                <p>Như đã đề cập ở trên, dấu hiệu dễ dàng nhất để nhận biết máy lọc nước đang có vấn đề chính là máy chạy không ngắt. Máy lọc nước karofi chạy không ngắt là tình trạng nước thải vẫn ra đều, nước đã đầy bình nhưng máy vẫn hoạt động.</p>
                <div className="my-4 flex flex-col items-center w-full">
                <Image alt="example" src={"/image/tintuc/tin-tuc-1.jpg"} width={800} height={533}/>
                <span>Dấu hiệu máy lọc nước gặp lỗi chạy không ngắt</span>
                </div>
                <p>Vậy nguyên nhân dẫn đến tình trạng này do đâu? Xem ngay trong phần tiếp theo nhé!</p>
              </div>

              <div>
                <h2 className="text-xl	font-medium text-red-700 my-4">Nguyên nhân khiến máy lọc nước Karofi chạy không ngắt</h2>
                <p>Máy lọc nước Karofi chạy không ngắt do rất nhiều nguyên nhân, dưới đây Karofi Việt Nam sẽ chỉ ra một số nguyên nhân chủ yếu để bạn có thể khắc phục triệt để nhất nhé.</p>

                <div className="my-4">
                  <h3  className="text-xl	font-medium text-gray-700 my-4">Máy lọc nước gia đình bạn đang bị rò rỉ nước</h3>
                  <p>Máy lọc nước Karofi chạy không ngắt có thể do đang bị rò rỉ nước ra ngoài. Điều này sẽ dẫn đến hiện tượng mất áp làm van áp cao không mở được điểm tiếp để ngắt máy. </p>
                  <p>Các điểm mà bạn cần chú ý để tránh nước bị rò rỉ đó là: Các cút nối của các bộ lọc, cút nối của đường ống nước bên trong máy, đường ống nước cấp bên ngoài máy. </p>
                </div>

                <div className="my-4">
                  <h3  className="text-xl	font-medium text-gray-700 my-4">Máy lọc nước gia đình bạn đang bị rò rỉ nước</h3>
                  <p>Máy lọc nước Karofi chạy không ngắt có thể do đang bị rò rỉ nước ra ngoài. Điều này sẽ dẫn đến hiện tượng mất áp làm van áp cao không mở được điểm tiếp để ngắt máy. </p>
                  <p>Các điểm mà bạn cần chú ý để tránh nước bị rò rỉ đó là: Các cút nối của các bộ lọc, cút nối của đường ống nước bên trong máy, đường ống nước cấp bên ngoài máy. </p>
                </div>

                <div className="my-4">
                  <h3  className="text-xl	font-medium text-gray-700 my-4">Máy lọc nước gia đình bạn đang bị rò rỉ nước</h3>
                  <p>Máy lọc nước Karofi chạy không ngắt có thể do đang bị rò rỉ nước ra ngoài. Điều này sẽ dẫn đến hiện tượng mất áp làm van áp cao không mở được điểm tiếp để ngắt máy. </p>
                  <p>Các điểm mà bạn cần chú ý để tránh nước bị rò rỉ đó là: Các cút nối của các bộ lọc, cút nối của đường ống nước bên trong máy, đường ống nước cấp bên ngoài máy. </p>
                </div>

                <div className="my-4">
                  <h3  className="text-xl	font-medium text-gray-700 my-4">Máy lọc nước gia đình bạn đang bị rò rỉ nước</h3>
                  <p>Máy lọc nước Karofi chạy không ngắt có thể do đang bị rò rỉ nước ra ngoài. Điều này sẽ dẫn đến hiện tượng mất áp làm van áp cao không mở được điểm tiếp để ngắt máy. </p>
                  <p>Các điểm mà bạn cần chú ý để tránh nước bị rò rỉ đó là: Các cút nối của các bộ lọc, cút nối của đường ống nước bên trong máy, đường ống nước cấp bên ngoài máy. </p>
                </div>
              </div>
          </div>
          <div className="my-3">
          <Button type="primary" size={"large"} className="bg-gray-600 mr-3" onClick={() => onClickLink("buy")}>
                    Mua sản phẩm
                  </Button>
                  <Button type="primary" size={"large"} className="bg-red-600 ml-3" onClick={() => onClickLink("")}>
                    Đăng ký nhận tư vấn
                  </Button>
          </div>
          <div >
            <h3 className="my-4 text-xl	font-medium	text-gray-700">Bài viết liên quan</h3>
            <ListProduct valueproduct={valueProduct}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailNew;
