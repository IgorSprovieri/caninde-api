import { IgenerateId } from "../../idGenerator/IgenerateId";

class RentEntity {
  private generateId: IgenerateId;

  constructor(generateId: IgenerateId) {
    this.generateId = generateId;
  }

  create(data: Icreate): object {
    const energyConsumption = data.currentClock - data.previousClock;
    const valueByKwh = data.totalBill / data.totalConsumption;
    const rentEnergyValue = energyConsumption * valueByKwh;
    const total = data.base + data.water + data.IPTU + rentEnergyValue;

    const rent = {
      id: data.id || this.generateId.generate(),
      date: data.date,
      previousClock: data.previousClock,
      currentClock: data.currentClock,
      totalBill: data.totalBill,
      totalConsumption: data.totalConsumption,
      base: data.base,
      water: data.water,
      IPTU: data.IPTU,
      energyConsumption: energyConsumption,
      valueByKwh: valueByKwh,
      rentEnergyValue: rentEnergyValue,
      total: total,
    };

    return rent;
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
}

export { RentEntity };
