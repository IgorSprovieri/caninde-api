import { Request, Response } from "express";
import { createUser, login } from "../useCases";
import { IuserRequestsValidator } from "../../dataValidator/userRequests/interfaces";

class UserController {
  private requestValidator: IuserRequestsValidator;

  constructor(requestValidator: IuserRequestsValidator) {
    this.requestValidator = requestValidator;
  }

  async login(req: Request, res: Response) {
    try {
      await this.requestValidator.loginRequest(req.body);

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
      await this.requestValidator.postUserRequest(req.body);

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
