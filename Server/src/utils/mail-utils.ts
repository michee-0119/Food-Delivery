import nodemailer from "nodemailer";
import { configDotenv } from "dotenv";

configDotenv();

const { AUTH_EMAIL, AUTH_PASSWORD } = process.env;

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: AUTH_EMAIL,
    pass: AUTH_PASSWORD,
  },
});

export const verifyUserEmail = async (reciever: string, verifyLink: string) => {
  await transport.sendMail({
    from: `"Food Delivery" ${AUTH_EMAIL}`,
    to: reciever,
    subject: "Verify user",
    html: `
        <div
  style="
    width: 300px;
    height: 250px;
    border-radius: 8px;
    background-color: bisque;
  "
>
  <a href="${verifyLink} target="_blank" style="font-size: 18px; color: red">Verify user</a>
</div>
`,
  });
};
