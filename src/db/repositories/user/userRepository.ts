import { IfindUserByCnpj } from "./interfaces/IfindUserByCnpj";
import { IsaveUser } from "./interfaces/IsaveUser";
import { appDataSource } from "../../dataSource";
import { users } from "../../models/users";

class UserRepository implements IfindUserByCnpj, IsaveUser {
  async findByCnpjOnDB(cnpj: string) {
    return await appDataSource.manager.findOneBy(users, { cnpj: cnpj });
  }

  async saveOnDB(user: object) {
    const instance = await appDataSource.manager.create(users, { ...user });
    return await appDataSource.manager.save(instance);
  }
}

export { UserRepository };
