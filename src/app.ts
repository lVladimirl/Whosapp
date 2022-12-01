import express from "express";
import { Request, Response, NextFunction } from "express";
import { userRoutes } from "./routes/useres";
// import { handleErrorMiddleware } from "./middlewares/handleError.middleware";
import { AppError } from "./errors/AppError";

const app = express();

app.use(express.json());

app.use("/users", userRoutes());

// app.use(handleErrorMiddleware);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message,
      status: "error",
    });
  }

  console.error(err);

  return response.status(500).json({
    message: "Internal server error",
    status: "error",
  });
});

export default app;
