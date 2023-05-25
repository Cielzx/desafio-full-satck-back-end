import { Router } from "express";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureData from "../middlewares/ensureData.middleware";
import { contactSchemaResponse } from "../schemas/contacts.schema";
import {
  createContactsController,
  listContactController,
  updateContactController,
} from "../controllers/contact.controller";

const contacRoutes = Router();

contacRoutes.post(
  "",
  ensureAuthMiddleware,
  ensureData(contactSchemaResponse),
  createContactsController
);

contacRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureData(contactSchemaResponse),
  updateContactController
);

contacRoutes.get("", listContactController);
export default contacRoutes;
