import { Auth } from "../../auth";
import { PasswordHasher } from "../../passwordHasher";

import { RentRepository } from "../../db/repositories/rent/rentRepository";
import { UserRepository } from "../../db/repositories/user/userRepository";

import { CalculateAndSaveRent } from "./rent/calculateAndSaveRent";
import { GetAllSavedRents } from "./rent/getAllSavedRents";
import { RecalculateAndUpdateSavedRent } from "./rent/recalculateAndUpdateSavedRent";
import { DeleteSavedRent } from "./rent/deleteSavedRent";
import { Login } from "./user/login";
import { CreateUser } from "./user/createUser";

//-----------------------------------

const auth = new Auth();
const passwordHasher = new PasswordHasher();

const rentRepository = new RentRepository();
const userRepository = new UserRepository();

const calculateAndSaveRent = new CalculateAndSaveRent(auth, rentRepository);
const getAllSavedRents = new GetAllSavedRents(auth, rentRepository);
const recalculateAndUpdateSavedRent = new RecalculateAndUpdateSavedRent(
  auth,
  rentRepository,
  rentRepository
);
const deleteSavedRent = new DeleteSavedRent(
  auth,
  rentRepository,
  rentRepository
);
const login = new Login(userRepository, auth, passwordHasher);
const createUser = new CreateUser(userRepository, userRepository);

export {
  calculateAndSaveRent,
  getAllSavedRents,
  recalculateAndUpdateSavedRent,
  deleteSavedRent,
  login,
  createUser,
};
