import "reflect-metadata";
import express from "express";
import { indexRouters } from "./routes";
import { userRouters } from "./routes/user";
import { rentRouters } from "./routes/rent";
import { appDataSource } from "./db/dataSource";

const app = express();
const port = 3333;

//Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routers
app.use(indexRouters);
app.use(userRouters);
app.use(rentRouters);

try {
  app.listen(port, async () => {
    await appDataSource.initialize();
    console.log(`Connected successfully on port ${port}`);
  });
} catch (error) {
  console.error(`Error occured: ${error}`);
}