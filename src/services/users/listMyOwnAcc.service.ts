import AppDataSource from "../../data-source";
import User from "../../entities/user.entities";
import { AppError } from "../../errors/AppError";
import {
  iReturnUsers,
  iUser,
  iUserResponse,
} from "../../interfaces/user.interface";
import { returnUsers, userSchemaResponse } from "../../schemas/user.schema";

const listMyOwnAccService = async (userId: string): Promise<iReturnUsers> => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.find({
    where: {
      id: userId,
    },
    relations: ["contacts"],
  });

  if (!findUser) {
    throw new AppError("User not found", 404);
  }

  return returnUsers.parse(findUser);
};

export default listMyOwnAccService;
