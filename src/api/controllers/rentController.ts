import {
  calculateAndSaveRent,
  getAllSavedRents,
  recalculateAndUpdateSavedRent,
  deleteSavedRent,
} from "../useCases";

class RentController {
  async post(req: any, res: any) {
    try {
      const result = await calculateAndSaveRent.main(
        req.body,
        req.headers.authorization
      );
      return res.status(201).json({ result });
    } catch (error) {
      return res.status(400).json({ error });
    }
  }

  async getAll(req: any, res: any) {
    try {
      const result = await getAllSavedRents.main(req.headers.authorization);
      return res.status(200).json({ result });
    } catch (error) {
      return res.status(400).json({ error });
    }
  }

  async put(req: any, res: any) {
    try {
      const result = await recalculateAndUpdateSavedRent.main(
        req.params.id,
        req.body,
        req.headers.authorization
      );
      return res.status(200).json({ result });
    } catch (error) {
      return res.status(400).json({ error });
    }
  }

  async delete(req: any, res: any) {
    try {
      const result = await deleteSavedRent.main(
        req.params.id,
        req.headers.authorization
      );
      return res.status(200).json({ result });
    } catch (error) {
      return res.status(400).json({ error });
    }
  }
}

export { RentController };
