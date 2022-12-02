import {AppDataSource} from "../../data-source"
import { User } from "../../entities/user.entity"
import { IUserLogin } from "../../interfaces/users"
import { AppError } from "../../errors/AppError"
import { compare } from "bcryptjs"
import jwt from "jsonwebtoken"

export const createLoginService = async ({
  nome,
  senha,
}: IUserLogin): Promise<string> => {
  const userRep = AppDataSource.getRepository(User)
  const user = await userRep.findOneBy({ nome })

  if (!user) {
    throw new AppError("Email or password invalid!", 401)
  }

  const checkPassword = await compare(senha, user.senha)

  if (!checkPassword) {
    throw new AppError("Invalid credentials", 403)
  }

  const token = jwt.sign(
    {
      id: user.id
    },
    process.env.SECRET_KEY as string,
    {
      subject: user.id,
      expiresIn: "24h",
    }
    
  )

  return token
}
