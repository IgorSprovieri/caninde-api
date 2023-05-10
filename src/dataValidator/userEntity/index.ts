import { object, string, number, date, InferType } from "yup";
import { IuserEntityValidator } from "./interface";

class UserEntityValidator implements IuserEntityValidator {
  async validateData(data: any) {
    const schema = object({
      id: string(),
      name: string().required(),
      cnpj: string()
        .required()
        .matches(/^\d{14}$/),
      password: string().required(),
    });

    return await schema.validate(data);
  }
}

export { UserEntityValidator };
