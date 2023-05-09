import { DataSource } from "typeorm";
import { users } from "./models/users";

const appDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "docker",
  password: "docker",
  database: "postgres",
  entities: [users],
  synchronize: true,
  logging: false,
});

export { appDataSource };
