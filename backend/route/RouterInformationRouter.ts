import express from "express";
import {getApiProduct, postApiProduct} from "../controllers/ProductController"
// import multer from "multer";
// import { GridFsStorage } from "multer-gridfs-storage";
import { postApiInformationAdvise } from "../controllers/InformationAdviseController";

export const ApiRouterInformationAdvise = express.Router()

ApiRouterInformationAdvise.post("/api/postApiInformationAdvise", postApiInformationAdvise);
