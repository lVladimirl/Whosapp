import { IUser } from "../users";

export interface IContact {
  id: string;
  nome: string;
  email: string;
  senha: string;
  criadoEm: Date;
  user: IUser
}

export interface IContactRequest {
  nome: string;
  email: string[];
  telefone: string[];
}
export interface IContactCreate {
    nome: string;
    email: string[];
    telefone: string[];
    id: string;
  }
