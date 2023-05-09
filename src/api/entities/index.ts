import { IdGenerator } from "../../idGenerator";
import { PasswordHasher } from "../../passwordHasher";

import { RentEntity } from "./rentEntity";
import { UserEntity } from "./userEntity";

const idGenerator = new IdGenerator();
const passwordHasher = new PasswordHasher();

const rentEntity = new RentEntity(idGenerator);
const userEntity = new UserEntity(idGenerator, passwordHasher);

export { rentEntity, userEntity };
