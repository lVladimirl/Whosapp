import { Router } from "express";
import { contactCreateController } from "../../controllers/contacts/contactCreate.controller";
import { contactListController } from "../../controllers/contacts/contactList.controller";
import { authTokenMiddleware } from "../../middlewares/authToken.middleware";
import { schemaValidationMiddleware } from "../../middlewares/schemaValidation.middleware";
import { newContactSchema } from "../../schemas/newContact.schema";

const contact = Router();

export const contactRoutes = () => {
  contact.post(
    "/:id",
    authTokenMiddleware,
    schemaValidationMiddleware(newContactSchema),
    contactCreateController
  );
  contact.get(
    "",
    authTokenMiddleware,
    contactListController
  );

  return contact;
};
