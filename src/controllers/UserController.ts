import User from "@models/User";
import { Request, Response } from "express";

export default {
  async index(req: Request, res: Response) {
    const users = await User.email;

    return res.json(users);
  },
};
