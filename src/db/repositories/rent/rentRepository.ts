import { appDataSource } from "../../dataSource";
import { rents } from "../../models/rents";
import { IdeleteSavedRent } from "./interfaces/IdeleteSavedRent";
import { IfindRentById } from "./interfaces/IfindRentById";
import { IgetAllSavedRents } from "./interfaces/IgetAllSavedRents";
import { IsaveRent } from "./interfaces/IsaveRent";
import { IupdateSavedRent } from "./interfaces/IupdateSavedRent";

const rentRepository = appDataSource.getRepository(rents);

class RentRepository
  implements
    IdeleteSavedRent,
    IfindRentById,
    IgetAllSavedRents,
    IsaveRent,
    IupdateSavedRent
{
  async saveOnDB(rent: any) {
    const rentCreated = await rentRepository.create({ ...rent });
    return await rentRepository.save(rentCreated);
  }

  async getAllOnDB() {
    return await rentRepository.find();
  }

  async findByIdOnDB(id: string) {
    return await rentRepository.findOneBy({ id: id });
  }

  async updateOnDB(rent: any) {
    const result = await rentRepository.update(rent.id, rent);
    if (!result) {
      return;
    }

    return rent;
  }

  async deleteOnDB(rent: any) {
    const result = await rentRepository.delete({ id: rent.id });
    if (!result) {
      return;
    }

    return rent;
  }
}

export { RentRepository };
