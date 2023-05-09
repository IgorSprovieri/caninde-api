import { IvalidateJWT } from "../../../auth/interfaces/IvalidateJWT";
import { IfindRentById } from "../../../db/repositories/rent/interfaces/IfindRentById";
import { IupdateSavedRent } from "../../../db/repositories/rent/interfaces/IupdateSavedRent";
import { rentEntity } from "../../entities";

class RecalculateAndUpdateSavedRent {
  private validateJWT: IvalidateJWT;
  private findRentById: IfindRentById;
  private updateSavedRent: IupdateSavedRent;

  constructor(
    validateJWT: IvalidateJWT,
    updateSavedRent: IupdateSavedRent,
    findRentById: IfindRentById
  ) {
    this.validateJWT = validateJWT;
    this.updateSavedRent = updateSavedRent;
    this.findRentById = findRentById;
  }

  async main(id: string, data: Imain, token: string): Promise<object> {
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

    //update rent found
    Object.assign(rentFound, data);

    //create new rent and calculate
    const rent = rentEntity.create(rentFound);

    //update rent on DB
    const result = await this.updateSavedRent.updateOnDB(rent);
    if (!result) {
      throw new Error("Rent not updated");
    }

    return { ...result };
  }
}

interface Imain {
  date?: Date;
  previousClock?: number;
  currentClock?: number;
  totalBill?: number;
  totalConsumption?: number;
  base?: number;
  water?: number;
  IPTU?: number;
}

export { RecalculateAndUpdateSavedRent };
