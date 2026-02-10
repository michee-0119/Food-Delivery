import { configDotenv } from "dotenv";
import { Resend } from "resend";

configDotenv();

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerifyCodeEmail = async (receiver: string, code: string) => {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: receiver,
    subject: "Your 6-digit verification code",
    html: `
   <div style="max-width:420px; margin:auto; background:#fff; border-radius:8px; padding:24px;">
            <h2 style="margin:0 0 12px 0;">Food Delivery</h2>
            <p>Таны баталгаажуулах код:</p>
            <div style="font-size:32px; font-weight:bold; letter-spacing:6px; margin:16px 0;">
              ${code}
            </div>
            <p style="color:#777; font-size:12px;">
              Энэ код 5 минутын хугацаанд хүчинтэй.
            </p>
          </div>
    `,
  });
};
