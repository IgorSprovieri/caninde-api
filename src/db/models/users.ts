import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class users {
  @PrimaryColumn()
  primaryColumn: number = 0;

  @Column("text")
  id: string = "";

  @Column("text")
  name: string = "";

  @Column("text")
  cnpj: string = "";

  @Column("text")
  passwordHash: string = "";
}
