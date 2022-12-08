import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/AppError";
import { createLoginService } from "../../services/login/createLogin.service";

export const createLoginController = async (req: Request, res: Response) => {
  try {
    const doctorData = req.body;

    const token = await createLoginService(doctorData);

    return res.json({ token });
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};
