import { UserRequestsValidator } from "../../dataValidator/userRequests";
import { RentRequestsValidator } from "../../dataValidator/rentRequests";

import { RentController } from "./rentController";
import { UserController } from "./userController";

//----------------------------------------------------------------------

const userRequestsValidator = new UserRequestsValidator();
const rentRequestsValidator = new RentRequestsValidator();

const rentController = new RentController(rentRequestsValidator);
const userController = new UserController(userRequestsValidator);

export { rentController, userController };
