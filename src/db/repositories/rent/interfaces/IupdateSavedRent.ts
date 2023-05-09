import { RentEntity } from "../../../../api/entities/rentEntity";

interface IupdateSavedRent {
  updateOnDB: (rent: RentEntity) => Promise<any>;
}

export { IupdateSavedRent };
