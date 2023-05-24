import Contact from "../../entities/contacts.entities";
import AppDataSource from "../../data-source";
import { iReturnContacts } from "../../interfaces/contacts.interface";
import { returnContacts } from "../../schemas/contacts.schema";

const listContactsService = async (): Promise<iReturnContacts> => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const findContacts = await contactRepository.find();

  return returnContacts.parse(findContacts);
};

export default listContactsService;
