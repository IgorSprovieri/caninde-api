import { RentEntity } from "../../../entities/rentEntity";

interface IsaveRent {
  saveOnDB: (rent: RentEntity) => Promise<any>;
}

export { IsaveRent };
