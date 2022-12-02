import { Router } from "express";
import { userCreateController } from "../../controllers/users/userCreate.controller";
import { userListController } from "../../controllers/users/userList.controller";
import { authTokenMiddleware } from "../../middlewares/authToken.middleware";
import { schemaValidationMiddleware } from "../../middlewares/schemaValidation.middleware";
import { newUserSchema } from "../../schemas/newUser.schema";

const user = Router();

export const userRoutes = () => {
  
  user.post("", schemaValidationMiddleware(newUserSchema), userCreateController);
  user.get("", authTokenMiddleware, userListController);

  return user;
};
