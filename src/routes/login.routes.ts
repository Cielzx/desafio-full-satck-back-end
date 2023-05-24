import { Router } from "express";
import TokenController from "../controllers/login.controller";

const loginRoutes = Router();

loginRoutes.post("", TokenController);

export default loginRoutes;
