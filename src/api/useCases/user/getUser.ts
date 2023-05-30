import { IvalidateJWT } from "../../../auth/interfaces/IvalidateJWT";
import { IfindUserById } from "../../repositories/user/interfaces/IfindUserById";

class GetUser {
  findUserById: IfindUserById;
  validateJWT: IvalidateJWT;

  constructor(findUserById: IfindUserById, validateJWT: IvalidateJWT) {
    this.findUserById = findUserById;
    this.validateJWT = validateJWT;
  }

  async execute(token: string) {
    //check if token is valid and get user id if true
    const userId = await this.validateJWT.validate(token);

    //found user and check if exists
    const userFound = await this.findUserById.findByIdOnDB(userId);
    if (!userFound) {
      throw new Error("User not found");
    }

    //remove password from userFound
    userFound.passwordHash = "";

    return { ...userFound };
  }
}

export { GetUser };
