"use client";
import React, { useEffect, useState } from "react";
import { Tabs, TabsProps } from "antd";
import { useRouter } from "next/navigation";
import CardItem from "../Card/CardItem";
import Link from "next/link";

const ServiceComponent = (props: any) => {
  return (
    <div className="w-full h-auto">
      <div>
        <div className="bg-[url('/image/tintuc/bg-tintuc.jpg')] w-full h-96 flex justify-center items-center font-medium text-4xl text-center">
           Dịch vụ đang  tại cửa hàng
        </div>
        <div className="flex justify-center w-full">
          <div className="flex w-9/12 flex-col my-6">
            <div className="text-sm	text-[#333]">
                <h3 className="text-xl font-bold my-2">Dịch vụ thay lõi lọc nước Kangaroo</h3>
                <h4 className="font-medium	text-lg	mt-2">Dịch vụ thay lõi lọc nước tại nhà và kiểm tra nước miễn phí</h4>
                <p className="my-2">Chúng tôi đang triển khai chương trình thay lõi lọc nước và kiểm tra nguồn nước hoàn toàn miễn phí dành cho quý Khách hàng ở Hà nội, sử dụng máy lọc nước của Kangaroo</p>
                <div className="my-3">
                    <h5 className="font-medium	text-lg	mt-2">1. Dịch vụ thay lõi lọc nước Kangaroo chính hãng:</h5>
                    <ul className="list-disc my-2">
                        <li className="py-2"> Quý khách chỉ cần gọi điện tới Hotline 0966.000.862 sẽ có nhân viên tư vấn cụ thể về lõi lọc nước và cử nhân viên kỹ thuật xuống tận nhà thay lõi và kiểm tra máy lọc cho khách hàng khu vực Hà nội.</li>
                        <li className="py-2"> Đối với khách hàng ở các Tỉnh thành khác có nhu cầu thay lõi chính hãng của Kangaroo chúng tôi sẽ gửi lõi qua đường chuyển phát nhanh và được nhân viên kỹ thuật gọi điện hướng dẫn thay nếu khách hàng chưa biết.</li>
                    </ul>
                </div>
                <div className="my-2">
                    <h5 className="font-medium	text-lg	mt-2">Lý do nên sử dụng dịch vụ thay lõi lọc nước chính hãng của KangarooHydrogen.com :</h5>
                    <ul className="list-decimal my-2">
                        <li className="py-2">Miễn phí công thay cả bộ lõi lọc nước/ máy</li>
                        <li className="py-2">Kiểm tra máy lọc miễn phí</li>
                        <li className="py-2">Quý khách sẽ được dùng lõi lọc chính hãng 100%</li>
                        <li className="py-2">Nhân viên kĩ thuật giàu kinh nghiệm, nhiệt tình.</li>
                        <li className="py-2">Phục vụ 24/7 cả Chủ nhật</li>
                        <li className="py-2">Lịch nhắc nhở thay lõi lọc định kỳ</li>
                    </ul>
                </div>
                <span className="font-medium	text-lg	mt-2"><b>BẢNG GIÁ LÕI LỌC CHÍNH HÃNG Kangaroo – 0966.000.862 (chưa bao gồm chi phí có thể phát sinh khi thay tại nhà)</b></span>
                <div>
                    <h5 className="font-medium	text-lg	mt-2">2. Kiểm tra máy lọc và nguồn nước miễn phí</h5>
                    <ul className="list-disc">
                        <li className="py-2">Hiện nay, trên địa bàn thành phố Hà nội có khoảng 1,2 triệu hộ dân đang sử dụng máy lọc nước gia đình.Tuy nhiên, nguồn nước không được kiểm tra thường xuyên dẫn đến tình trạng máy lọc nước hoạt động không hiểu quả cho ra nguồn nước không đạt tiêu chuẩn, ảnh hưởng nghiêm trọng đến sức khỏe gia đình.</li>
                        <li className="py-2">Kiểm tra nguồn nước, thay lõi lọc thường xuyên trở thành một yêu cầu bức thiết đối với mọi gia đình sử dụng máy lọc nước của Kangaroo cũng như các dòng máy lọc nước khác.</li>
                        <li className="py-2">Nhân viên của Kangaroo sẵn sàng tư vấn cho quý khách cách thức sử dụng máy lọc nước gia đình hiệu quả, đồng thời đặt hẹn lịch thay lõi máy lọc nước,giúp máy lọc nước hoạt động hiệu quả nhất, đảm bảo nguồn nước sạch.</li>
                    </ul>
                </div>
                <div>
                    <h5 className="font-medium	text-lg	mt-2">3. Tại sao nên thay lõi lọc nước Kangaroo:</h5>
                    <ul className="list-disc">
                        <li className="py-2">Để máy lọc nước hoạt động hiệu quả, cho ra nguồn nước đảm bảo sức khỏe như cam kết của nhà sản xuất thì một trong những điều kiện tiên quyết là lõi lọc phải được thay định kỳ đúng thời gian nhà sản xuất đề nghị.</li>
                        <li className="py-2">Việc thay lõi lọc nước không phải việc quá phức tạp nhưng không phải ai cũng muốn tự làm việc này. Nắm bắt được suy nghĩ này của khách hàng KangarooHydrogen.com chính thức cung cấp dịch vụ bảo dưỡng và thay thế lõi lọc nước tinh khiết RO tại nhà.</li>
                        <li className="py-2">Khi khách hàng có nhu cầu cần thay lõi lọc nước Kangaroo tại nhà. Qúy khách chỉ cần nhấc máy gọi đến số <span>HOTLINE : 0963.594.358</span></li>
                        <li className="py-2">Chúng tôi sẽ có mặt nhanh nhất tại nhà quý khách. Bảo trì và thay lõi lọc Kangaroo cũng như các loại lõi lọc RO khác. Đặc biệt nhất, chúng tôi có đội ngũ nhân viên chăm sóc khách hàng chuyên phụ trách thông báo, tư vấn tới quý khách hàng đã sử dụng máy lọc nước Kangaroo về định kỳ thay lõi lọc và bảo dưỡng máy. Chính sách này chỉ có duy nhất tại Kangaroo</li>
                        <li className="py-2">Qúy khách tham khảo thời gian thay lõi lọc theo định kỳ để đảm bảo quá trình sử dụng nước thật tốt nhất ! Đội ngũ hỗ trợ 24/7 bất kể thời gian nào trong ngày. Chúng tôi sẽ tư vấn và lên lịch nhanh nhất để có thể phục vụ Quý khách!</li>
                    </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceComponent;
