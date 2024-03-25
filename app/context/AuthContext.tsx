"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import { TypeProduct } from "../../utils/TypeProduct";
import { notification } from "antd";

type TypeUser = {
  username?: any;
  email?: any;
  password?: any;
};

interface TypeAuthContext {
  user?: any;
  isAuth?: boolean;
  Login: (user: TypeUser) => Promise<any>;
  Logout?: (user: TypeUser) => Promise<any>;
  Register: (user: TypeUser) => Promise<any>;
  onClickrecentlyViewed: (user: TypeProduct) => void;
  onClickByProduct: (product: TypeProduct) => void;
  onClickAddCartProduct: (product: TypeProduct) => void;
  payProduct?:any;
  payProductCart?:any;
  cartProductContext?: any;
  cartProductContextSum: number;
  sumArrayPriceAuth: (value: any) => void
  onPayProductValue: () => void;
  onPayProductValueCart: () => void;
  isLoadingAuth: boolean;
  onClickShowFormTT: () => void;
  isShowFormTT: boolean;
  onClickPostInformation: ({name, phone, textQuestion} : any) => void;
  isResultFormTT: boolean;
}

export const AuthContext = createContext<TypeAuthContext>({
  user: null,
  isAuth: false,
  Login: async (user: TypeUser) => await Promise,
  Register: async (user: TypeUser) => await Promise,
  onClickrecentlyViewed: async (user: TypeProduct) => Promise<any>,
  onClickByProduct: async (product: TypeProduct) => Promise<any>,
  onClickAddCartProduct: async (product: TypeProduct) => Promise<any>,
  payProduct: null,
  cartProductContext: null,
  cartProductContextSum: 0,
  sumArrayPriceAuth: async (value: any) => Promise<any>,
  onPayProductValue: () => {},
  isLoadingAuth: false,
  onPayProductValueCart: () => {},
  onClickShowFormTT: () => {},
  isShowFormTT: false,
  onClickPostInformation: ({name, phone, textQuestion} : any) => {},
  isResultFormTT: false,
});

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState();
  const [isAuth, setIsAuth] = useState(false);
  const router = useRouter();
  const [recentlyViewed, setRecentlyViewed] = useState<any>([]);
  const [cartProductContext, setCartProductContext] = useState<any>([]);
  const [cartProductContextSum, setCartProductContextSum] = useState<any>(0);
  const [payProduct, setPayProduct] = useState<any>([])
  const [payProductCart, setPayProductCart] = useState<any>([])
  const [isLoadingAuth, setIsLoadingAuth] = useState<boolean>(false)
  const [isShowFormTT, setIsShowFormTT] = useState<boolean>(false);
  const [isResultFormTT, setIsResultFormTT] = useState<boolean>(false);

  const onClickShowFormTT = () => {
    setIsShowFormTT(!isShowFormTT);
  }

    const onClickPostInformation = async ({name, phone, textQuestion}: any) => {
        try {
            const postApi = await axios.post("/api/postApiInformationAdvise", {
                name,
                phone,
                textQuestion
            })
            if(postApi?.data?.status === 201) {
              setIsShowFormTT(false)
              setIsResultFormTT(true)
            }
        } catch (error) {
        }
    }

  const onClickrecentlyViewed = (value: any) => {
    const valueLocal = [...recentlyViewed, value];
    setRecentlyViewed(valueLocal);
    localStorage.setItem("Recently-Viewed", JSON.stringify(valueLocal));
  };

  const onClickByProduct = (product : TypeProduct) => {
    if(product?.name) {
      router.push(`/cart/pay`);
      setPayProduct([product])
      setCartProductContextSum(product?.price)
    } else {
      router.push(`/cart/pays`);
      setPayProductCart(payProduct.concat(product))
    }
  }

  const onPayProductValue = () => {
    setPayProduct([])
    router.push("/")
    setIsLoadingAuth(true);
  }

  const onPayProductValueCart = () => {
    setPayProductCart([])
    router.push("/")
    setIsLoadingAuth(true);
    setCartProductContext([])
    localStorage.removeItem("Recently-Viewed");
    localStorage.removeItem("Cart-Product-Sum");
  }

  const onClickAddCartProduct = (product : TypeProduct) => {
    const valueLocal = [...cartProductContext, product];
    const valueLocalArray = valueLocal?.map((item: any, index: any) => {
      return {
        ...item,
        idvalue: index + 1,
      }
    })
    setCartProductContext(valueLocalArray);
    localStorage.setItem("Cart-Product", JSON.stringify(valueLocalArray));
    // sumArrayPrice(valueLocalArray)
  }

  const sumArrayPriceAuth = (value: any) => {
    let sum = 0;
  for(var i = 0; i < value?.length; i++) {
        sum += value?.[i]?.price;
        if(!Number.isNaN(sum)) {
          localStorage.setItem("Cart-Product-Sum", JSON.stringify(sum));
          setCartProductContextSum(sum);
        }
    }
    return sum
  }

  const Register = async ({ username, email, password }: TypeUser) => {
    try {
      const fetchApiLogin = await axios.post("/api/user/register", {
        username,
        email,
        password,
      });
      if (fetchApiLogin?.data?.success) {
        setIsAuth(true);
        setUser(fetchApiLogin?.data);
        router.push("/");
      } else {
        setIsAuth(false);
      }
    } catch (error) {
      setIsAuth(false);
    }
  };

  const Login = async ({ email, password }: TypeUser) => {
    try {
      const fetchApiLogin = await axios.post("/api/user/login", {
        email,
        password,
      });
      if (fetchApiLogin?.data?.success) {
        setIsAuth(true);
        setUser(fetchApiLogin?.data);
        router.push("/");
      } else {
        setIsAuth(false);
      }
    } catch (error) {
      setIsAuth(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuth,
        Register,
        Login,
        onClickrecentlyViewed,
        onClickByProduct,
        payProduct,
        payProductCart,
        onClickAddCartProduct,
        cartProductContext,
        cartProductContextSum,
        sumArrayPriceAuth,
        onPayProductValue,
        isLoadingAuth,
        onPayProductValueCart,
        onClickShowFormTT,
        isShowFormTT,
        onClickPostInformation,
        isResultFormTT,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const AuthContextDefault = () => useContext(AuthContext);
