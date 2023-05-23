import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import { users } from "./users";

@Entity()
export class rents {
  @PrimaryColumn("text")
  id: string;

  @Column("text")
  userId: string;

  @Column("date")
  date: Date;

  @Column("numeric")
  previousClock: number;

  @Column("numeric")
  currentClock: number;

  @Column("numeric")
  totalBill: number;

  @Column("numeric")
  totalConsumption: number;

  @Column("numeric")
  base: number;

  @Column("numeric")
  water: number;

  @Column("numeric")
  IPTU: number;

  @Column("numeric")
  energyConsumption: number;

  @Column("numeric")
  valueByKwh: number;

  @Column("numeric")
  rentEnergyValue: number;

  @Column("numeric")
  total: number;
}
