import * as yup from "yup"
import { SchemaOf } from "yup"
import { IContactRequest } from "../interfaces/contacts"

export const newContactSchema: SchemaOf<IContactRequest> = yup.object().shape({
  nome: yup.string().required(),
  email: yup.array().required(),
  telefone: yup.array().required(),
})
