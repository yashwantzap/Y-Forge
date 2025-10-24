import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT, 10),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).end("Method Not Allowed");
  }

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

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email notification sent" });
  } catch (error) {
    console.error("Email sending error:", error);
    res.status(500).json({ error: "Failed to send email notification" });
  }
}
