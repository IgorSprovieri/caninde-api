import { IvalidateJWT } from "../../../auth/interfaces/IvalidateJWT";
import { IdeleteSavedRent } from "../../../db/repositories/rent/interfaces/IdeleteSavedRent";
import { IfindRentById } from "../../../db/repositories/rent/interfaces/IfindRentById";

class DeleteSavedRent {
  private validateJWT: IvalidateJWT;
  private findRentById: IfindRentById;
  private deleteSavedRent: IdeleteSavedRent;

  constructor(
    validateJWT: IvalidateJWT,
    findRentById: IfindRentById,
    deleteSavedRent: IdeleteSavedRent
  ) {
    this.validateJWT = validateJWT;
    this.deleteSavedRent = deleteSavedRent;
    this.findRentById = findRentById;
  }

  async main(id: string, token: string): Promise<object> {
    try {
      //validate jwt token
      const auth = await this.validateJWT.validate(token);
      if (!auth) {
        throw new Error("Invalid Token");
      }

      //check if rent exists
      const rentFound = await this.findRentById.findByIdOnDB(id);
      if (!rentFound) {
        throw new Error("Rent not found");
      }

      //delete rent on DB
      const result = await this.deleteSavedRent.deleteOnDB(id);
      if (!result) {
        throw new Error("Rent not updated");
      }

      return { ...result };
    } catch (error) {
      throw new Error("Unexpected error");
    }
  }
}

export { DeleteSavedRent };
