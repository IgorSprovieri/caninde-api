import { IfindUserByCnpj } from "./interfaces/IfindUserByCnpj";
import { IsaveUser } from "./interfaces/IsaveUser";

class UserRepository implements IfindUserByCnpj, IsaveUser {
  async findByCnpjOnDB(cnpj: number) {
    return {};
  }

  async saveOnDB(user: object) {
    return {};
  }
}

export { UserRepository };
