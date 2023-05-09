import { IdeleteSavedRent } from "./interfaces/IdeleteSavedRent";
import { IfindRentById } from "./interfaces/IfindRentById";
import { IgetAllSavedRents } from "./interfaces/IgetAllSavedRents";
import { IsaveRent } from "./interfaces/IsaveRent";
import { IupdateSavedRent } from "./interfaces/IupdateSavedRent";

class RentRepository
  implements
    IdeleteSavedRent,
    IfindRentById,
    IgetAllSavedRents,
    IsaveRent,
    IupdateSavedRent
{
  async saveOnDB(rent: object) {
    return { ...rent };
  }
  async getAllOnDB() {
    return [{}];
  }
  async findByIdOnDB(id: string) {
    return {};
  }
  async updateOnDB(rent: object) {
    return {};
  }
  async deleteOnDB(id: string) {
    return {};
  }
}

export { RentRepository };
