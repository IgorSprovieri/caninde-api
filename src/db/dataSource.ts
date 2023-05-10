import { DataSource } from "typeorm";
import { users } from "./models/users";
import { rents } from "./models/rents";

const { HOST, PORT, USERNAME, PASSWORD, DATABASE } = process.env;

const appDataSource = new DataSource({
  type: "postgres",
  host: HOST || "localhost",
  port: Number(PORT) || 5432,
  username: USERNAME || "docker",
  password: PASSWORD || "docker",
  database: DATABASE || "postgres",
  entities: [users, rents],
  synchronize: true,
  logging: false,
});

export { appDataSource };
