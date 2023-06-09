import { IrentEntityValidator } from "../../dataValidator/rentEntity/interface";
import { IidGenerator } from "../../idGenerator/IgenerateId";

class RentEntity {
  #idGenerator: IidGenerator;
  #dataValidator: IrentEntityValidator;

  public id: string = "";
  public userId: string = "";
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
    this.#idGenerator = idGenerator;
    this.#dataValidator = dataValidator;
  }

  async create(data: rentDTO): Promise<RentEntity> {
    await this.#dataValidator.validateData(data);

    const rent = new RentEntity(this.#idGenerator, this.#dataValidator);

    Object.assign(rent, data);

    if (!data.id) {
      rent.id = this.#idGenerator.generateId();
    }

    return rent;
  }

  calculate() {
    const energyConsumption =
      Number(this.currentClock) - Number(this.previousClock);
    const valueByKwh = Number(this.totalBill) / Number(this.totalConsumption);
    const rentEnergyValue = energyConsumption * valueByKwh;
    const total =
      Number(this.base) +
      Number(this.water) +
      Number(this.IPTU) +
      rentEnergyValue;

    this.energyConsumption = energyConsumption;
    this.valueByKwh = valueByKwh;
    this.rentEnergyValue = rentEnergyValue;
    this.total = total;
  }
}

interface rentDTO {
  id?: string;
  userId: string;
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
