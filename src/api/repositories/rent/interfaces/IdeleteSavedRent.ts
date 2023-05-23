import { RentEntity } from "../../../entities/rentEntity";

interface IdeleteSavedRent {
  deleteOnDB: (rent: RentEntity) => Promise<any>;
}

export { IdeleteSavedRent };
