import { IvalidateJWT } from "../../../auth/interfaces/IvalidateJWT";
import { IgetAllSavedRents } from "../../../db/repositories/rent/interfaces/IgetAllSavedRents";

class GetAllSavedRents {
  private getAllRents: IgetAllSavedRents;
  private validateJWT: IvalidateJWT;

  constructor(validateJWT: IvalidateJWT, getAllRents: IgetAllSavedRents) {
    this.getAllRents = getAllRents;
    this.validateJWT = validateJWT;
  }

  async execute(token: string): Promise<Array<object>> {
    //validate jwt token
    const userId = await this.validateJWT.validate(token);

    //get all rents saved on DB
    const result = await this.getAllRents.getAllOnDB(userId);
    if (!result) {
      throw new Error("Can not get rents");
    }

    return { ...result };
  }
}

export { GetAllSavedRents };
