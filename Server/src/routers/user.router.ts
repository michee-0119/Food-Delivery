import { signUpController } from "../controllers";
import { signInController } from "../controllers";
import { Router } from "express";
import { verifyUser } from "../controllers/authentication/verify-user.controller";
import { resetPasswordRequest } from "../controllers";

export const userRouter = Router();

userRouter.post("/sign-up", signUpController);
userRouter.post("/sign-in", signInController);
userRouter.get("/verify-user", verifyUser);
userRouter.post("/reset-pass-req", resetPasswordRequest);
