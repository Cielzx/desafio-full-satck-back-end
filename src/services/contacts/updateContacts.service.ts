import AppDataSource from "../../data-source";
import Contact from "../../entities/contacts.entities";
import { AppError } from "../../errors/AppError";
import {
  iContact,
  iContactRequest,
  iContactUpdate,
} from "../../interfaces/contacts.interface";
import { contactSchema } from "../../schemas/contacts.schema";

const updateContactService = async (
  userId: string,
  newData: iContactUpdate
): Promise<iContact> => {
  const contactsRepository = AppDataSource.getRepository(Contact);

  const contact = await contactsRepository.findOneBy({
    id: userId,
  });

  if (!contact) {
    throw new AppError("contact not found", 404);
  }

  const newContactData = {
    ...contact,
    ...newData,
  };

  await contactsRepository.save(newContactData);

  return contactSchema.parse(newContactData);
};

export default updateContactService;
