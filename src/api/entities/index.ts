import { IdGenerator } from "../../idGenerator";
import { PasswordHasher } from "../../passwordHasher";
import { UserEntityValidator } from "../../dataValidator/userEntity";
import { RentEntityValidator } from "../../dataValidator/rentEntity";

import { UserEntity } from "./userEntity";
import { RentEntity } from "./rentEntity";

const idGenerator = new IdGenerator();
const passwordHasher = new PasswordHasher();
const userEntityValidator = new UserEntityValidator();
const rentEntityValidator = new RentEntityValidator();

const userEntity = new UserEntity(
  idGenerator,
  passwordHasher,
  userEntityValidator
);
const rentEntity = new RentEntity(idGenerator, rentEntityValidator);

export { userEntity, rentEntity };
