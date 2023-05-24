import AppDataSource from "../../data-source";
import User from "../../entities/user.entities";
import {
  iUser,
  iUserRequest,
  iUserResponse,
} from "../../interfaces/user.interface";
import { hash } from "bcryptjs";
import { userSchema, userSchemaResponse } from "../../schemas/user.schema";
import { AppError } from "../../errors/AppError";

const createUserService = async (
  data: iUserRequest
): Promise<iUserResponse> => {
  let { email, name, telephone, password } = data;
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOne({
    where: {
      email,
    },
  });

  if (findUser) {
    throw new AppError("User already exists!", 409);
  }

  const hashPassword = await hash(password, 10);

  const user = userRepository.create({
    name,
    email,
    telephone,
    password: hashPassword,
  });

  await userRepository.save(user);

  return userSchemaResponse.parse(user);
};

export default createUserService;
