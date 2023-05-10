import express from "express";
import { userController } from "../api/controllers";

const userRouters = express.Router();

userRouters.post("/user", userController.post);
userRouters.post("/login", userController.login);

export { userRouters };
