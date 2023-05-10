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
      //validate request data
      await this.requestValidator.postRentRequest(req.body);

      //call calculate and save rent usecase
      const result = await calculateAndSaveRent.execute(
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
      //call get saved rents usecase
      const result = await getAllSavedRents.execute(
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
      //validate request data
      await this.requestValidator.putRentRequest(req.params, req.body);

      //call recalculate and update saved rent usecase
      const result = await recalculateAndUpdateSavedRent.execute(
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
      //validate request data
      await this.requestValidator.deleteRentRequest(req.params);

      //call delete saved rent
      const result = await deleteSavedRent.execute(
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
