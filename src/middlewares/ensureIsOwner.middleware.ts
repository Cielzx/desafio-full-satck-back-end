import { Request, Response, NextFunction } from "express";
import User from "../entities/user.entities";
import AppDataSource from "../data-source";
import { AppError } from "../errors/AppError";

const ensureIsOwner = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepository = AppDataSource.getRepository(User);
  const id = req.params.id;
  const userId = res.locals.userId;
  const findUser = await userRepository.findOne({
    where: {
      id,
    },
  });

  if (!findUser) {
    throw new AppError("User not found", 404);
  }

  if (id !== userId) {
    return res.status(403).json({
      message: "You don't have permission to proceed with this action",
    });
  }

  return next();
};

export default ensureIsOwner;
