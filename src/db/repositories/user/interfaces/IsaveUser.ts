import { UserEntity } from "../../../../api/entities/userEntity";

interface IsaveUser {
  saveOnDB: (user: UserEntity) => Promise<any>;
}

export { IsaveUser };
