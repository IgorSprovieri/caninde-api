import { DataSource } from "typeorm";
import { users } from "./models/users";
import { rents } from "./models/rents";

const appDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "docker",
  password: "docker",
  database: "postgres",
  entities: [users, rents],
  synchronize: true,
  logging: false,
});

export { appDataSource };
