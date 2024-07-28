export type TypeProduct = {
  name: { type: String };
  type: { type: String };
  price: { type: String };
  image: { type: String };
  trademark: { type: String };
  promotionalprice: { type: String };
  guarantee: { type: String };
  key: { type: any };
  slug: { type: String };
};
export type TypeProductNews = {
  Designs: { type: String };
  evaluate: { type: String };
  guarantee: { type: String };
  image: { type: String };
  key: { type: Number };
  label: { type: String };
  link: { type: String };
  marketPrice: { type: String };
  model: { type: String };
  name: { type: String };
  option: { type: any };
  price: { type: String };
  promotionalMarketPrice1: { type: String };
  promotionalMarketPrice2: { type: String };
  quantity: { type: String };
  save: { type: Number };
  slug: { type: String };
  trademark: { type: String };
  type: { type: String };
  _id: { type: String };
};

export const itemsMenu = [
  {
    label: "Trang chủ",
    key: "home",
    url: "/",
  },
  {
    label: "Sản phẩm",
    key: "product",
    url: "/product",
  },
  {
    label: "Dịch vụ",
    key: "service",
    url: "/service",
  },
  {
    label: "Tin tức",
    key: "news",
    url: "/news",
  },
  {
    label: "Tra cứu đơn hàng",
    key: "tracuudonhang",
    url: "/tracuudonhang",
  },
  {
    label: "Signin",
    key: "signin",
    url: "/signin",
  },
];

export type typeMenuItem = {
  label?: string;
  key?: string;
  url?: string;
};
