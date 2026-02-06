import { signUpController } from "../controllers";
import { signInUser } from "../controllers";
import { Router } from "express";
import { verifyUser } from "../controllers/authentication/verify-user.controller";

export const userRouter = Router();

userRouter.post("/sign-up", signUpController);
userRouter.post("/sign-in", signInUser);
userRouter.post("/verify-user", verifyUser);
