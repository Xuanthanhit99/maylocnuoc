import express from 'express';
import {ApiProductRouter} from "./RouterProduct"
import {ApiRouterInformationAdvise} from "./RouterInformationRouter"

export const routes = express.Router();

routes.use(ApiProductRouter);
routes.use(ApiRouterInformationAdvise);