import * as yup from "yup"
import { SchemaOf } from "yup"
import { IUserRequest } from "../interfaces/users"

export const newUserSchema: SchemaOf<IUserRequest> = yup.object().shape({
  nome: yup.string().required(),
  email: yup.array().required(),
  telefone: yup.array().required(),
  senha: yup.string().required().min(6, "A senha deve conter no mínimo 6 caracteres!"),
})
