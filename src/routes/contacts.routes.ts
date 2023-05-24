import { Router } from "express";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureData from "../middlewares/ensureData.middleware";
import {
  contactSchema,
  contactSchemaRequest,
  contactSchemaResponse,
} from "../schemas/contacts.schema";
import {
  contactsController,
  listContactController,
} from "../controllers/contact.controller";

const contacRoutes = Router();

contacRoutes.post(
  "",
  ensureAuthMiddleware,
  ensureData(contactSchemaResponse),
  contactsController
);

contacRoutes.get("", listContactController);
export default contacRoutes;
