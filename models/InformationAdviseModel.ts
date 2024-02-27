import MongoClient, { ConnectOptions } from 'mongoose'
const Schema = MongoClient.Schema

// Tao model
const InformationAdviseModel = new Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  questions: {
    type: String,
  }
})
export default MongoClient.model('InformationAdviseModel', InformationAdviseModel)

// module.exports = MongoClient.model('ProductModel', ProductModelSchema)