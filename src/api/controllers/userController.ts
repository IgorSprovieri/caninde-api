import { Request, Response } from "express";
import { createUser, login } from "../useCases";

class UserController {
  async login(req: Request, res: Response) {
    try {
      const result = await login.execute(req.body);

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
      const result = await createUser.execute(req.body);

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
