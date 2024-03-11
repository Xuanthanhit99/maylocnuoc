import Image from 'next/image'
import React from 'react'

const DetailReviewProduct = ({onClickCollapseHeight, collapseHeight}:any) => {
  return (
    <div className="mt-4 bh-white ">
    <div className="border-b border-solid border-[#dcdcdc]">
      <h3 className="h-14 bg-blue-500 xl:w-2/12 sm:w-full w-2/5 flex justify-center items-center text-white rounded-t-md">
        Thông tin sản phẩm
      </h3>
    </div>
    <div
      className={`${
        collapseHeight ? "h-96 " : "h-auto"
      } overflow-hidden relative`}
    >
      <div>
        <p>
          Máy lọc nước Karofi D66 là dòng máy mới được Karofi cho ra mắt
          vào giữa năm 2021. Máy sở hữu 11 cấp lọc vùng tiện ích 2 vòi với
          3 chức năng nóng-lạnh-nguội mang tới những trải nghiệm tiện nghi
          bậc nhất cho khách hàng.
        </p>
        <p>
          Cùng Karofi Việt Nam khám phá những tính năng đáng sở hữu nhất
          và tiên ích mà dòng sản phẩm máy lọc nước Karofi D66 này mang
          lại nhé!
        </p>
        <div className="flex justify-center flex-col items-center mt-2">
          <video controls className="w-8/12 h-auto">
            <source src="../file/bunny.mp4" />
          </video>
          <span className="text-sm text-red-500 p-2">
            Video giới thiệu máy lọc nước D66
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2">
          Thông số kỹ thuật máy lọc nước nóng lạnh Karofi KAD D66
        </h3>
        <Image
          src="/image/product/icon/inforlist.PNG"
          alt=""
          className="mr-2"
          width={750}
          height={750}
        />
        <p className="mt-2">
          Máy lọc nước Karofi D66 là một trong những dòng máy lọc nước
          thông minh đầu tiên tại Việt Nam đầu tiên sở hữu công nghệ 11
          lõi lọc cao cấp - công nghệ Smax, với 3 lõi lọc thô, màng RO
          tách rời và cụm lõi chức năng đúc nguyên khối. Đây là cải tiến
          đặc biệt, khiến sản phẩm trở nên thực sự khác biệt trên thị
          trường. Khách hàng không chỉ giảm được khả năng rò rỉ nước, mà
          còn tránh được nhầm lẫn khi thay lõi lọc khoáng.
          <br />
          Đặc biệt nhất là lõi Hydrogen, giúp nâng cao độ pH đến mức
          7,5-8,5. Điều này mang ý nghĩa đặc biệt với sức khoẻ, nhất là
          với những đối tượng thường xuyên thu nạp thực phẩm giàu tính
          axit hay các chất kích thích như bia, rượu,..
        </p>
      </div>
      {collapseHeight ? (
        <div className="h-56 bottom-0 left-0 right-0 w-full absolute bg-gradient-to-r from-indigo-500 via-sky-500 via-30% to-emerald-500 opacity-25"></div>
      ) : (
        ""
      )}
    </div>
    <div
      className="cursor-pointer w-full h-14 bg-red-500 flex justify-center items-center text-white text-base font-medium bg-gradient-to-r from-indigo-500 via-sky-500 via-30% to-emerald-500 rounded-md"
      onClick={() => onClickCollapseHeight()}
    >
      Thu Gọn
    </div>
  </div>
  )
}

export default DetailReviewProduct