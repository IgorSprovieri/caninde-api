import { IcomparePassword } from "./interfaces/IcomparePassword";
import { IhashPassword } from "./interfaces/IhashPassword";

class PasswordHasher implements IcomparePassword, IhashPassword {
  hash(password: string) {
    return "";
  }
  compare(password: string, passwordHash: string) {
    return true;
  }
}

export { PasswordHasher };
