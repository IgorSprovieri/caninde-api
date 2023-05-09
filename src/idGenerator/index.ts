import { IgenerateId } from "./IgenerateId";

class IdGenerator implements IgenerateId {
  generate() {
    const randomic = Math.random() * 10000000000;
    const randomicString = randomic.toString();
    return randomicString.slice(0, 10);
  }
}

export { IdGenerator };
