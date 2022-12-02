import express from "express";
import { Request, Response, NextFunction } from "express";
import { userRoutes } from "./routes/users";
import { AppError } from "./errors/AppError";
import { loginRoutes } from "./routes/login";
import { contactRoutes } from "./routes/contacts";

const app = express();

app.use(express.json());

app.use("/users", userRoutes());
app.use("/login", loginRoutes());
app.use("/contacts", contactRoutes());

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message,
      status: "error",
    });
  }
  return response.status(500).json({
    message: "Internal server error",
    status: "error",
  });
});

export default app;
