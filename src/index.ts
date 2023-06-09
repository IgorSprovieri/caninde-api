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
const port = Number(process.env.PORT) || 3000;

//Body Parsing Middleware
app.use(
  cors({
    origin:
      process.env.ENVIROMENT == "dev" ? "*" : "https://caninde.ispapps.com",
  })
);
app.use(express.json());

//Routers
app.use(indexRouters);
app.use(userRouters);
app.use(rentRouters);

//App Listen
app.listen(port, "0.0.0.0", async () => {
  try {
    await appDataSource.initialize();
    console.log(`Connected successfully on port ${port}`);
  } catch (error) {
    console.error(`Error occured: ${error}`);
  }
});
