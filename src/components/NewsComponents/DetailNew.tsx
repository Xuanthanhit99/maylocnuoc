import { Button } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import CardItem from "../card/index";
import CustomInput from "../FormItemFloatLabel/CustomInput";
import CustomTextArea from "../FormItemFloatLabel/CustomTextArea";
import axios from "axios";

const listnews = [
  {
    key: 1,
    label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
    image: "/image/product/may-loc-nuoc-kangaroo.png",
    time: "16:52 01/02/2024",
    url: "/news/may-loc-nuoc-karofi1",
  },
  {
    key: 2,
    label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
    image: "/image/product/may-loc-nuoc-kangaroo.png",
    time: "16:52 01/02/2024",
    url: "/news/may-loc-nuoc-karofi2",
  },
  {
    key: 3,
    label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
    image: "/image/product/may-loc-nuoc-kangaroo.png",
    time: "16:52 01/02/2024",
    url: "/news/may-loc-nuoc-karofi3",
  },
  {
    key: 4,
    label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
    image: "/image/product/may-loc-nuoc-kangaroo.png",
    time: "16:52 01/02/2024",
    url: "/news/may-loc-nuoc-karofi4",
  },
  {
    key: 5,
    label: "Máy lọc nước Hydrogen Kangaroo KG100HG",
    image: "/image/product/may-loc-nuoc-kangaroo.png",
    time: "16:52 01/02/2024",
    url: "/news/may-loc-nuoc-karofi5",
  },
];

const onClickPostInformation = async () => {
  try {
      const postApi = await axios.post("/api/postApiInformationAdvise", {
          name: "testname",
          phone: "036683747",
          questions: "test-textarea"
      })
      if(postApi) {
          return postApi
      }
  } catch (error) {
      
  }
}

const DetailNew = () => {
  const [isShowFormTT, setIsShowFormTT] = useState<boolean>(false);

  const onClickLink = (param:string) => {
    if(param === "buy") {
      window.open("/product", "_blank")
    } else {
      setIsShowFormTT(true)
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
            <div className="w-full grid grid-cols-5 gap-5">
                {listnews.map((item: any) => {
                  return (
                    <div
                      className={`${
                        item.key > 1 && item.key < 6 ? "mr-1" : ""
                      }`}
                      key={item.key}
                    >
                      <CardItem
                        label={item?.label}
                        image={item?.image}
                        time={item?.time}
                        url={item?.url}
                      />
                    </div>
                  );
                })}
              </div>
          </div>
        </div>
      </div>
      {isShowFormTT && (
        <div className="h-full w-full flex justify-center fixed top-1/4 left-0 right-0">
          <div className="bg-white z-50 h-3/6 w-3/6 border border-solid border-gray-300 rounded-lg shadow-2xl flex">
            <div
              className="m-4 cursor-pointer"
              onClick={() => setIsShowFormTT(false)}
            >
              <Image
                src={"/image/icon-support/x.png"}
                width={23}
                height={23}
                alt=""
              />
            </div>
            <div className="flex justify-center items-center">
              <div className="flex justify-center items-center">
                <Image
                  src={"/image/introduce/introduce-5.jpg"}
                  width={512}
                  height={435}
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center mx-3">
                <h3 className="text-lg font-bold text-center mb-3">
                  Vui lòng để lại thông tin liên hệ
                  <br /> Máy lóc nước Hà nam sẽ tư vấn ngay cho bạn
                </h3>
                <div className="w-full">
                  <CustomInput name="" label="Họ và Tên" />
                </div>
                <div className="w-full">
                  <CustomInput name="" label="Số điện thoại" />
                </div>
                <div className="w-full">
                  <CustomTextArea label="Câu hỏi thường gặp" />
                </div>
                <div>
                  <Button type="primary" size={"large"} className="bg-red-600" onClick={() => onClickPostInformation()}>
                    Gửi thông tin
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div onClick={() => setIsShowFormTT(false)} className="bg-gray-600 opacity-25 fixed top-0 left-0 right-0 bottom-0"/>
        </div>
      )}
    </div>
  );
};

export default DetailNew;
