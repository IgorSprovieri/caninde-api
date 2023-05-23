import { Request, Response } from "express";
import {
  calculateAndSaveRent,
  getAllSavedRents,
  recalculateAndUpdateSavedRent,
  deleteSavedRent,
} from "../useCases";

class RentController {
  async post(req: Request, res: Response) {
    try {
      const rentToCreate = {
        date: req.body.date,
        previousClock: req.body.previousClock,
        currentClock: req.body.currentClock,
        totalBill: req.body.totalBill,
        totalConsumption: req.body.totalConsumption,
        base: req.body.base,
        water: req.body.water,
        IPTU: req.body.IPTU,
      };

      //call calculate and save rent usecase
      const result = await calculateAndSaveRent.execute(
        rentToCreate,
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
      const rentToEdit = {
        date: req.body.date,
        previousClock: req.body.previousClock,
        currentClock: req.body.currentClock,
        totalBill: req.body.totalBill,
        totalConsumption: req.body.totalConsumption,
        base: req.body.base,
        water: req.body.water,
        IPTU: req.body.IPTU,
      };

      //call recalculate and update saved rent usecase
      const result = await recalculateAndUpdateSavedRent.execute(
        req.params.id,
        rentToEdit,
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
