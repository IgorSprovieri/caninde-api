import { RentEntity } from "../../../../api/entities/rentEntity";

interface IsaveRent {
  saveOnDB: (rent: RentEntity) => Promise<any>;
}

export { IsaveRent };
