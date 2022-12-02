import { Request, Response } from "express";
import { userListService } from "../../services/users/userList.service"

export const userListController = async (req: Request, res: Response) =>{
    const employees = await userListService()

    return res.json(employees)
}