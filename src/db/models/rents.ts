import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class rents {
  @PrimaryColumn("text")
  id: string = "";

  @Column("date")
  date: Date = new Date();

  @Column("numeric")
  previousClock: number = 0.0;

  @Column("numeric")
  currentClock: number = 0.0;

  @Column("numeric")
  totalBill: number = 0.0;

  @Column("numeric")
  totalConsumption: number = 0.0;

  @Column("numeric")
  base: number = 0.0;

  @Column("numeric")
  water: number = 0.0;

  @Column("numeric")
  IPTU: number = 0.0;

  @Column("numeric")
  energyConsumption: number = 0.0;

  @Column("numeric")
  valueByKwh: number = 0.0;

  @Column("numeric")
  rentEnergyValue: number = 0.0;

  @Column("numeric")
  total: number = 0.0;
}
