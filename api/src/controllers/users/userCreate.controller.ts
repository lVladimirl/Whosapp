import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/AppError";
import { userCreateService } from "../../services/users/userCreate.service";

export const userCreateController = async (req: Request, res: Response) => {
  try {
    const { nome, email, senha, telefone} = req.body;

    const createdUser = await userCreateService({ nome, email, senha, telefone});

    return res.status(201).json(instanceToPlain(createdUser));
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};
