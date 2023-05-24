import { z } from "zod";
import {
  contactSchema,
  contactSchemaRequest,
  returnContacts,
} from "../schemas/contacts.schema";
import { DeepPartial } from "typeorm";

type iContact = z.infer<typeof contactSchema>;

type iContactRequest = z.infer<typeof contactSchemaRequest>;

type iContactResponse = z.infer<typeof contactSchema>;

type iReturnContacts = z.infer<typeof returnContacts>;

// type iContactUpdate = DeepPartial<iContactRequest>;

export {
  iContact,
  iContactRequest,
  iContactResponse,
  iReturnContacts,
  //   iContactUpdate,
};
