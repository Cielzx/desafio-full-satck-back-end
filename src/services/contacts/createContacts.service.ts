import { Repository } from "typeorm";
import {
  iContact,
  iContactRequest,
  iContactResponse,
} from "../../interfaces/contacts.interface";
import Contact from "../../entities/contacts.entities";
import AppDataSource from "../../data-source";
import User from "../../entities/user.entities";
import { AppError } from "../../errors/AppError";
import {
  contactSchema,
  contactSchemaResponse,
} from "../../schemas/contacts.schema";

const createContactService = async (
  data: iContactRequest,
  userId: string
): Promise<iContact> => {
  const contactsRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOneBy({
    id: userId,
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  const existingContact = await contactsRepository.findOne({
    where: {
      email: data.email,
    },
  });

  if (existingContact) {
    if (existingContact.user === user) {
      return existingContact;
    } else {
      throw new AppError("Contact is already associated to another user");
    }
  }

  const contact: Contact = contactsRepository.create({
    ...data,
    user,
  });

  await contactsRepository.save(contact);

  return contactSchema.parse(contact);
};

export default createContactService;
