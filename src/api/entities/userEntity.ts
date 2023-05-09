import { IhashPassword } from "../../passwordHasher/interfaces/IhashPassword";
import { IgenerateId } from "../../idGenerator/IgenerateId";

class UserEntity {
  private generateId: IgenerateId;
  private hashPassword: IhashPassword;

  constructor(generateId: IgenerateId, hashPassword: IhashPassword) {
    this.generateId = generateId;
    this.hashPassword = hashPassword;
  }

  id: string = "";
  name: string = "";
  cnpj: number = 0;
  passwordHash: string = "";

  create(data: Icreate): UserEntity {
    const user = new UserEntity(this.generateId, this.hashPassword);

    Object.assign(this, data);
    this.passwordHash = this.hashPassword.hash(data.password);

    if (!data.id) {
      this.id = this.generateId.generate();
    }

    return user;
  }
}

interface Icreate {
  id?: string;
  name: string;
  cnpj: number;
  password: string;
}

export { UserEntity };
