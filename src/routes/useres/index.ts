import { Router } from "express";
import { userCreateController } from "../../controllers/users/userCreate.controller";
import { userListController } from "../../controllers/users/userList.controller";

// import { doctorCreateController } from "../../controllers/medicos/doctorCreate.controller";
// import { doctorDeleteController } from "../../controllers/medicos/doctorDelete.controller";
// import { doctorListController } from "../../controllers/medicos/doctorList.controller";
// import { doctorListOneByIdController } from "../../controllers/medicos/doctorListById.controller";
// import { doctorUpdateController } from "../../controllers/medicos/doctorUpdate.controller";
// import { authTokenMiddleware } from "../../middlewares/authToken.middleware";
// import { isAdmMiddleware } from "../../middlewares/isAdm.middleware";

// import { schemaValidationMiddleware } from "../../middlewares/schemaValidation.middleware";
// import { newDoctorSchema } from "../../schemas/newDoctor.schema";

const user = Router();

export const userRoutes = () => {
  
  user.get("", userListController);
  user.post("", userCreateController);

  return user;
};
