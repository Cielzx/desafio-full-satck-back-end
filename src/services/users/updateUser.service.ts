import AppDataSource from "../../data-source";
import User from "../../entities/user.entities";
import { AppError } from "../../errors/AppError";
import {
  iUser,
  iUserResponse,
  iUserUpdate,
} from "../../interfaces/user.interface";
import {
  userSchema,
  userSchemaResponse,
  userUpdate,
} from "../../schemas/user.schema";

const updateUserService = async (
  userId: any,
  newData: iUserUpdate
): Promise<iUserResponse> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id: userId });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  delete newData.password;

  const updateUser = {
    ...user,
    ...newData,
  };

  await userRepository.save(updateUser);

  return userSchemaResponse.parse(updateUser);
};

export default updateUserService;
