import { object, string, number, date, InferType } from "yup";
import { IrentEntityValidator } from "./interface";

class RentEntityValidator implements IrentEntityValidator {
  async validateData(data: any) {
    const schema = object({
      id: string(),
      userId: string().required(),
      date: date().required(),
      previousClock: number().positive().required(),
      currentClock: number().positive().required(),
      totalBill: number().positive().required(),
      totalConsumption: number().positive().required(),
      base: number().positive().required(),
      water: number().positive().required(),
      IPTU: number().positive().required(),
      energyConsumption: number().positive(),
      valueByKwh: number().positive(),
      rentEnergyValue: number().positive(),
      total: number().positive(),
    });

    return await schema.validate(data);
  }
}

export { RentEntityValidator };
