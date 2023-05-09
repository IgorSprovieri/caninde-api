import { IgenerateJWT } from "../../../auth/interfaces/IgenerateJWT";
import { IfindUserByCnpj } from "../../../db/repositories/user/interfaces/IfindUserByCnpj";
import { IcomparePassword } from "../../../passwordHasher/interfaces/IcomparePassword";

class Login {
  private findUserByCnpj: IfindUserByCnpj;
  private comparePassword: IcomparePassword;
  private generateJWT: IgenerateJWT;

  constructor(
    findUserByCnpj: IfindUserByCnpj,
    generateJWT: IgenerateJWT,
    comparePassword: IcomparePassword
  ) {
    this.findUserByCnpj = findUserByCnpj;
    this.comparePassword = comparePassword;
    this.generateJWT = generateJWT;
  }

  async main(data: Imain) {
    try {
      //check if user exists
      const userFound = await this.findUserByCnpj.findByCnpjOnDB(data.cpf);
      if (!userFound) {
        throw new Error("User or password invalid");
      }

      //check if password is correct
      const validatePassword = await this.comparePassword.compare(
        data.password,
        userFound.passwordHash
      );
      if (!validatePassword) {
        throw new Error("User or password invalid");
      }

      //generate jwt token
      const token = this.generateJWT.generate();

      return { ...userFound, token: token };
    } catch (error) {
      throw new Error("Unexpected error");
    }
  }
}

interface Imain {
  cpf: number;
  password: string;
}

export { Login };
