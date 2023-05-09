import { IhashPassword } from "../../passwordHasher/interfaces/IhashPassword";
import { IgenerateId } from "../../idGenerator/IgenerateId";

class UserEntity {
  private generateId: IgenerateId;
  private hashPassword: IhashPassword;

  constructor(generateId: IgenerateId, hashPassword: IhashPassword) {
    this.generateId = generateId;
    this.hashPassword = hashPassword;
  }

  create(data: Icreate): object {
    const user = {
      id: data.id || this.generateId.generate(),
      name: data.name,
      cnpj: data.cnpj,
      passwordHash: this.hashPassword.hash(data.password),
    };

    return user;
  }
}

interface Icreate {
  id?: string;
  name: string;
  cnpj: string;
  password: string;
}

export { UserEntity };
