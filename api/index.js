import nodemailer from "nodemailer";
import express from "express";
import cors from "cors";

const app = express();

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || '*', // Will set this in env vars
  credentials: true
}));
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

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'API is running' });
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, company, serviceType, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: "Name, email, phone and message are required" });
  }

  const mailOptions = {
    from: `"Contact Form" <${process.env.SMTP_USER}>`,
    to: process.env.NOTIFICATION_EMAIL,
    subject: `New Contact Form Submission - ${serviceType || 'General Inquiry'}`,
    text: `
Name: ${name}
Email: ${email}
Phone Number: ${phone}
Service Type: ${serviceType || "N/A"}
Company: ${company || "N/A"}
Message:
${message}
    `,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone Number:</strong> ${phone}</p>
      <p><strong>Service Type:</strong> ${serviceType || "N/A"}</p>
      <p><strong>Company:</strong> ${company || "N/A"}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email notification sent successfully" });
  } catch (error) {
    console.error("Email sending error:", error);
    res.status(500).json({ success: false, error: "Failed to send email notification" });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`API server running on port ${PORT}`);
});
