import { z } from "zod";
import {
  returnUsers,
  userSchema,
  userSchemaRequest,
  userSchemaResponse,
} from "../schemas/user.schema";
import { DeepPartial } from "typeorm";

type iUser = z.infer<typeof userSchema>;

type iUserRequest = z.infer<typeof userSchemaRequest>;

type iUserResponse = z.infer<typeof userSchemaResponse>;

type iReturnUsers = z.infer<typeof returnUsers>;

type iUserUpdate = DeepPartial<iUserRequest>;

export { iUser, iUserRequest, iUserResponse, iReturnUsers, iUserUpdate };
