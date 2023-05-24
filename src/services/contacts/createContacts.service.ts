import { Repository } from "typeorm";
import {
  iContactRequest,
  iContactResponse,
} from "../../interfaces/contacts.interface";
import Contact from "../../entities/contacts.entities";
import AppDataSource from "../../data-source";
import User from "../../entities/user.entities";
import { AppError } from "../../errors/AppError";
import { contactSchema } from "../../schemas/contacts.schema";

const createContactService = async (
  data: iContactRequest,
  userId: string
): Promise<iContactResponse> => {
  const contactsRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOneBy({
    id: userId,
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  const contact: Contact = contactsRepository.create({
    ...data,
    user,
  });

  await contactsRepository.save(contact);

  return contactSchema.parse(contact);
};

export default createContactService;
