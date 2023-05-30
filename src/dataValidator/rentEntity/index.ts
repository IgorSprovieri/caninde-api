import { object, string, number, date, InferType } from "yup";
import { IrentEntityValidator } from "./interface";

class RentEntityValidator implements IrentEntityValidator {
  async validateData(data: any) {
    const schema = object({
      id: string(),
      userId: string().required(),
      date: date().required(),
      previousClock: number().required(),
      currentClock: number().required(),
      totalBill: number().required(),
      totalConsumption: number().positive().required(),
      base: number().required(),
      water: number().required(),
      IPTU: number().required(),
      energyConsumption: number(),
      valueByKwh: number(),
      rentEnergyValue: number(),
      total: number(),
    });

    return await schema.validate(data);
  }
}

export { RentEntityValidator };
