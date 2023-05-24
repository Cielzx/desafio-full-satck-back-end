import { Request, Response, NextFunction } from "express";
import User from "../entities/user.entities";
import AppDataSource from "../data-source";

// const ensureIsOwner = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const userRepository = AppDataSource.getRepository(User);
//   const findUser = await userRepository.findOne(
//     where:{

//     }
//   )
// };
