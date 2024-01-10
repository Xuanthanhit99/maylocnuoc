import express from 'express';
import {ApiProductRouter} from "./RouterProduct"

export const routes = express.Router();

routes.use(ApiProductRouter);