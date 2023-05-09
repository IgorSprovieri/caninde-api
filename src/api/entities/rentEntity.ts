import { IgenerateId } from "../../idGenerator/IgenerateId";

class RentEntity {
  private generateId: IgenerateId;

  constructor(generateId: IgenerateId) {
    this.generateId = generateId;
  }

  id: string = "";
  date: Date = new Date();
  previousClock: number = 0.0;
  currentClock: number = 0.0;
  totalBill: number = 0.0;
  totalConsumption: number = 0.0;
  base: number = 0.0;
  water: number = 0.0;
  IPTU: number = 0.0;
  energyConsumption: number = 0.0;
  valueByKwh: number = 0.0;
  rentEnergyValue: number = 0.0;
  total: number = 0.0;

  create(data: Icreate): RentEntity {
    const rent = new RentEntity(this.generateId);

    Object.assign(rent, data);

    if (!data.id) {
      this.id = this.generateId.generate();
    }

    return rent;
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

interface Icreate {
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
