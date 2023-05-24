import AppDataSource from "../../data-source";
import User from "../../entities/user.entities";
import { iReturnUsers } from "../../interfaces/user.interface";
import { returnUsers } from "../../schemas/user.schema";

const listUserService = async (): Promise<iReturnUsers> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.find({ relations: ["contacts"] });

  return returnUsers.parse(user);
};

export default listUserService;
