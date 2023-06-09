import { IvalidateJWT } from "../../../auth/interfaces/IvalidateJWT";
import { IfindRentById } from "../../repositories/rent/interfaces/IfindRentById";
import { IupdateSavedRent } from "../../repositories/rent/interfaces/IupdateSavedRent";
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

  async execute(id: string, data: rentDTO, token: string): Promise<object> {
    //validate jwt token
    const userId = await this.validateJWT.validate(token);

    //check if rent exists
    const rentFound = await this.findRentById.findByIdOnDB(id);
    if (!rentFound) {
      throw new Error("Rent not found");
    }

    //check if rent belongs to user
    if (rentFound.userId !== userId) {
      throw new Error("User not found");
    }

    //update found rent
    Object.assign(rentFound, data);

    //create new rent entity
    const rent = await rentEntity.create(rentFound);

    //calculate rent
    rent.calculate();

    //update rent on DB
    const result = await this.updateSavedRent.updateOnDB(rent);
    if (!result) {
      throw new Error("Rent not updated");
    }

    return { ...result };
  }
}

interface rentDTO {
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
