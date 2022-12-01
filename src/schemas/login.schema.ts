import * as yup from "yup"
import { SchemaOf } from "yup"
import { IUserLogin } from "../interfaces/users"

export const loginUserSchema: SchemaOf<IUserLogin> = yup.object().shape({
  nome: yup.string().required(),
  senha: yup.string().required().min(6, "A senha deve ter no mínimo 6 caracteres!"),
})
