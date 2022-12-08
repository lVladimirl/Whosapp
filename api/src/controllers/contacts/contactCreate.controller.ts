import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/AppError";
import { contactCreateService } from "../../services/contacts/createContact.service";

export const contactCreateController = async (req: Request, res: Response) => {
  try {
    const { nome, email, telefone } = req.body;
    const { id } = req.params;
    const contactAppoint = await contactCreateService({
      nome,
      email,
      telefone,
      id,
    });

    return res.status(201).send(contactAppoint);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};
