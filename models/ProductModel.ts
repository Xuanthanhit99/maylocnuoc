import MongoClient, { ConnectOptions, model, models } from "mongoose";
const Schema = MongoClient.Schema;

// Tao model
const ProductModelSchema = new Schema({
  key: {type: Number},
  label: { type: String },
  type: { type: String },
  price: { type: String },
  image: { type: String },
  trademark: { type: String },
  promotionalprice: { type: String },
  guarantee: { type: String },
  evaluate: {type: String},
  link: {type: String},
  slug: {type: String},
  name: {type: String},
  marketPrice: {type: String},
  promotionalMarketPrice1: {type: String},
  save: {type: Number},
  promotionalMarketPrice2: {type: String},
  model: {type: String},
  designs: {type: String},
  quantity: {type: String},
});
// export default MongoClient.model('ProductModel', ProductModelSchema)
const Product =
  models.Product || model("Product", ProductModelSchema);
export default Product;
// module.exports = MongoClient.model('ProductModel', ProductModelSchema)
