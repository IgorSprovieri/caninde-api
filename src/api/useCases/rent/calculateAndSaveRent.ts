import { IvalidateJWT } from "../../../auth/interfaces/IvalidateJWT";
import { IsaveRent } from "../../../db/repositories/rent/interfaces/IsaveRent";
import { RentEntity } from "../../entities/rentEntity";

class CalculateAndSaveRent {
  private saveRent: IsaveRent;
  private validateJWT: IvalidateJWT;

  constructor(validateJWT: IvalidateJWT, saveRent: IsaveRent) {
    this.saveRent = saveRent;
    this.validateJWT = validateJWT;
  }

  async main(data: Imain, token: string): Promise<object> {
    //validate jwt token
    const auth = await this.validateJWT.validate(token);
    if (!auth) {
      throw new Error("Invalid Token");
    }

    //create new rent and calculate
    const rent = new RentEntity(data);
    rent.calculateRent();

    //save rent on DB
    const result = await this.saveRent.saveOnDB(rent);
    if (!result) {
      throw new Error("Rent not saved");
    }

    return { ...result };
  }
}

interface Imain {
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
