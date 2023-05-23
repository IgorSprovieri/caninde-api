import { Entity, Column, PrimaryColumn, OneToMany, JoinColumn } from "typeorm";
import { rents } from "./rents";

@Entity()
export class users {
  @PrimaryColumn("text")
  id: string;

  @Column("text")
  name: string;

  @Column("text")
  cnpj: string;

  @Column("text")
  passwordHash: string;
}
