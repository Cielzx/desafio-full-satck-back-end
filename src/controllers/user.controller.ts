import { Request, Response } from "express";
import createUserService from "../services/users/createUser.service";
import listUserService from "../services/users/listUser.service";
import { iUser, iUserRequest, iUserUpdate } from "../interfaces/user.interface";
import updateUserService from "../services/users/updateUser.service";
import listMyOwnAccService from "../services/users/listMyOwnAcc.service";

const createuserController = async (req: Request, res: Response) => {
  if (typeof req.body.password === "number") {
    req.body.password = req.body.password.toString();
  }
  let data: iUser = req.body;

  console.log(typeof data.password);

  const userRes = await createUserService(data);

  return res.status(201).json(userRes);
};

const listUserController = async (req: Request, res: Response) => {
  const userList = await listUserService();

  return res.status(200).json(userList);
};

const updateUserController = async (req: Request, res: Response) => {
  const userId = req.params.id;

  const data: iUserUpdate = req.body;

  const updatedUser = await updateUserService(userId, data);

  return res.status(200).json(updatedUser);
};

const listOwnAccController = async (req: Request, res: Response) => {
  const userId = res.locals.userId;
  const userFound = await listMyOwnAccService(userId);

  return res.json(userFound);
};

export {
  createuserController,
  listUserController,
  updateUserController,
  listOwnAccController,
};
