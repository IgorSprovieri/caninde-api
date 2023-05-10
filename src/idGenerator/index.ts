import { v4 } from "uuid";
import { IidGenerator } from "./IgenerateId";

class IdGenerator implements IidGenerator {
  generateId() {
    return v4();
  }
}

export { IdGenerator };
