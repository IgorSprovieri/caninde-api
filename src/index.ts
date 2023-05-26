import "reflect-metadata";
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";

import { indexRouters } from "./routes";
import { userRouters } from "./routes/user";
import { rentRouters } from "./routes/rent";
import { appDataSource } from "./db/dataSource";

const app = express();
const port = 3000;

//Body parsing Middleware
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routers
app.use(indexRouters);
app.use(userRouters);
app.use(rentRouters);

app.listen(port, "0.0.0.0", async () => {
  try {
    await appDataSource.initialize();
    console.log(`Connected successfully on port ${port}`);
  } catch (error) {
    console.error(`Error occured: ${error}`);
  }
});
