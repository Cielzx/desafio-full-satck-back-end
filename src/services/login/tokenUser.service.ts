import { compare } from "bcryptjs";
import AppDataSource from "../../data-source";
import User from "../../entities/user.entities";
import { AppError } from "../../errors/AppError";
import iLoginRequest from "../../interfaces/login.inteface";
import jwt from "jsonwebtoken";
import "dotenv/config";

const createTokenService = async (data: iLoginRequest): Promise<string> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: {
      email: data.email,
    },
  });

  if (!user) {
    throw new AppError("Invalid Credentials", 403);
  }

  const passwordMatch = await compare(data.password, user.password);

  if (!passwordMatch) {
    throw new AppError("Invalid Credentials", 403);
  }

  const token = jwt.sign({ userName: user.name }, process.env.SECRET_KEY!, {
    expiresIn: "1hr",
    subject: user.id,
  });

  return token;
};

export default createTokenService;
