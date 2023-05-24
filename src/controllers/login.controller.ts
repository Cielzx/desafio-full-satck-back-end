import { Request, Response } from "express";
import createTokenService from "../services/login/tokenUser.service";
import iLoginRequest from "../interfaces/login.inteface";

const TokenController = async (req: Request, res: Response) => {
  const data = req.body;
  const token = await createTokenService(data);

  return res.json({ token });
};

export default TokenController;
