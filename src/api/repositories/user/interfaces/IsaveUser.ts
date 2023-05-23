import { UserEntity } from "../../../entities/userEntity";

interface IsaveUser {
  saveOnDB: (user: UserEntity) => Promise<any>;
}

export { IsaveUser };
