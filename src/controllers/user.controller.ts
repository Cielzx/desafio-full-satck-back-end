import { Request, Response } from "express";
import createUserService from "../services/users/createUser.service";
import listUserService from "../services/users/listUser.service";
import { iUserRequest, iUserUpdate } from "../interfaces/user.interface";
import updateUserService from "../services/users/updateUser.service";
import listMyOwnAccService from "../services/users/listMyOwnAcc.service";
import deleteUserService from "../services/users/deleteUser.service";

const createuserController = async (req: Request, res: Response) => {
  let data: iUserRequest = req.body;

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

const deleteUserController = async (req: Request, res: Response) => {
  const userId = req.params.id;

  await deleteUserService(userId);

  return res.status(204).send();
};

export {
  createuserController,
  listUserController,
  updateUserController,
  listOwnAccController,
  deleteUserController,
};
