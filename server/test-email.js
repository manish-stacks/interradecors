require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

async function test() {
  try {
    console.log("Testing SMTP...");

    await transporter.verify();

    console.log("✅ SMTP connection successful");

    const info = await transporter.sendMail({
      from: `"Interra Decors Test" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL_RECEIVER,
      subject: "SMTP Test - Interra Decors",
      text: "This is a test email.",
    });

    console.log("✅ EMAIL SENT");
    console.log(info.messageId);

  } catch (error) {
    console.error("❌ SMTP TEST FAILED");
    console.error("Message:", error.message);
    console.error("Code:", error.code);
    console.error("Command:", error.command);
    console.error("Response:", error.response);
    console.error("Response Code:", error.responseCode);
  }
}

test();