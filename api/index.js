import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT, 10),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

app.post("/api/contact", async (req, res) => {
  const { name, email, phone, company, serviceType, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: "Name, email, phone and message are required" });
  }

  const mailOptions = {
    from: `"Contact Form" <${process.env.SMTP_USER}>`,
    to: process.env.NOTIFICATION_EMAIL,
    subject: "New Contact Form Submission",
    text: `
Name: ${name}
Email: ${email}
Phone Number: ${phone}
Service Type: ${serviceType}
Company: ${company || "N/A"}
Message:
${message}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Email sending error:", error);
      return res.status(500).json({ error: "Failed to send email notification" });
    }
    res.status(200).json({ message: "Email notification sent", info });
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
