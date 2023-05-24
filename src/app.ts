import "reflect-metadata";
import "express-async-errors";
import express from "express";
import cors from "cors";
import usersRoutes from "./routes/users.routes";
import HandleErrorApp from "./middlewares/handleErrorApp.middleware";
import loginRoutes from "./routes/login.routes";
import contacRoutes from "./routes/contacts.routes";

const app = express();
app.use(express.json());

app.use(cors());

app.use("/login", loginRoutes);

app.use("/users", usersRoutes);

app.use("/contacts", contacRoutes);

app.use(HandleErrorApp);

export default app;
