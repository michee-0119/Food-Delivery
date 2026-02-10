import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { UserModel } from "../models";

export const authentication = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const authToken = req.headers.authorization;

    if (!authToken) {
      res.status(400).send({ message: "invalid token" });
      return;
    }

    if (!authToken.startsWith("Bearer")) {
      res.status(400).send({ message: "invalid token" });
      return;
    }

    const token = authToken.split(" ")[1] ?? "";

    const verifiedToken = verify(token, "hello") as { _id: string };

    if (!verifiedToken._id) {
      res.status(400).send({ message: "invalid token" });
      return;
    }

    const userId = verifiedToken._id;

    const existingUser = await UserModel.findById(userId);

    if (!existingUser) {
      res.status(400).send({ message: "invalid token" });
      return;
    }

    req.body.user = existingUser;

    next();
  } catch (error) {
    res.status(500).send({ message: error });
  }
};
