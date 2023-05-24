import { Router } from "express";
import ensureData from "../middlewares/ensureData.middleware";
import { userSchemaRequest, userUpdate } from "../schemas/user.schema";
import {
  createuserController,
  listOwnAccController,
  listUserController,
  updateUserController,
} from "../controllers/user.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";

const userRoutes = Router();

userRoutes.post("", ensureData(userSchemaRequest), createuserController);

userRoutes.get("", listUserController);

userRoutes.get("/acc", ensureAuthMiddleware, listOwnAccController);

userRoutes.patch("/:id", ensureData(userUpdate), updateUserController);

userRoutes.delete("");

export default userRoutes;
