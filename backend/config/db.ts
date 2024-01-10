import MongoClient, { ConnectOptions } from 'mongoose'

// const mongoose = require('mongoose')
// const config = require('config')
// const db = config.get('mongoURI')
const uri = "mongodb+srv://thanhdx:Xuanthanh1909@maylocnuocdungduyen.qdggd9x.mongodb.net/";

export const connectDB = async () => {
  try {
    await MongoClient.connect(uri, {
    //   useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    //   useFindAndModify: false
    } as ConnectOptions)

    console.log('Da ket noi co so du lieu')
  } catch (error: any) {
    console.log(error.message)
    process.exit(1)
  }
}
