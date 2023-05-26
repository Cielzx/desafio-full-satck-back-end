import "reflect-metadata";
import "express-async-errors";
import express from "express";
import cors from "cors";
import usersRoutes from "./routes/users.routes";
import HandleErrorApp from "./middlewares/handleErrorApp.middleware";
import loginRoutes from "./routes/login.routes";
import contacRoutes from "./routes/contacts.routes";
import { setupSwagger } from "./swagger";

const app = express();
app.use(express.json());

app.use(cors());

app.use("/contacts", contacRoutes);

app.use("/login", loginRoutes);

app.use("/users", usersRoutes);

setupSwagger(app);

app.use(HandleErrorApp);

export default app;
