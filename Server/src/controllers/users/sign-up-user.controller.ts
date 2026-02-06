import { Request, Response } from "express";
import { UserModel } from "../../models";
import { verifyUserEmail } from "../../utils/mail-utils";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signUpController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: true,
        message: "This user is found",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await UserModel.create({
      email,
      password: hashedPassword,
    });

    const token = jwt.sign({ email }, process.env.JWT_SECRET!, {
      expiresIn: 600,
    });

    await verifyUserEmail(
      email,
      `${process.env.TEST_API}/users/verify-user?token=${token}`,
    );

    return res.status(201).json({
      success: true,
      message: "Verification email sent",
      data: newUser,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
      error,
    });
  }
};
