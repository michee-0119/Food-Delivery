import { Request, Response } from "express";
import { UserModel } from "../../models";
import jwt from "jsonwebtoken";
import { generateSixDigitCode } from "../../utils/code";
import { sendVerifyCodeEmail } from "../../utils/resetPass.mail";

export const resetPasswordRequest = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        message: "Email is required",
      });
    }

    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const resetCode = generateSixDigitCode();

    const token = jwt.sign(
      { userId: user._id, code: resetCode },
      process.env.JWT_SECRET as string,
      { expiresIn: "1h" },
    );

    await sendVerifyCodeEmail(user.email, resetCode);

    return res.status(200).json({
      message: "Sent 6 digit code to your email",
      token,
    });
  } catch (err: any) {
    return res.status(500).json({
      message: "Invalid or expired token",
      error: err?.message,
    });
  }
};
