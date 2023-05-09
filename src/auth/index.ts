import { IgenerateJWT } from "./interfaces/IgenerateJWT";
import { IvalidateJWT } from "./interfaces/IvalidateJWT";
import jwt from "jsonwebtoken";

const secret = process.env.HASH_SECRET || "Secret";

class Auth implements IgenerateJWT, IvalidateJWT {
  generate(id: string) {
    return jwt.sign({ id: id }, secret, { expiresIn: "7d" });
  }

  async validate(token: string) {
    const decoded = token.split(" ")[1];
    return await jwt.verify(decoded, secret);
  }
}

export { Auth };
