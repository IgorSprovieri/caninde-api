import { IfindUserByCnpj } from "./interfaces/IfindUserByCnpj";
import { IsaveUser } from "./interfaces/IsaveUser";
import { appDataSource } from "../../../db/dataSource";
import { users } from "../../../db/models/users";
import { UserEntity } from "../../entities/userEntity";

const userRepository = appDataSource.getRepository(users);

class UserRepository implements IfindUserByCnpj, IsaveUser {
  async findByCnpjOnDB(cnpj: string) {
    return await userRepository.findOneBy({ cnpj: cnpj });
  }

  async saveOnDB(user: UserEntity) {
    const userCreated = await userRepository.create({ ...user });
    return await userRepository.save(userCreated);
  }
}

export { UserRepository };
