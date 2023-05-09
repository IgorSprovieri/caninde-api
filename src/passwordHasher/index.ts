import { IcomparePassword } from "./interfaces/IcomparePassword";
import { IhashPassword } from "./interfaces/IhashPassword";

class PasswordHasher implements IcomparePassword, IhashPassword {
  hash(password: string) {
    return password;
  }
  compare(password: string, passwordHash: string) {
    return password === passwordHash;
  }
}

export { PasswordHasher };
