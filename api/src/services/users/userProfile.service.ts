import { instanceToPlain } from "class-transformer";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";

export const userProfileService = (user) => {
  const userRep = AppDataSource.getRepository(User);

  const profile = userRep.findOneBy({
    id: user.id,
  });
  return instanceToPlain(profile);
};
