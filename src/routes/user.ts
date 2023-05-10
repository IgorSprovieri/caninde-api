import express, { Request, Response } from "express";
import { userController } from "../api/controllers";
const userRouters = express.Router();

userRouters.post("/user", async (req: Request, res: Response) => {
  await userController.post(req, res);
});

userRouters.post("/login", async (req: Request, res: Response) => {
  await userController.login(req, res);
});

export { userRouters };
