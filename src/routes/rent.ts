import express from "express";
import { rentController } from "../api/controllers";

const rentRouters = express.Router();

rentRouters.post("/rent", rentController.post);
rentRouters.get("/rents", rentController.getAll);
rentRouters.put("/rent/:id", rentController.put);
rentRouters.delete("/rent/:id", rentController.delete);

export { rentRouters };
