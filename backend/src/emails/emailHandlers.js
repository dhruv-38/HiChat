import { resendClient, sender } from "../lib/resend.js";
import { createWelcomeEmailTemplate } from "../emails/emailTemplates.js";

export const sendWelcomeEmail = async (toEmail, name, clientURL) => {
    const {data,error} = await resendClient.emails.send({
        from: `${sender.name} <${sender.email}>`,
        to: toEmail,
        subject: "Welcome to HiChat!",
        html: createWelcomeEmailTemplate(name, clientURL),
    });
    if (error) {
        console.error("Error sending welcome email:", error);
        throw new Error("Failed to send welcome email");
    }

    console.log("Welcome Email sent successfully", data); 
};