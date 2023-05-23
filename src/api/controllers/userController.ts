import { Request, Response } from "express";
import { createUser, login } from "../useCases";

class UserController {
  async login(req: Request, res: Response) {
    try {
      const dataToLogin = {
        cnpj: req.body.cnpj,
        password: req.body.password,
      };

      const result = await login.execute(dataToLogin);
      result.passwordHash = "";

      return res.status(200).json({ result });
    } catch (error) {
      let message = "Unexpected error";

      if (error instanceof Error) {
        message = error.message;
      }

      return res.status(400).json({ error: message });
    }
  }

  async post(req: Request, res: Response) {
    try {
      const userToCreate = {
        cnpj: req.body.cnpj,
        password: req.body.password,
        name: req.body.name,
      };

      const result = await createUser.execute(userToCreate);
      result.passwordHash = "";

      return res.status(201).json({ result });
    } catch (error) {
      let message = "Unexpected error";

      if (error instanceof Error) {
        message = error.message;
      }

      return res.status(400).json({ error: message });
    }
  }
}

export { UserController };
