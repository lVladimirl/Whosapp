import { instanceToPlain } from "class-transformer"
import {AppDataSource} from "../../data-source"
import { Contact } from "../../entities/contact.entity"

export const contactListService = () =>{
    const contactRep = AppDataSource.getRepository(Contact)

    const contacts = contactRep.find()

    return instanceToPlain(contacts)
}