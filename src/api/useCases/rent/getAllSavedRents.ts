import { IvalidateJWT } from "../../../auth/interfaces/IvalidateJWT";
import { IgetAllSavedRents } from "../../../db/repositories/rent/interfaces/IgetAllSavedRents";

class GetAllSavedRents {
  private getAllRents: IgetAllSavedRents;
  private validateJWT: IvalidateJWT;

  constructor(validateJWT: IvalidateJWT, getAllRents: IgetAllSavedRents) {
    this.getAllRents = getAllRents;
    this.validateJWT = validateJWT;
  }

  async main(token: string): Promise<Array<object>> {
    try {
      //validate jwt token
      const auth = await this.validateJWT.validate(token);
      if (!auth) {
        throw new Error("Invalid Token");
      }

      //get all rents saved on DB
      const result = await this.getAllRents.getAllOnDB();
      if (!result) {
        throw new Error("Can not get rents");
      }

      return { ...result };
    } catch (error) {
      throw new Error("Unexpected error");
    }
  }
}

export { GetAllSavedRents };
