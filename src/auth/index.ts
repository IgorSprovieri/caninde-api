import { IgenerateJWT } from "./interfaces/IgenerateJWT";
import { IvalidateJWT } from "./interfaces/IvalidateJWT";

class Auth implements IgenerateJWT, IvalidateJWT {
  generate() {
    return "";
  }
  async validate(token: string) {
    return true;
  }
}

export { Auth };
