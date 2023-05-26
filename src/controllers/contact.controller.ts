import { Request, Response } from "express";
import {
  iContactRequest,
  iContactUpdate,
} from "../interfaces/contacts.interface";
import createContactService from "../services/contacts/createContacts.service";
import listContactsService from "../services/contacts/listContacts.service";
import updateContactService from "../services/contacts/updateContacts.service";
import deleteContactService from "../services/contacts/deleteContacts.service";

const createContactsController = async (req: Request, res: Response) => {
  const data: iContactRequest = req.body;

  const userId = res.locals.userId;

  const contact = await createContactService(data, userId);

  return res.status(201).json(contact);
};

const updateContactController = async (req: Request, res: Response) => {
  const userId = req.params.id;

  const newData: iContactUpdate = req.body;

  const updatedContact = await updateContactService(userId, newData);

  return res.status(200).json(updatedContact);
};

const listContactController = async (req: Request, res: Response) => {
  const contacts = await listContactsService();

  return res.status(200).json(contacts);
};

const deleteContactController = async (req: Request, res: Response) => {
  const contactId = req.params.id;

  await deleteContactService(contactId);

  res.status(204).send();
};

export {
  createContactsController,
  listContactController,
  updateContactController,
  deleteContactController,
};
