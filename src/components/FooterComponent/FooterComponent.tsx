"use client";

const FooterComponent = () => {
    return (
        <div className="flex justify-center bg-gradient-to-r from-indigo-500 via-sky-500 via-30% to-emerald-500">
        <div className="w-10/12 sm:w-full flex justify-center items-center p-9 md:p-0 md:py-9 md:11/12">
          <div className="w-full grid grid-cols-4 gap-4 sm:grid-cols-none	md:grid-cols-2 md:gap-2">
            <div className="text-white">
              <h3 className="text-xl font-medium mb-4">Cửa hàng dũng duyên</h3>
              <ul>
                <li className="flex mb-2 text-white cursor-pointer">
                  <img
                    src="/image/home/place.svg"
                    alt=""
                    className="w-6 h-6 mr-3"
                  />
                  <p>
                    Thôn thứ nhất - Xã an lão - Huyện bình lục - Tỉnh hà nam
                  </p>
                </li>
                <li className="flex text-white mb-2 cursor-pointer">
                  <img
                    src="/image/home/telephone.svg"
                    alt=""
                    className="w-6 h-6 mr-3"
                  />
                  <p>0982.594.358</p>
                </li>
                <li className="flex text-white mb-2 cursor-pointer">
                  <img
                    src="/image/home/telephone.svg"
                    alt=""
                    className="w-6 h-6 mr-3"
                  />
                  <p>0982.594.358</p>
                </li>
              </ul>
            </div>
            <div className="text-white">
              <h3 className="text-xl font-medium mb-4">Về chúng tôi</h3>
              <ul>
                <li className="mb-2 cursor-pointer">Giới thiệu về cửa hàng</li>
                <li className="mb-2 cursor-pointer">Chính sách bảo hành</li>
                <li className="mb-2 cursor-pointer">Chính sách giao hàng, vận chuyển</li>
                <li className="mb-2 cursor-pointer">Chính sách thanh toán</li>
                <li className="mb-2 cursor-pointer">Chính sách bảo mật thông tin</li>
              </ul>
            </div>
            <div className="text-white">
              <h3 className="text-xl font-medium mb-4">
                Sản phẩm doanh nghiệp
              </h3>
              <ul>
                <li className="mb-2 cursor-pointer">Máy lọc nước</li>
                <li className="mb-2 cursor-pointer">Lõi lọc nước</li>
                <li className="mb-2 cursor-pointer">Linh kiện</li>
              </ul>
            </div>
            <div className="text-white">
              <h3 className="text-xl font-medium mb-4">
                Theo dõi cửa hàng qua mạng xã hội
              </h3>
              <ul className="flex justify-between">
                <li className="cursor-pointer">
                  <a
                    href="http://zalo.me/4087784932765661863"
                    target="_blank"
                    className="footer__iconSocial footer__iconSocial--zalo"
                    data-uk-tooltip="Zalo"
                  >
                    <img src="/image/home/frame.svg" alt="" />
                  </a>
                </li>
                <li className="cursor-pointer">
                  <a
                    href="http://zalo.me/4087784932765661863"
                    target="_blank"
                    className="footer__iconSocial footer__iconSocial--zalo"
                    data-uk-tooltip="Zalo"
                  >
                    <img src="/image/home/frame1.svg" alt="" />
                  </a>
                </li>
                <li className="cursor-pointer">
                  <a
                    href="http://zalo.me/4087784932765661863"
                    target="_blank"
                    className="footer__iconSocial footer__iconSocial--zalo"
                    data-uk-tooltip="Zalo"
                  >
                    <img src="/image/home/frame2.svg" alt="" />
                  </a>
                </li>
                <li className="cursor-pointer">
                  <a
                    href="http://zalo.me/4087784932765661863"
                    target="_blank"
                    className="footer__iconSocial footer__iconSocial--zalo"
                    data-uk-tooltip="Zalo"
                  >
                    <img src="/image/home/frame3.svg" alt="" />
                  </a>
                </li>
                <li className="cursor-pointer">
                  <a
                    href="http://zalo.me/4087784932765661863"
                    target="_blank"
                    className="footer__iconSocial footer__iconSocial--zalo"
                    data-uk-tooltip="Zalo"
                  >
                    <img src="/image/home/frame4.svg" alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}

export default FooterComponent