// server/server.js

const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// =========================
// MIDDLEWARE
// =========================

app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

// =========================
// FORM CONFIGURATION
// =========================

const FORM_CONFIG = {
  contact: {
    subject: "New Contact Form Message",

    recipient:
      process.env.CONTACT_EMAIL_RECEIVER,

    template: (data) => `
      <h2>Contact Form Message</h2>

      <p>
        <strong>Name:</strong>
        ${data.name}
      </p>

      <p>
        <strong>Email:</strong>
        ${data.email}
      </p>

      <p>
        <strong>Phone:</strong>
        ${data.phone || "Not provided"}
      </p>

      <p>
        <strong>Service:</strong>
        ${data.service || "Not specified"}
      </p>

      <p>
        <strong>Message:</strong>
      </p>

      <p>
        ${
          data.message
            ? data.message.replace(/\n/g, "<br>")
            : "No message provided"
        }
      </p>
    `,
  },

  // =========================
  // BOOK MEETING
  // =========================

  book_meeting: {
    subject: "New Meeting Booking Request",

    recipient:
      process.env.BOOK_MEETING_EMAIL ||
      process.env.CONTACT_EMAIL_RECEIVER,

    template: (data) => `
      <h2>Meeting Booking Request</h2>

      <p>
        <strong>Name:</strong>
        ${data.name}
      </p>

      <p>
        <strong>Email:</strong>
        ${data.email}
      </p>

      <p>
        <strong>Phone:</strong>
        ${data.phone || "Not provided"}
      </p>

      <p>
        <strong>Purpose:</strong>
        ${data.purpose || "Not specified"}
      </p>

      ${
        data.message
          ? `
            <p>
              <strong>Message:</strong><br>
              ${data.message.replace(/\n/g, "<br>")}
            </p>
          `
          : ""
      }
    `,
  },

  // =========================
  // CTA MEETING
  // =========================

  cta_meeting: {
    subject: "CTA – New Meeting Booking",

    recipient:
      process.env.CTA_MEETING_EMAIL ||
      process.env.CONTACT_EMAIL_RECEIVER,

    template: (data) => `
      <h2>Call-to-Action Meeting Request</h2>

      <p>
        <strong>Name:</strong>
        ${data.name}
      </p>

      <p>
        <strong>Email:</strong>
        ${data.email}
      </p>

      <p>
        <strong>Phone:</strong>
        ${data.phone || "Not provided"}
      </p>

      <p>
        <strong>Meeting Purpose:</strong>
        ${data.purpose || "Not specified"}
      </p>

      <p>
        <em>
          Submitted via the CTA modal on the homepage.
        </em>
      </p>
    `,
  },

  // =========================
  // CTA CATALOGUE
  // =========================

  cta_catalogue: {
    subject: "CTA – Catalogue Request",

    recipient:
      process.env.CTA_CATALOGUE_EMAIL ||
      process.env.CONTACT_EMAIL_RECEIVER,

    template: (data) => `
      <h2>Catalogue Request</h2>

      <p>
        <strong>Name:</strong>
        ${data.name}
      </p>

      <p>
        <strong>Email:</strong>
        ${data.email}
      </p>

      <p>
        <strong>Phone:</strong>
        ${data.phone || "Not provided"}
      </p>

      <p>
        <strong>Catalogue Type:</strong>
        ${data.purpose || "Not specified"}
      </p>

      <p>
        <em>
          Submitted via the CTA modal on the homepage.
        </em>
      </p>
    `,
  },
};

// =========================
// SMTP TRANSPORTER
// =========================
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error("❌ SMTP ERROR:");
    console.error(error);
  } else {
    console.log("✅ SMTP SERVER READY");
  }
});

// =========================
// SMTP TEST
// =========================

transporter.verify((error, success) => {
  if (error) {
    console.error("====================================");
    console.error("❌ SMTP CONNECTION FAILED");
    console.error("Message:", error.message);
    console.error("Code:", error.code);
    console.error("Response:", error.response);
    console.error("Response Code:", error.responseCode);
    console.error("====================================");
  } else {
    console.log("====================================");
    console.log("✅ SMTP SERVER READY");
    console.log("SMTP Host:", process.env.SMTP_HOST);
    console.log("SMTP Port:", process.env.SMTP_PORT);
    console.log("SMTP User:", process.env.SMTP_USER);
    console.log("====================================");
  }
});

// =========================
// SEND EMAIL API
// =========================

app.post("/api/send-email", async (req, res) => {
  const {
    formType,
    name,
    email,
    phone,
    purpose,
    service,
    message,
  } = req.body;

  console.log("------------------------------------");
  console.log("📩 New Email Request");
  console.log("Form Type:", formType);
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Phone:", phone);
  console.log("Purpose:", purpose);
  console.log("Service:", service);
  console.log("------------------------------------");

  // =========================
  // VALIDATE FORM TYPE
  // =========================

  if (!formType || !FORM_CONFIG[formType]) {
    return res.status(400).json({
      success: false,
      error: "Invalid or missing form type.",
    });
  }

  // =========================
  // VALIDATE REQUIRED FIELDS
  // =========================

  if (!name || !email) {
    return res.status(400).json({
      success: false,
      error: "Name and email are required.",
    });
  }

  // =========================
  // GET FORM CONFIG
  // =========================

  const config = FORM_CONFIG[formType];

  if (!config.recipient) {
    console.error("❌ Email recipient is missing.");

    return res.status(500).json({
      success: false,
      error: "Email recipient is not configured.",
    });
  }

  // =========================
  // CREATE HTML
  // =========================

  const html = config.template({
    name,
    email,
    phone,
    purpose,
    service,
    message,
  });

  // =========================
  // SEND EMAIL
  // =========================

  try {
    const mailOptions = {
      from: `"Interra Decors Website" <${process.env.SMTP_USER}>`,

      to: config.recipient,

      replyTo: email,

      subject: config.subject,

      html,
    };

    console.log("📤 Sending email...");
    console.log("From:", process.env.SMTP_USER);
    console.log("To:", config.recipient);

    const info = await transporter.sendMail(mailOptions);

    console.log("====================================");
    console.log("✅ EMAIL SENT SUCCESSFULLY");
    console.log("Message ID:", info.messageId);
    console.log("Response:", info.response);
    console.log("====================================");

    return res.status(200).json({
      success: true,
      message: "Email sent successfully.",
    });
  } catch (error) {
    console.error("====================================");
    console.error("❌ NODEMAILER ERROR");
    console.error("Message:", error.message);
    console.error("Code:", error.code);
    console.error("Command:", error.command);
    console.error("Response:", error.response);
    console.error("Response Code:", error.responseCode);
    console.error("====================================");

    return res.status(500).json({
      success: false,
      error: error.message || "Failed to send email.",
    });
  }
});

// =========================
// HEALTH CHECK
// =========================

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Interra Decors Email API is running.",
  });
});

// =========================
// START SERVER
// =========================

app.listen(PORT, () => {
  console.log("====================================");
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🌐 http://localhost:${PORT}`);
  console.log("====================================");
});