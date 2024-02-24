"use client";

import Image from "next/image";

const ProductPage = () => {
  return (
    <div>
      <div>
        <div className="flex justify-center">
          <div className="flex w-10/12 justify-center mt-3">
            <div>
            <div className="my-3">
              <h3 className="text-xl font-medium">Giới thiệu</h3>
              <div className="text-sm	">
                <p>
                  Thấu hiểu nỗi lo của người dùng Việt trong việc sử dụng dòng
                  nước mỗi ngày, Karofi Việt Nam ra đời với ý niệm: “Sức khoẻ là
                  để nâng niu`&quot;`. Để truyền tải những giá trị ấy, Karofi
                  Việt Nam tự tin mang lại dòng nước tinh khiết qua các thiết bị
                  lọc nước tối tân, hiện đại, đạt chuẩn quy định Quốc tế.
                </p>
                <p>
                  Trước khi đưa đến tay người tiêu dùng, các thiết bị máy lọc
                  nước Karofi Việt Nam đều được kiến tạo trên nền tảng THẤU
                  HIỂU. Hơn hết là thấu hiểu mong muốn bảo vệ sức khoẻ của khách
                  hàng, tiếp đến là hướng tới cuộc sống tiện nghi, hiện đại,
                  nâng tầm chất lượng cuộc sống.`&quot;`
                </p>
              </div>
              </div>
              <div className="my-3">
                <h3 className="text-xl font-medium">Về chúng tôi</h3>
                <div className="text-sm">
                  <p>
                    Karofi Việt Nam là đơn vị phân phối chính thức từ Hãng điện
                    máy Karofi Việt Nam - thương hiệu Việt nổi tiếng với sản
                    phẩm chủ đạo là máy lọc nước, cùng các sản phẩm khác như máy
                    lọc không khí, quạt điều hoà,... Trải qua hơn 9 năm kể từ
                    ngày thành lập và phát triển, Karofi từ đơn vị mới đã minh
                    chứng được tốc độ phát triển của mình qua nhiều thành tích
                    như: “Top 100 sản phẩm vàng năm 2012”, “Sản phẩm đảm bảo
                    chất lượng năm 2013”, “Top 50 thương hiệu hàng đầu Việt Nam
                    năm 2017”.
                  </p>
                  <p>
                    Hiện nay, Karofi là đối tác Việt Nam duy nhất trong việc
                    nhập khẩu màng lọc RO từ công ty Dow Chemicals (Mỹ). Với quy
                    mô sản xuất khủng cùng lượng tiêu thụ khổng lồ mỗi năm, sản
                    phẩm của Karofi hiện được phân phối rộng khắp đến hơn 35
                    quốc gia, trong đó có Việt Nam.
                  </p>
                </div>
              </div>
              <div className="my-3">
                <h3 className="text-xl font-medium">Tầm nhìn & Sứ mệnh</h3>
                <div className="text-sm">
                  <p>
                    Với bề dày kinh nghiệm trong việc phân phối thiết bị làm
                    sạch, Karofi Việt Nam vươn tới mục tiêu trở thành đơn vị
                    phân phối máy lọc nước lớn nhất Việt Nam sau 20 năm. Nỗ lực
                    từng ngày của chúng tôi nhằm hướng đến việc tạo ra giá trị
                    tốt nhất, giúp trên 90% người dùng Việt được sử dụng nguồn
                    nước, không khí sạch tươi mỗi ngày.{" "}
                  </p>
                  <div className="flex flex-col justify-center items-center">
                    <Image
                      src={"/image/introduce/introduce-1.jpg"}
                      width={1150}
                      height={1650}
                      alt=""
                    />
                    <p>
                      Từ những giá trị tưởng chừng giản đơn, Karofi Việt Nam
                      vinh dự khi được phụng sự xã hội, giúp cuộc sống con người
                      ngày càng tốt đẹp
                    </p>
                  </div>
                  <div>
                    <h3>Chặng đường phát triển</h3>
                    <p>
                      Hành trình vươn lên của Karofi bạn được thể hiện dưới lược
                      đồ sau:
                    </p>
                    <div className="flex flex-col justify-center items-center">
                      <Image
                        src={"/image/introduce/introduce-2.png"}
                        width={1150}
                        height={1650}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-3">
                <h3 className="text-xl font-medium">Định hướng phát triển</h3>
                <ul className="list-disc ml-4 text-sm">
                  <li className="">
                    <p>
                      Karofi với mục tiêu phụng sự xã hội không chỉ với khách
                      hàng trong nước mà mục tiêu xa hơn của chúng tôi là vươn
                      tới thị trường nước ngoài.
                    </p>
                  </li>
                  <li>
                    <p>
                      Về sản phẩm liên tục được cải tiến, đa dạng và phát triển,
                      đáp ứng tốt hơn mong muốn của người dùng. Trong quan niệm
                      của chúng tôi, dừng lại chính là tụt lùi, chỉ có cố gắng
                      vươn lên, tiến bộ từng ngày mới có thể duy trì, tồn tại và
                      phát triển.
                    </p>
                  </li>
                  <div className="flex justify-center">
                    <Image
                      src={"/image/introduce/introduce-3.jpg"}
                      width={1150}
                      height={1650}
                      alt=""
                    />
                  </div>
                </ul>
              </div>
              <div className="my-3">
                <h3 className="text-xl font-medium">Giá trị cốt lõi & Cam kết với khách hàng</h3>
                <p className="text-sm">
                  Với mọi khách hàng dù chưa hay đã biết từng biết đến Karofi,
                  chúng tôi đều rất mực quan tâm và giành trọn tâm huyết. Sự
                  nhiệt thành, cởi mở và tận tâm là điều bạn sẽ luôn dễ dàng
                  nhận thấy ở đội ngũ nhân viên Karofi. Đến với chúng tôi, bạn
                  sẽ được trải nghiệm dịch vụ:
                </p>
                <ul className="list-disc ml-4 text-sm mb-3">
                  <li>
                    <p>
                      <span>Nhanh chóng:</span>Phản hồi nhanh chóng & kịp thời
                      mọi yêu cầu, thắc mắc từ khách hàng, chủ động cung cấp
                      thông tin để khách hàng thêm hiểu và biết cách lựa chọn
                      sản phẩm.
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>Tiện lợi:</span> Bất cứ lúc nào, bất cứ khi nào cần
                      đến, đội ngũ Karofi sẽ ngay lập tức có mặt. Chúng tôi luôn
                      đặt mình vào vị trí khách hàng, từ đó linh động giải quyết
                      giúp khách hàng vững tin nhất.
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>Chuyên nghiệp:</span> Mọi quy trình, mọi hoạt động
                      tiếp xúc với khách hàng đều được đảm bảo theo đúng quy
                      trình và rõ ràng, minh bạch mọi lúc.
                    </p>
                  </li>
                </ul>
                <p className="text-sm">
                  Hoạt động trên sự hài lòng của khách hàng nên với bất kỳ khiếu
                  nại, thiếu sót nào xảy ra đều sẽ là thước đo hiệu quả làm việc
                  của nhân viên chúng tối, làm căn cứ cho việc kỷ luật. Vì vậy,
                  hãy đến với K để trải nghiệm và đánh giá.
                </p>
              </div>
              <div className="my-3">
                <h3 className="text-xl font-medium">
                  Địa chỉ cửa hàng phân phối máy lọc nước Karofi tại Hà Nam
                </h3>
                <ul className="list-disc ml-4 text-sm">
                  <li>
                    Địa chỉ: Thôn thứ nhất - xã an lão - huyện bình lục - tỉnh
                    hà nam
                  </li>
                  <li>số điện thoại: 0963594358</li>
                </ul>
              </div>
              <div className="my-3 text-sm">
                <h3 className="text-xl font-medium">Cam kết của cửa hàng Karofi Hà nam</h3>
                <p >
                  Chúng tôi luôn cố gắng thỏa mãn và không ngừng sáng tạo để cho
                  ra đời những sản phẩm có chất lượng an toàn với giá cả cạnh
                  tranh, tôn trọng đạo đức kinh doanh và tuân theo mọi quy định
                  của pháp luật.
                </p>
                <p>
                  Bằng sự cố gắng và trách nhiệm, Karofi Hà nam tự tin mang đến
                  mọi tiện ích phục vụ quý khách.
                </p>
                <p className="font-medium">
                  Hãy trao cho K SỰ TIN TƯỞNG, chúng tôi sẽ trả bạn bằng TRỌN
                  NIỀM TIN
                </p>
                <p>
                  `{">>"}` Mọi thông tin cần tư vấn hỗ trợ trực tiếp hãy liên hệ
                  ngay với các Tư vấn viên Karofi Hà nam qua website:{" "}
                  <a href="/">Karofi Hà nam</a> hoặc Hotline:{" "}
                  <a href="tel:0963.594.358">0963.594.358</a>
                </p>
                <p>`{">>"}` Tham khảo danh mục sản phẩm của K TẠI ĐÂY</p>
                <p>
                  `{">>"}` Mọi thông tin cần tư vấn hỗ trợ trực tiếp hãy liên hệ
                  ngay với các Tư vấn viên Karofi Hà nam qua website:{" "}
                  <a href="/">Karofi Hà nam</a> hoặc Hotline:{" "}
                  <a href="tel:0963.594.358">0963.594.358</a>
                </p>
                <div className="flex justify-center">
                    <Image
                      src={"/image/introduce/introduce-4.jpg"}
                      width={1150}
                      height={1650}
                      alt=""
                    />
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
