import express, { Request, Response } from "express";
import { rentController } from "../api/controllers";

const rentRouters = express.Router();

rentRouters.post("/rent", async (req: Request, res: Response) => {
  await rentController.post(req, res);
});

rentRouters.get("/rents", async (req: Request, res: Response) => {
  await rentController.getAll(req, res);
});

rentRouters.put("/rent/:id", async (req: Request, res: Response) => {
  await rentController.put(req, res);
});

rentRouters.delete("/rent/:id", async (req: Request, res: Response) => {
  await rentController.delete(req, res);
});

export { rentRouters };
