import express from "express";
import { Request, Response } from "express";
import { userRoutes } from "./routes/useres";
import { handleErrorMiddleware } from "./middlewares/handleError.middleware";

const app = express();

app.use(express.json());

app.use("/users", userRoutes());

app.use(handleErrorMiddleware);

export default app 

