import MongoClient, { ConnectOptions } from 'mongoose'
const Schema = MongoClient.Schema

// Tao model
const ProductModelSchema = new Schema({
  image: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  }
})
export default MongoClient.model('ProductModel', ProductModelSchema)

// module.exports = MongoClient.model('ProductModel', ProductModelSchema)