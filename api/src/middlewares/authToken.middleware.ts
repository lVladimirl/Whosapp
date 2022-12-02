import { Request, Response, NextFunction } from "express";
import { AppError, handleError } from "../errors/AppError";
import jwt from "jsonwebtoken";

export const authTokenMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let token = req.headers.authorization;

    if (!token) {
      throw new AppError("Token inválido!", 401);
    }

    token = token?.split(" ")[1];

    jwt.verify(
      token,
      process.env.SECRET_KEY as string,
      (error: any, decoded: any) => {
        if (error) {
          throw new AppError("Token inválido", 401);
        }
        req.user = {
          id: decoded.id,
        }
      }
    );
    next(); 
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};
