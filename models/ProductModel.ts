import MongoClient, { ConnectOptions, model, models } from 'mongoose'
const Schema = MongoClient.Schema

// Tao model
const ProductModelSchema = new Schema({
  image: {
    type: String,
  },
  id: {
    type: String,
  }
})
// export default MongoClient.model('ProductModel', ProductModelSchema)
const ProductImage = models.ProductImage || model("ProductImage", ProductModelSchema);
export default ProductImage
// module.exports = MongoClient.model('ProductModel', ProductModelSchema)