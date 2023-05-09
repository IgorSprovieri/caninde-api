import { createUser, login } from "../useCases";

class UserController {
  async login(req: any, res: any) {
    try {
      const result = await login.main(req.body);

      return res.status(200).json({ result });
    } catch (error) {
      return res.status(400).json({ error });
    }
  }

  async post(req: any, res: any) {
    try {
      const result = await createUser.main(req.body);

      return res.status(201).json({ result });
    } catch (error) {
      return res.status(400).json({ error });
    }
  }
}

export { UserController };
