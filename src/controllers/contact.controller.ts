import { Request, Response } from "express";
import { iContactRequest } from "../interfaces/contacts.interface";
import createContactService from "../services/contacts/createContacts.service";
import listContactsService from "../services/contacts/listContacts.service";

const contactsController = async (req: Request, res: Response) => {
  const data: iContactRequest = req.body;

  const userId = res.locals.userId;

  const contact = await createContactService(data, userId);

  return res.status(201).json(contact);
};

const listContactController = async (req: Request, res: Response) => {
  const contacts = await listContactsService();

  return res.status(200).json(contacts);
};

export { contactsController, listContactController };
