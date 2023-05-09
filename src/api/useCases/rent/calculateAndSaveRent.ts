import { IvalidateJWT } from "../../../auth/interfaces/IvalidateJWT";
import { IsaveRent } from "../../../db/repositories/rent/interfaces/IsaveRent";
import { rentEntity } from "../../entities";

class CalculateAndSaveRent {
  private saveRent: IsaveRent;
  private validateJWT: IvalidateJWT;

  constructor(validateJWT: IvalidateJWT, saveRent: IsaveRent) {
    this.saveRent = saveRent;
    this.validateJWT = validateJWT;
  }

  async main(data: Imain, token: string): Promise<object> {
    try {
      //validate jwt token
      const auth = await this.validateJWT.validate(token);
      if (!auth) {
        throw new Error("Invalid Token");
      }

      //create new rent and calculate
      const rent = rentEntity.create(data);
      rent.calculateRent();

      //save rent on DB
      const result = await this.saveRent.saveOnDB(rent);
      if (!result) {
        throw new Error("Rent not saved");
      }

      return { ...result };
    } catch (error) {
      throw new Error("Unexpected error");
    }
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
