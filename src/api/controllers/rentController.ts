import { Request, Response } from "express";
import {
  calculateAndSaveRent,
  getAllSavedRents,
  recalculateAndUpdateSavedRent,
  deleteSavedRent,
} from "../useCases";
import { IrentRequestsValidator } from "../../dataValidator/rentRequests/interfaces";

class RentController {
  private requestValidator: IrentRequestsValidator;

  constructor(requestValidator: IrentRequestsValidator) {
    this.requestValidator = requestValidator;
  }

  async post(req: Request, res: Response) {
    try {
      await this.requestValidator.postRentRequest(req.body);

      const result = await calculateAndSaveRent.main(
        req.body,
        req.headers.authorization || ""
      );

      return res.status(201).json({ result });
    } catch (error) {
      let message = "Unexpected error";

      if (error instanceof Error) {
        message = error.message;
      }

      return res.status(400).json({ error: message });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const result = await getAllSavedRents.main(
        req.headers.authorization || ""
      );

      return res.status(200).json({ result });
    } catch (error) {
      let message = "Unexpected error";

      if (error instanceof Error) {
        message = error.message;
      }

      return res.status(400).json({ error: message });
    }
  }

  async put(req: Request, res: Response) {
    try {
      await this.requestValidator.putRentRequest(req.params, req.body);

      const result = await recalculateAndUpdateSavedRent.main(
        req.params.id,
        req.body,
        req.headers.authorization || ""
      );

      return res.status(200).json({ result });
    } catch (error) {
      let message = "Unexpected error";

      if (error instanceof Error) {
        message = error.message;
      }

      return res.status(400).json({ error: message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      await this.requestValidator.deleteRentRequest(req.params);

      const result = await deleteSavedRent.main(
        req.params.id,
        req.headers.authorization || ""
      );

      return res.status(200).json({ result });
    } catch (error) {
      let message = "Unexpected error";

      if (error instanceof Error) {
        message = error.message;
      }

      return res.status(400).json({ error: message });
    }
  }
}

export { RentController };
