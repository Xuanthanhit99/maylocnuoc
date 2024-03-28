import { Schema, model, models } from "mongoose";

const CartSchema = new Schema({
  informationuser: {
    username: { type: String },
    phone: { type: String },
    email: { type: String },
  },
  deliveryaddress: {
    city: { type: String },
    district: { type: String },
    address: { type: String },
    note: { type: String },
  },
  product: [
    {
      name: { type: String },
      type: { type: String },
      price: { type: String },
      image: { type: String },
      trademark: { type: String },
      promotionalprice: { type: String },
      guarantee: { type: String },
    },
  ],
  trangthai: {
    type: Boolean,
    default: false,
  },
  date: { type: Date },
  paymentstatus: {
    type: Boolean,
    default: false,
  },
  orderstatus: {
    type: String,
    default: "Chờ xử lý",
  },
  codeorders: {
    type: String,
  },
});

const Cart = models.Cart || model("Cart", CartSchema);
export default Cart;
