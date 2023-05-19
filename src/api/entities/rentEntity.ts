import { IrentEntityValidator } from "../../dataValidator/rentEntity/interface";
import { IidGenerator } from "../../idGenerator/IgenerateId";

class RentEntity {
  private idGenerator: IidGenerator;
  private dataValidator: IrentEntityValidator;

  public id: string = "";
  public date: Date = new Date();
  public previousClock: number = 0.0;
  public currentClock: number = 0.0;
  public totalBill: number = 0.0;
  public totalConsumption: number = 0.0;
  public base: number = 0.0;
  public water: number = 0.0;
  public IPTU: number = 0.0;
  public energyConsumption: number = 0.0;
  public valueByKwh: number = 0.0;
  public rentEnergyValue: number = 0.0;
  public total: number = 0.0;

  constructor(idGenerator: IidGenerator, dataValidator: IrentEntityValidator) {
    this.idGenerator = idGenerator;
    this.dataValidator = dataValidator;
  }

  async create(data: rentDTO): Promise<RentEntity> {
    await this.dataValidator.validateData(data);

    const rent = new RentEntity(this.idGenerator, this.dataValidator);

    Object.assign(rent, data);

    if (!data.id) {
      rent.id = this.idGenerator.generateId();
    }

    const { energyConsumption, valueByKwh, rentEnergyValue, total } = data;

    if (!energyConsumption || !valueByKwh || !rentEnergyValue || !total) {
      const energyConsumption = data.currentClock - data.previousClock;
      const valueByKwh = data.totalBill / data.totalConsumption;
      const rentEnergyValue = energyConsumption * valueByKwh;
      const total = data.base + data.water + data.IPTU + rentEnergyValue;

      rent.energyConsumption = energyConsumption;
      rent.valueByKwh = valueByKwh;
      rent.rentEnergyValue = rentEnergyValue;
      rent.total = total;
    }

    return rent;
  }
}

interface rentDTO {
  id?: string;
  date: Date;
  previousClock: number;
  currentClock: number;
  totalBill: number;
  totalConsumption: number;
  base: number;
  water: number;
  IPTU: number;
  energyConsumption?: number;
  valueByKwh?: number;
  rentEnergyValue?: number;
  total?: number;
}

export { RentEntity };
