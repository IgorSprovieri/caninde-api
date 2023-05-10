import express, { Request, Response } from "express";

const indexRouters = express.Router();

indexRouters.get("/", (req: Request, res: Response) => {
  return res
    .status(200)
    .json({ CanindeAPI: "It's an api to manage Canindé Gas Station" });
});

export { indexRouters };
