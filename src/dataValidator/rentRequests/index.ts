import { object, string, number, date, InferType } from "yup";
import { IrentRequestsValidator } from "./interfaces";

class RentRequestsValidator implements IrentRequestsValidator {
  async postRentRequest(body: any) {
    const schema = object({
      date: date().required(),
      previousClock: number().positive().required(),
      currentClock: number().positive().required(),
      totalBill: number().positive().required(),
      totalConsumption: number().positive().required(),
      base: number().positive().required(),
      water: number().positive().required(),
      IPTU: number().positive().required(),
    });

    return await schema.validate(body);
  }

  async putRentRequest(params: any, body: any) {
    const schema = object({
      id: string().required(),
      date: date(),
      previousClock: number().positive(),
      currentClock: number().positive(),
      totalBill: number().positive(),
      totalConsumption: number().positive(),
      base: number().positive(),
      water: number().positive(),
      IPTU: number().positive(),
    });

    return await schema.validate({ ...params, ...body });
  }

  async deleteRentRequest(params: any) {
    const schema = object({
      id: string().required(),
    });

    return await schema.validate(params);
  }
}

export { RentRequestsValidator };
