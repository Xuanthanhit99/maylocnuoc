// "use client";
import { Breadcrumb, Col, Row } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import "react-slideshow-image/dist/styles.css";
import Image from "next/image";
import ListProduct from "../ListProduct/ListProduct";
import CustomInput from "../FormItemFloatLabel/CustomInput";
import { useMutation, useQuery } from "react-query";
import {
  getProvince,
  getProvinceDistrict,
  postApiCartByProduct,
} from "../../../app/context/QueryApi";
import CustomSelect from "../FormItemFloatLabel/CustomSelect";
import CustomTextArea from "../FormItemFloatLabel/CustomTextArea";
import { AuthContextDefault } from "../../../app/context/AuthContext";
import { VND } from "../../../utils/format";
import {
  PayPalButtons,
  PayPalScriptProvider,
} from "@paypal/react-paypal-js";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const dynamicParams = false;

const PayComponent = ({ paramSlug, valueproduct }: any) => {
  const [recentlyViewed, setRecentlyViewed] = useState<any>([]);
  const [quantity, setQuantity] = useState<any>(1);
  const [valueCity, setValueCity] = useState<any>(null);
  const [valueDistrict, setValueDistrict] = useState<any>(null);
  const [useValueName, setUseValueName] = useState<string>("");
  const [useValuePhone, setUseValuePhone] = useState<string>("");
  const [useValueEmail, setUseValueEmail] = useState<string>("");
  const [useValueAddress, setUseValueAddress] = useState<string>("");
  const [useValueNote, setUseValueNote] = useState<string | undefined>("");
  const [arrayDistrict, setArrayDistrict] = useState<any>([]);
  const { mutateAsync: mutateAsync } = useMutation(getProvinceDistrict);
  const { mutateAsync: mutateAsyncByProduct } =
    useMutation(postApiCartByProduct);
  const [cartProductMenu, setCartProductMenu] = useState<any>(null);
  const [sumCart, setSumCart] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<any>(false);
  const [textPaySuccess, setTextPaySuccess] = useState<string>("");
  const [payData, setPayData] = useState<any>();
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [timeHome, setTimeHome] = useState<any>(10);
  const router = useRouter();

  // const paramSlug = "pay"
  const key = "updatable";
  const {
    payProduct,
    onPayProductValue,
    payProductCart,
    cartProductContextSum,
    onPayProductValueCart,
  } = AuthContextDefault();

  useEffect(() => {
    if (payProduct?.length) {
      setCartProductMenu(payProduct);
    } else {
      setCartProductMenu(payProductCart);
    }
  }, [payProduct, payProductCart]);

  useEffect(() => {
    const localRecentlyViewed = JSON.parse(
      localStorage.getItem("Recently-Viewed")!
    );
    const sumCartLocal = JSON.parse(localStorage.getItem("Cart-Product-Sum")!);
    setSumCart(sumCartLocal);
  }, []);

  const { data: apiDataFarvoriteData, isLoading: isLoadingFarvorite } =
    useQuery(["/sapi/getReportGetMyFavourite"], () => getProvince(), {
      refetchOnWindowFocus: false,
    });

  const onChangeSelectCity = (value: any) => {
    const findCity = apiDataFarvoriteData?.results?.find(
      (itemCity: any) => itemCity?.province_id === value
    );
    setValueCity(findCity);
    const getDictrictId = async () => {
      return mutateAsync(value).then((res: any) => {
        setArrayDistrict(res);
        return res;
      });
    };

    if (value) {
      getDictrictId();
    }
  };

  const onChangeSelectDistrict = (value: any) => {
    const findDistrict = arrayDistrict?.results?.find(
      (itemCity: any) => itemCity?.district_id === value
    );
    setValueDistrict(findDistrict);
  };
  const postApiCartBy = async () => {
    setIsLoading(true);
    const data = {
      informationuser: {
        username: useValueName,
        phone: useValuePhone,
        email: useValueEmail,
      },
      deliveryaddress: {
        city: valueCity?.province_name,
        district: valueDistrict?.district_name,
        address: useValueAddress,
        note: useValueNote,
      },
      product: cartProductMenu,
      trangthai: true,
      paymentstatus: false,
    };
    return mutateAsyncByProduct(data).then((res: any) => {
      if (res.success) {
        setPayData(res?.data);
        setIsLoading(false);
        paramSlug === "pay" ? onPayProductValue() : onPayProductValueCart();
        setTextPaySuccess("success");
        timePagePaySuccess();
      } else {
        setTextPaySuccess("false");
      }
      return res;
    });
  };

  const addPayPalInDB = async (name: string, data: any) => {
    try {
      const res = await fetch(`//paypal-transaction-complete`, {
        method: "POST",
        body: JSON.stringify({
          name,
          orderId: data.orderID,
        }),
      });
      const dataSyc = await res.json();
    } catch (error) {
      console.log(error);
    }
  };

  const timePagePaySuccess = () => {
    // Bắt đầu đếm ngược chỉ khi không đang trong quá trình đếm ngược
    if (!isRunning) {
      setIsRunning(true);
    }
  };

  useEffect(() => {
    if (isRunning) {
      let timing = setInterval(() => {
        setTimeHome((time: any) => time - 1);
      }, 1000);

      if (timeHome === 0) {
        router.push("/");
        clearInterval(timing);
      }

      return () => clearInterval(timing);
    }
  }, [isRunning, timeHome]);

  return (
    <div className="flex justify-center bg-[#f3f3f3] relative">
      {textPaySuccess === "" && (
        <div className="xl:w-9/12 w-11/12 md:w-11/12">
          <div className="h-14 flex items-center ">
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
                  title: (
                    <>
                      <span>Thanh toán</span>
                    </>
                  ),
                },
              ]}
            />
          </div>
          <div className="bg-white p-6 sm:p-2">
            {/*thông tin sản phẩm */}
            <div className="flex justify-center items-start flex-col">
              {cartProductMenu?.length
                ? cartProductMenu?.map((item: any) => {
                    return (
                      <div key={item?.idvalue}>
                        <Row
                          gutter={{ xs: 24, sm: 16, md: 32, lg: 32 }}
                          className="w-full sm:hidden"
                        >
                          <Col
                            className="flex justify-center items-center"
                            span={5}
                          >
                            <Image
                              src={item?.image}
                              width={150}
                              height={150}
                              alt=""
                            />
                          </Col>
                          <Col
                            className="flex justify-center items-center text-xl font-semibold text-center"
                            span={10}
                          >
                            <p>{item?.label}</p>
                          </Col>
                          <Col
                            className="flex flex-col justify-center items-center text-lg font-semibold"
                            span={3}
                          >
                            <p className="">Số lượng</p>
                            <p className="">{quantity}</p>
                          </Col>
                          <Col
                            className="flex justify-center items-center text-center"
                            span={6}
                          >
                            <div>
                              <p className="text-lg font-semibold">Giá</p>
                              <p className="text-lg font-semibold line-through">
                                {VND(item?.marketPrice)}
                              </p>
                              <p className="text-3xl font-semibold">
                                {VND(item?.price)}
                              </p>
                              <p className="py-2 px-4 bg-red-500 rounded-lg text-white">
                                Giảm giá 30%
                              </p>
                            </div>{" "}
                          </Col>
                        </Row>
                        <hr className="my-3" />
                      </div>
                    );
                  })
                : ""}
              <div className="w-full hidden sm:flex ">
                <div className="w-1/3 mr-2">
                  <Image
                    src={"/image/product/may-loc-nuoc-kangaroo.png"}
                    width={150}
                    height={150}
                    alt=""
                  />
                </div>
                <div className="w-2/3 ml-2">
                  <p className="text-base font-semibold ">
                    Máy lọc nước nóng lạnh Karofi KAD-KG100HGTG1
                  </p>
                  <p className="text-lg font-semibold">Giá:</p>
                  <p className="text-lg font-semibold line-through">
                    8.200.000Đ
                  </p>
                  <p className="text-3xl font-semibold text-red-500">
                    6.200.000Đ
                  </p>
                  <div>
                    <p className="text-sm font-semibold">Số lượng</p>
                    <p className="text-sm font-semibold">{quantity}</p>
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-3" />
            {/* Thông tin người mua */}
            <div className="flex justify-center item-center sm:flex-col">
              <div className="w-1/2 xl:mr-6 md:mr-4 ms:w-full lg:mr-6">
                <h3 className="text-red-500 text-xl font-semibold">
                  Thông tin khách hàng
                </h3>
                <div className="my-3">
                  <div>
                    <CustomInput
                      label="Họ tên*"
                      name="username"
                      className="mb-2"
                      onChange={(e) => setUseValueName(e?.target?.value)}
                    />
                    <CustomInput
                      label="Số điện thoại*"
                      name="phone"
                      className="mb-2"
                      onChange={(e) => setUseValuePhone(e?.target?.value)}
                    />
                  </div>
                  <div>
                    <CustomInput
                      label="Email"
                      name="email"
                      onChange={(e) => setUseValueEmail(e?.target?.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="w-1/2 xl:ml-6 md:ml-4  sm:w-full lg:ml-6">
                <h3 className="text-red-500 text-xl font-semibold">
                  Địa chỉ nhận hàng
                </h3>
                <div className="my-3">
                  <div>
                    <CustomSelect
                      label="Chọn tỉnh/thành phố"
                      options={apiDataFarvoriteData?.results?.map(
                        (item: any) => {
                          return {
                            value: item?.province_id,
                            label: item?.province_name,
                          };
                        }
                      )}
                      onChange={onChangeSelectCity}
                    />
                    <CustomSelect
                      label="Chọn quận/huyện"
                      options={arrayDistrict?.results?.map((item: any) => {
                        return {
                          value: item?.district_id,
                          label: item?.district_name,
                        };
                      })}
                      onChange={onChangeSelectDistrict}
                    />
                  </div>
                  <div>
                    <CustomInput
                      label="Địa chỉ"
                      name="address"
                      onChange={(e) => setUseValueAddress(e?.target?.value)}
                    />
                    <CustomTextArea
                      label="Ghi chú (không bắt buộc)"
                      name="note"
                      onChange={(e) => setUseValueNote(e?.target?.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="border p-4 rounded-lg">
                <Row
                  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                  className="w-full sm:flex-col"
                >
                  <Col
                    className="flex flex-col justify-center items-center sm:flex-row sm:w-full sm:justify-between sm:max-w-full"
                    span={6}
                  >
                    <div className="text-lg font-medium text-red-500">
                      Tổng tiền
                    </div>
                    <div className="text-base font-mono">
                      {sumCart == 0 ? VND(sumCart) : VND(cartProductContextSum)}
                    </div>
                  </Col>
                  <Col
                    className="flex flex-col justify-center items-center sm:flex-row sm:w-full sm:justify-between sm:max-w-full"
                    span={6}
                  >
                    <div className="text-lg font-medium text-red-500">Giảm</div>
                    <div className="text-base font-mono">38.620.00</div>
                  </Col>
                  <Col
                    className="flex flex-col justify-center items-center sm:flex-row sm:justify-between sm:w-full sm:max-w-full"
                    span={6}
                  >
                    <div className="text-lg font-medium text-red-500">
                      Phí vẫn chuyển
                    </div>
                    <div className="text-base font-mono">0</div>
                  </Col>
                  <Col
                    className="flex flex-col justify-center items-center sm:flex-row sm:w-full sm:justify-between sm:max-w-full"
                    span={6}
                  >
                    <div className="text-lg font-medium text-red-500">
                      Tổng tiền thanh toán
                    </div>
                    <div className="text-base font-mono">38.620.00</div>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="flex justify-center items-center flex-col">
              <div
                className="max-w-[200px] w-full cursor-pointer h-14 flex justify-center items-center text-center bg-red-500 text-white font-medium rounded-xl my-4"
                onClick={() => postApiCartBy()}
              >
                Thanh toán khi nhận hàng
              </div>
              <PayPalScriptProvider
                options={{
                  clientId:
                    "Acr9_-_eqeI1qGy51-jLQ2sJpB28EepYAlnCjFIjxmC1uy_-IDLkxl1k07ARadT-J6A9oO13zCicFjtQ",
                }}
              >
                <PayPalButtons
                  // onSuccess={(details: any, data: any) => {
                  //   console.log("details",details)
                  //   addPayPalInDB(details.payer.name.given_name,data);
                  // }}
                  style={{
                    color: "blue",
                    layout: "horizontal",
                  }}
                  createOrder={async () => {
                    const res = await fetch("/api/paypal/checkout", {
                      method: "POST",
                    });
                    const order = await res.json();
                    return order.id;
                  }}
                  // options={{
                  //   clientId: "AbvZKzghtNJZ0aW6VLjMhv1gA7HPlXGc3KxRqn1DrigM0m1578V4fTGc9QjIM0n5B5tAKxg_PG7WHC6o"
                  // }}
                />
              </PayPalScriptProvider>
            </div>
          </div>
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
      )}
      {textPaySuccess === "success" && (
        <div className="w-full flex flex-col justify-center items-center">
          <div className="w-full text-center flex justify-center items-center h-14 text-xl text-white bg-gradient-to-r from-indigo-500 via-sky-500 via-30% to-emerald-500">
            Bạn đã đặt hàng thành công
          </div>
          <div className="flex justify-center items-center flex-col xl:w-9/12 w-11/12 md:w-11/12 paytt-sucecss bg-[url('/image/pay-success.gif')] bg-no-repeat bg-cover max-h-[350px] h-[350px]">
            <div className="flex justify-center items-center text-2xl font-medium text-white bg-gradient-to-r from-indigo-500 via-sky-500 via-30% to-emerald-500 w-3/5 h-14">
              Thông tin đặt hàng
            </div>
            <div className="border font-semibold text-lg flex justify-center items-start flex-col w-3/5 p-3">
              <p className="h-14">
                Tên người đặt hàng:{" "}
                <span className="font-bold text-md text-red-500">
                  {payData?.informationuser?.username}
                </span>
              </p>
              <p className="h-14">
                Email người đặt hàng:{" "}
                <span className="font-bold text-md text-red-500">
                  {payData?.informationuser?.email}
                </span>
              </p>
              <p className="h-14">
                Mã đơn hàng:{" "}
                <span className="font-bold text-md text-red-500">
                  {payData?.codeOrder}
                </span>
              </p>
              <p className="h-14 text-center">
                Lưu ý: <span className="font-bold text-md text-red-500 text-center">
                  Bạn cần phải lưu thông tin Mã đơn hàng để tra cứu đơn hàng của bạn
                </span>
              </p>
              <div className="w-full h-14 border bg-blue-500 flex justify-center items-center">
                <Link
                  href="/"
                  className="text-white text-xl font-sans hover:bg-red-500 hover:text-white w-full h-14 border flex justify-center items-center text-center bg-blue-500"
                >
                  Trang chủ (trở lại trang chủ {timeHome})
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      {isLoading && (
        <div className="w-full flex justify-center items-center fixed top-0 left-0 h-full">
          <Image
            src="/image/loading-2.gif"
            width={350}
            height={350}
            alt="loader"
            className="object-contain z-10"
          />
          <div className="bg-slate-500 opacity-25 absolute top-0 left-0 w-full h-full"></div>
        </div>
      )}
    </div>
  );
};

export default PayComponent;
