import { userEntity } from "../../entities";
import { IfindUserByCnpj } from "../../../db/repositories/user/interfaces/IfindUserByCnpj";
import { IsaveUser } from "../../../db/repositories/user/interfaces/IsaveUser";

class CreateUser {
  private findUserByCnpj: IfindUserByCnpj;
  private saveUser: IsaveUser;

  constructor(findUserByCnpj: IfindUserByCnpj, saveUser: IsaveUser) {
    this.findUserByCnpj = findUserByCnpj;
    this.saveUser = saveUser;
  }

  async main(data: Imain) {
    //check if cnpj already exists
    const alreadyExists = await this.findUserByCnpj.findByCnpjOnDB(data.cnpj);
    if (alreadyExists) {
      throw new Error("User Already Exists");
    }

    //create new user
    const user = userEntity.create(data);

    //save user on DB
    const result = await this.saveUser.saveOnDB(user);
    if (!result) {
      throw new Error("User not saved");
    }

    return { ...result };
  }
}

interface Imain {
  name: string;
  cnpj: string;
  password: string;
}

export { CreateUser };
