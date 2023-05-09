import { Request, Response } from "express";
import { createUser, login } from "../useCases";

class UserController {
  async login(req: Request, res: Response) {
    try {
      const result = await login.main(req.body);

      return res.status(200).json({ result });
    } catch (error) {
      return res.status(400).json({ error });
    }
  }

  async post(req: Request, res: Response) {
    try {
      const result = await createUser.main(req.body);

      return res.status(201).json({ result });
    } catch (error) {
      return res.status(400).json({ error });
    }
  }
}

export { UserController };
