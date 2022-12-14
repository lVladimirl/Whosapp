export interface IUser {
    id: string
    nome: string
    email: string
    senha: string
    criadoEm: Date
  }
  
  export interface IUserRequest {
    nome: string
    email: string[]
    telefone: string[]
    senha: string
  }
  
  export interface IUserLogin {
    nome: string
    senha: string
  }
  
  export interface IUserUpdate {
    nome?: string
    email?: string
    senha?: string
  }
  
  export interface IUserChart{
    id: string
    nome: string
  }