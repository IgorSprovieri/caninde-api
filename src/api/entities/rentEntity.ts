import { IdGenerator } from "../../idGenerator";
import { IgenerateId } from "../../idGenerator/IgenerateId";

class RentEntity {
  private generateId: IgenerateId = new IdGenerator();

  public readonly id: string = "";

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

  constructor(data: Iconstructor) {
    Object.assign(this, data);

    if (!data.id) {
      this.id = this.generateId.generate();
    }
  }

  calculateRent(): void {
    const energyConsumption = this.currentClock - this.previousClock;
    const valueByKwh = this.totalBill / this.totalConsumption;
    const rentEnergyValue = energyConsumption * valueByKwh;
    const total = this.base + this.water + this.IPTU + rentEnergyValue;

    this.energyConsumption = energyConsumption;
    this.valueByKwh = valueByKwh;
    this.rentEnergyValue = rentEnergyValue;
    this.total = total;
  }
}

interface Iconstructor {
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
