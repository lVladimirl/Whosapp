import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { userCreateService } from "../../services/users/userCreate.service"

export const userCreateController = async (req: Request, res: Response) =>{
    const {nome, email, senha, categoria} = req.body

    const createdUser = await userCreateService({nome, email, senha})
    
    if (createdUser == "email error"){
        return res.status(400).json({message:"Email is already registered!"})
    }

    return res.status(201).json(instanceToPlain(createdUser))
}