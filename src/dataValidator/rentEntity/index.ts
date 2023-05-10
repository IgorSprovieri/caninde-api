import { object, string, number, date, InferType } from "yup";
import { IrentEntityValidator } from "./interface";

class RentEntityValidator implements IrentEntityValidator {
  async validateData(data: any) {
    const schema = object({
      id: string(),
      date: date().required(),
      previousClock: number().positive().required(),
      currentClock: number().positive().required(),
      totalBill: number().positive().required(),
      totalConsumption: number().positive().required(),
      base: number().positive().required(),
      water: number().positive().required(),
      IPTU: number().positive().required(),
      energyConsumption: number().positive().required(),
      valueByKwh: number().positive().required(),
      rentEnergyValue: number().positive().required(),
      total: number().positive().required(),
    });

    return await schema.validate(data);
  }
}

export { RentEntityValidator };
