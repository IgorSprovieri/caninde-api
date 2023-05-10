import { object, string, number, date, InferType } from "yup";
import { IuserRequestsValidator } from "./interfaces";

class UserRequestsValidator implements IuserRequestsValidator {
  async loginRequest(body: any) {
    const schema = object({
      cnpj: string().required(),
      password: string().required(),
    });

    return await schema.validate(body);
  }

  async postUserRequest(body: any) {
    const schema = object({
      name: string().required(),
      cnpj: string().required(),
      password: string().required(),
    });

    return await schema.validate(body);
  }
}

export { UserRequestsValidator };
