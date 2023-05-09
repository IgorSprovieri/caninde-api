import { v4 } from "uuid";
import { IgenerateId } from "./IgenerateId";

class IdGenerator implements IgenerateId {
  generate() {
    return v4();
  }
}

export { IdGenerator };
