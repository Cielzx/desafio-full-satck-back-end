import { z } from "zod";
import { contactSchemaResponse } from "./contacts.schema";

const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  telephone: z.string(),
  password: z.string(),
  contacts: z.array(contactSchemaResponse),
});

const userSchemaRequest = userSchema.omit({
  id: true,

  contacts: true,
});

const userSchemaResponse = userSchema.omit({
  password: true,
  contacts: true,
});

const returnUsers = userSchema
  .omit({
    password: true,
  })
  .array();

const userUpdate = userSchema.partial();

export {
  userSchema,
  userSchemaRequest,
  userSchemaResponse,
  returnUsers,
  userUpdate,
};
