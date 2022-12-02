import { Request, Response } from "express";
import { contactListService } from "../../services/contacts/listContact.service"

export const contactListController = async (req: Request, res: Response) =>{
    const contacts = await contactListService()

    return res.json(contacts)
}