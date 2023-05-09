import { IfindUserByCnpj } from "./interfaces/IfindUserByCnpj";
import { IsaveUser } from "./interfaces/IsaveUser";
import { appDataSource } from "../../dataSource";
import { users } from "../../models/users";

const userRepository = appDataSource.getRepository(users);

class UserRepository implements IfindUserByCnpj, IsaveUser {
  async findByCnpjOnDB(cnpj: string) {
    return await userRepository.findOneBy({ cnpj: cnpj });
  }

  async saveOnDB(user: object) {
    return await userRepository.create({ ...user });
  }
}

export { UserRepository };
