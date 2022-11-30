import { hash } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { IUserRequest } from "../../interfaces/users";

export const userCreateService = async ({
  nome,
  email,
  senha,
}: IUserRequest) => {
  const userRepository = AppDataSource.getRepository(User);

  const userList = await userRepository.find();

  const array: string[] = [];

  userList.forEach((elem) => {
    for (let j = 0; j < elem.email.length; j++) {
      for (let n = 0; n < email.length; n++) {
        if (elem.email[j] == email[n]) {
          array.push(elem.email[j]);
        }
      }
    }
  });
  if (array.length > 0) {
    console.log('b----------------')
    return "email error"
  }

  // const hashedPassword = await hash(senha, 10);

  // const user = userRepository.create({
  //   nome,
  //   email,
  //   telefone: ["a", "b"],
  //   senha: hashedPassword,
  //   criadoEm: new Date(),
  // });

  // await userRepository.save(user);

  // return user;
};
