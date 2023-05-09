import bcrypt from "bcrypt";
import { IcomparePassword } from "./interfaces/IcomparePassword";
import { IhashPassword } from "./interfaces/IhashPassword";

class PasswordHasher implements IcomparePassword, IhashPassword {
  hash(password: string) {
    return bcrypt.hashSync(password, 10);
  }
  async compare(password: string, passwordHash: string) {
    return await bcrypt.compare(password, passwordHash);
  }
}

export { PasswordHasher };
