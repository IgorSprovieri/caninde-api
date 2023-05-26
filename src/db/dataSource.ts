import { DataSource } from "typeorm";
import { users } from "./models/users";
import { rents } from "./models/rents";

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;

const appDataSource = new DataSource({
  type: "postgres",
  host: DB_HOST || "localhost",
  port: Number(DB_PORT) || 5432,
  username: DB_USERNAME || "docker",
  password: DB_PASSWORD || "docker",
  database: DB_DATABASE || "postgres",
  entities: [users, rents],
  synchronize: true,
  logging: false,
});

export { appDataSource };
