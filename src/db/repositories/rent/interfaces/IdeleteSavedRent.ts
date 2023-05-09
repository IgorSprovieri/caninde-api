import { RentEntity } from "../../../../api/entities/rentEntity";

interface IdeleteSavedRent {
  deleteOnDB: (rent: RentEntity) => Promise<any>;
}

export { IdeleteSavedRent };
