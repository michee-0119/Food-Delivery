import { signUpController } from "../controllers";
import { signInUser } from "../controllers";
import { Router } from "express";
import { verifyUser } from "../controllers/users/verify-user.controller";

export const userRouter = Router();

userRouter.post("/users/sign-up", signUpController);
userRouter.post("/users/sign-in", signInUser);
userRouter.post("/verify-user", verifyUser);
// userRouter.post("/users/reset-password-request");
// userRouter.get("/users/verify-reset-password-request");
// userRouter.post("/users/reset-password");
