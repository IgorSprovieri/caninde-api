import { RentEntity } from "../../entities/rentEntity";
import { appDataSource } from "../../../db/dataSource";
import { rents } from "../../../db/models/rents";
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
  async saveOnDB(rent: RentEntity) {
    const rentCreated = await rentRepository.create(rent);
    return await rentRepository.save(rentCreated);
  }

  async getAllOnDB(userId: string) {
    return await rentRepository.findBy({ userId: userId });
  }

  async findByIdOnDB(id: string) {
    return await rentRepository.findOneBy({ id: id });
  }

  async updateOnDB(rent: RentEntity) {
    const result = await rentRepository.update(rent.id, { ...rent });
    if (!result) {
      return;
    }

    return rent;
  }

  async deleteOnDB(rent: RentEntity) {
    const result = await rentRepository.delete({ id: rent.id });
    if (!result) {
      return;
    }

    return rent;
  }
}

export { RentRepository };
