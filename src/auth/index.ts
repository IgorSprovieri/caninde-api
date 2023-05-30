import { IgenerateJWT } from "./interfaces/IgenerateJWT";
import { IvalidateJWT } from "./interfaces/IvalidateJWT";
import jwt from "jsonwebtoken";

const secret = process.env.HASH_SECRET || "Secret";

class Auth implements IgenerateJWT, IvalidateJWT {
  generate(id: string) {
    return jwt.sign({ userId: id }, secret, { expiresIn: "1d" });
  }

  async validate(token: string) {
    try {
      const decodedToken = token.split(" ")[1];
      const decoded: any = await jwt.verify(decodedToken, secret);

      return decoded.userId;
    } catch (error) {
      let message = "";

      if (error instanceof Error) {
        message = error.message;
      }

      throw new Error(message);
    }
  }
}

export { Auth };
