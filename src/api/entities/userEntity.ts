import { IhashPassword } from "../../passwordHasher/interfaces/IhashPassword";
import { IidGenerator } from "../../idGenerator/IgenerateId";
import { IuserEntityValidator } from "../../dataValidator/userEntity/interface";

class UserEntity {
  #idGenerator: IidGenerator;
  #hashPassword: IhashPassword;
  #dataValidator: IuserEntityValidator;

  public id: string = "";
  public name: string = "";
  public cnpj: string = "";
  public passwordHash: string = "";

  constructor(
    idGenerator: IidGenerator,
    hashPassword: IhashPassword,
    dataValidator: IuserEntityValidator
  ) {
    this.#dataValidator = dataValidator;
    this.#idGenerator = idGenerator;
    this.#hashPassword = hashPassword;
  }

  async create(data: userDTO): Promise<UserEntity> {
    await this.#dataValidator.validateData(data);

    const user = new UserEntity(
      this.#idGenerator,
      this.#hashPassword,
      this.#dataValidator
    );

    data.id ? (user.id = data.id) : (user.id = this.#idGenerator.generateId());
    user.name = data.name;
    user.cnpj = data.cnpj;
    user.passwordHash = this.#hashPassword.hash(data.password);

    return user;
  }
}

interface userDTO {
  id?: string;
  name: string;
  cnpj: string;
  password: string;
}

export { UserEntity };
