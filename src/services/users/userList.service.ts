import { instanceToPlain } from "class-transformer"
import {AppDataSource} from "../../data-source"
import { User } from "../../entities/user.entity"

export const userListService = () =>{
    const userRep = AppDataSource.getRepository(User)

    const clients = userRep.find()

    return instanceToPlain(clients)
}