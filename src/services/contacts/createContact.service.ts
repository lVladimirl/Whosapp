import { hash } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { IContactCreate } from "../../interfaces/contacts";

export const contactCreateService = async ({
  nome,
  email,
  telefone,
  id,
}: IContactCreate) => {
  const contactRep = AppDataSource.getRepository(Contact);

  const userRep = AppDataSource.getRepository(User);

  const user = await userRep.findOne({
    where: {
      nome,
    },
  });
  if (user) {
    const contact = contactRep.create({ nome, email, telefone, user });

    await contactRep.save(contact);

    return contact;
  }else {
    throw new AppError("User not found",404)
  }
};
