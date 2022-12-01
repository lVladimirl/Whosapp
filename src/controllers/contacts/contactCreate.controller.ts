import { Request, Response } from "express";
import { contactCreateService } from "../../services/contacts/createContact.service";

export const contactCreateController = async (req: Request, res: Response) => {
  console.log(req.user)

  console.log(req.user)
  const {nome,email,telefone} = req.body
  const {id}= req.params
  const contactAppoint = await contactCreateService({nome,email,telefone,id});

  return res.status(201).send(contactAppoint);
};
