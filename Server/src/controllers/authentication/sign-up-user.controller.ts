import { Request, Response } from "express";
import { UserModel } from "../../models";
import { verifyUserEmail } from "../../utils/mail-utils";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signUpController = async (req: Request, res: Response) => {
  try {
    const { email, password, isVerified } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await UserModel.create({
      email,
      password: hashedPassword,
      isVerified: false,
    });

    const token = jwt.sign({ userId: newUser._id }, "hello", {
      expiresIn: "2h",
    });

    await verifyUserEmail(
      email,
      `${process.env.TEST_API}/authentication/verify-user?token=${token}`,
    );

    res
      .status(200)
      .send({ message: "sent verify link to your email", data: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "error creating user", error: error });
  }
};
