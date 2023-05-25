import { z } from "zod";

const contactSchema = z.object({
  id: z.string(),
  full_name: z.string(),
  email: z.string().email(),
  telephone: z.string(),
  register_date: z.date(),
});

const contactSchemaRequest = contactSchema.omit({
  id: true,
});

const contactSchemaResponse = contactSchemaRequest.omit({
  register_date: true,
});

const returnContacts = contactSchemaResponse.array();

const contactUpdate = contactSchema.partial();

export {
  contactSchema,
  contactSchemaRequest,
  contactSchemaResponse,
  returnContacts,
  contactUpdate,
};
