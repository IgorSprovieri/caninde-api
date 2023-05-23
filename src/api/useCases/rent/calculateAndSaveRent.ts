import { IvalidateJWT } from "../../../auth/interfaces/IvalidateJWT";
import { IsaveRent } from "../../repositories/rent/interfaces/IsaveRent";
import { rentEntity } from "../../entities";

class CalculateAndSaveRent {
  private saveRent: IsaveRent;
  private validateJWT: IvalidateJWT;

  constructor(validateJWT: IvalidateJWT, saveRent: IsaveRent) {
    this.saveRent = saveRent;
    this.validateJWT = validateJWT;
  }

  async execute(data: rentDTO, token: string): Promise<object> {
    //validate jwt token
    const userId = await this.validateJWT.validate(token);

    //create new rent entity
    const rent = await rentEntity.create({ ...data, userId: userId });

    //calculate rent
    rent.calculate();

    //save rent on DB
    const result = await this.saveRent.saveOnDB(rent);
    if (!result) {
      throw new Error("Rent not saved");
    }

    return { ...result };
  }
}

interface rentDTO {
  date: Date;
  previousClock: number;
  currentClock: number;
  totalBill: number;
  totalConsumption: number;
  base: number;
  water: number;
  IPTU: number;
}

export { CalculateAndSaveRent };
