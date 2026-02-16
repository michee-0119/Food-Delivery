import { Request, Response } from "express";
import { UserModel } from "../../models";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Resend } from "resend";

// export const confirmResetPass = async (req: Request, res: Response) => {
//     try {
        
//         console.log()
//     } catch (error) {
        
//     }
// }