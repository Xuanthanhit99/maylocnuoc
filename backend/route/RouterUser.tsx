import express from "express";
import {createUserApi} from "../controllers/UserController"

export const ApiUserRouter = express.Router()

ApiUserRouter.post("/api/postCreateUser", createUserApi);
