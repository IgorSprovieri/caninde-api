import { IhashPassword } from "../../passwordHasher/interfaces/IhashPassword";
import { IgenerateId } from "../../idGenerator/IgenerateId";
import { IdGenerator } from "../../idGenerator";
import { PasswordHasher } from "../../passwordHasher";

class UserEntity {
  private generateId: IgenerateId = new IdGenerator();
  private hashPassword: IhashPassword = new PasswordHasher();

  id: string;
  name: string;
  cnpj: string;
  passwordHash: string;

  constructor(data: Iconstructor) {
    this.id = data.id || this.generateId.generate();
    this.name = data.name;
    this.cnpj = data.cnpj;
    this.passwordHash = this.hashPassword.hash(data.password);
  }
}

interface Iconstructor {
  id?: string;
  name: string;
  cnpj: string;
  password: string;
}

export { UserEntity };
