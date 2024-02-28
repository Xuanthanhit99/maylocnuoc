import express from 'express';
import {ApiProductRouter} from "./RouterProduct"
import {ApiRouterInformationAdvise} from "./RouterInformationRouter"
import {ApiUserRouter} from "./RouterUser"

export const routes = express.Router();

routes.use(ApiProductRouter);
routes.use(ApiRouterInformationAdvise);
routes.use(ApiUserRouter);