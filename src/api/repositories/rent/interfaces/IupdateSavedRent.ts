import { RentEntity } from "../../../entities/rentEntity";

interface IupdateSavedRent {
  updateOnDB: (rent: RentEntity) => Promise<any>;
}

export { IupdateSavedRent };
