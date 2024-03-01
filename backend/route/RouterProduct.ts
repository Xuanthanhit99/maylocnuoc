import express from "express";
import {getApiProduct, postApiProduct} from "../controllers/ProductController"
// import multer from "multer";
// import { GridFsStorage } from "multer-gridfs-storage";

export const ApiProductRouter = express.Router()
const url = "mongodb+srv://thanhdx:Xuanthanh1909@maylocnuocdungduyen.qdggd9x.mongodb.net/";

// Create a storage object with a given configuration
// const storage = new GridFsStorage({
//     url,
//     file: (req, file) => {
//       //If it is an image, save to photos bucket
//       if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
//         return {
//           bucketName: "photos",
//           filename: `${Date.now()}_${file.originalname}`,
//         }
//       } else {
//         //Otherwise save to default bucket
//         return `${Date.now()}_${file.originalname}`
//       }
//     },
//   })

  // const upload = multer({ })
  // var type = upload.single("avatar")
ApiProductRouter.get("/api/getApiProduct", getApiProduct);
// ApiProductRouter.post("/api/postApiProduct",type, postApiProduct);
ApiProductRouter.post("/api/postApiProduct", getApiProduct);

