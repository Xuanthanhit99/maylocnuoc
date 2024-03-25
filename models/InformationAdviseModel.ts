import MongoClient, { ConnectOptions, model, models } from 'mongoose'
const Schema = MongoClient.Schema

// Tao model
const InformationAdviseModel = new Schema({
  name: {
    type: String,
  },
  phone: {
    type: String,
  },
  textQuestion: {
    type: String,
  }
})

const InformationAdvise = models.InformationAdviseModel || model("InformationAdviseModel", InformationAdviseModel);

export default InformationAdvise


// module.exports = MongoClient.model('ProductModel', ProductModelSchema)