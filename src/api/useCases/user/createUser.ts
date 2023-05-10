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

  async execute(data: executeDTO) {
    //create new user
    const user = await userEntity.create(data);

    //check if cnpj already exists
    const alreadyExists = await this.findUserByCnpj.findByCnpjOnDB(data.cnpj);
    if (alreadyExists) {
      throw new Error("User Already Exists");
    }

    //save user on DB
    const result = await this.saveUser.saveOnDB(user);
    if (!result) {
      throw new Error("User not saved");
    }

    return { ...result };
  }
}

interface executeDTO {
  name: string;
  cnpj: string;
  password: string;
}

export { CreateUser };
