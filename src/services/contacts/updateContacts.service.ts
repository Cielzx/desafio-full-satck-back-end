import AppDataSource from "../../data-source";
import Contact from "../../entities/contacts.entities";
import { AppError } from "../../errors/AppError";
import {
  iContactRequest,
  iContactResponse,
  iContactUpdate,
} from "../../interfaces/contacts.interface";
import { contactSchemaResponse } from "../../schemas/contacts.schema";

const updateContactService = async (
  userId: string,
  newData: iContactUpdate
): Promise<iContactResponse> => {
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

  return contactSchemaResponse.parse(newContactData);
};

export default updateContactService;
