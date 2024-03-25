import mongoose from 'mongoose';
import MongoClient, { ConnectOptions } from 'mongoose'

// const uri = "mongodb+srv://thanhdx:Xuanthanh1909@maylocnuocdungduyen.qdggd9x.mongodb.net/";
// const uri = "mongodb+srv://poppypos:Xuanthanh1909@maylocnuocdungduyen.4c7fdgs.mongodb.net/";
let isConnected = false;


export const connectDB = async () => {
  mongoose.set("strictQuery", true);

  if(isConnected) {
    return
  }
  try {
    await MongoClient.connect(process.env.MONGO_URI!, {
      dbName: "maylocnuoctiendung",
    //   useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify: false
    } as ConnectOptions)

    isConnected = true;

  } catch (error: any) {
    console.log(error.message)
    process.exit(1)
  }
}
