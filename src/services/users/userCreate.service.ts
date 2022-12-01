import { hash } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { IUserRequest } from "../../interfaces/users";

export const userCreateService = async ({
  nome,
  email,
  senha,
  telefone
}: IUserRequest) => {
  const userRepository = AppDataSource.getRepository(User);

  const userList = await userRepository.find();

  const existingEmails: string[] = [];
  const existingTelefones: string[] = [];

  userList.forEach((elem) => {
    for (let j = 0; j < elem.email.length; j++) {
      for (let n = 0; n < email.length; n++) {
        if (elem.email[j] == email[n]) {
          existingEmails.push(elem.email[j]);
        }
      }
    }
  });
  userList.forEach((elem) => {
    for (let j = 0; j < elem.telefone.length; j++) {
      for (let n = 0; n < telefone.length; n++) {
        if (elem.telefone[j] == telefone[n]) {
          existingTelefones.push(elem.telefone[j]);
        }
      }
    }
  });
  if (existingEmails.length > 0) {
    throw new AppError("Email already exists", 409);
  }else if(existingTelefones.length>0){
    throw new AppError("telefone already exists", 409);
  }

  const hashedPassword = await hash(senha, 10);

  const user = userRepository.create({
    nome,
    email,
    telefone,
    senha: hashedPassword,
    criadoEm: new Date(),
  });

  await userRepository.save(user);

  return user;
};
