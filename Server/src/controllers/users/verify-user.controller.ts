import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { UserModel } from "../../models";

export const verifyUser = async (req: Request, res: Response) => {
  try {
    const token = req.query.token as string;

    const decoded = jwt.verify(token, "hello") as { userId: string };

    const user = await UserModel.findByIdAndUpdate(
      decoded.userId,
      { isVerified: true },
      { new: true },
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "Email verified successfully" });
  } catch (err) {
    res.status(400).json({ message: "Invalid or expired token" });
  }
};
