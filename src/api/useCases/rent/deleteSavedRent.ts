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

  async execute(id: string, token: string): Promise<object> {
    //validate jwt token
    const userId = await this.validateJWT.validate(token);

    //check if rent exists
    const rentFound = await this.findRentById.findByIdOnDB(id);
    if (!rentFound) {
      throw new Error("Rent not found");
    }

    //check if rent belongs to user
    if (!rentFound.userId != userId) {
      throw new Error("Rent not found");
    }

    //delete rent on DB
    const result = await this.deleteSavedRent.deleteOnDB(rentFound);
    if (!result) {
      throw new Error("Rent not deleted");
    }

    return { ...result };
  }
}

export { DeleteSavedRent };
