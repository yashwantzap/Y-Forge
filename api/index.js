import dotenv from 'dotenv';
dotenv.config();

import nodemailer from "nodemailer";
import express from "express";
import cors from "cors";

const app = express();

// Middleware - CORS first
app.use(cors({
  origin: [
    'http://localhost:8080',
    'http://localhost:5173',
    'https://yashco.onrender.com',  // Add your frontend URL
    'https://*.onrender.com'  // Allow all Render domains
  ],
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));


// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Create transporter with error handling
let transporter;
try {
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT, 10),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false
    }
  });
  console.log('✅ SMTP transporter created successfully');
} catch (error) {
  console.error('❌ Failed to create SMTP transporter:', error);
}

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'API is running',
    timestamp: new Date().toISOString(),
    env: {
      hasSmtpHost: !!process.env.SMTP_HOST,
      hasSmtpUser: !!process.env.SMTP_USER,
      hasSmtpPass: !!process.env.SMTP_PASS,
      hasNotificationEmail: !!process.env.NOTIFICATION_EMAIL
    }
  });
});

// Test endpoint
app.get('/api/test', (req, res) => {
  res.json({ message: 'API endpoint is working' });
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  console.log('📧 Received contact form submission');
  console.log('Request body:', req.body);

  try {
    const { name, email, phone, company, serviceType, message } = req.body;

    // Validation
    if (!name || !email || !phone || !message) {
      console.log('❌ Validation failed');
      return res.status(400).json({ 
        success: false,
        error: "Name, email, phone and message are required" 
      });
    }

    // Check if transporter is available
    if (!transporter) {
      console.log('❌ SMTP transporter not initialized');
      return res.status(500).json({
        success: false,
        error: "Email service not configured properly"
      });
    }

    console.log('✅ Validation passed, preparing email...');

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
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Name:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Phone:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Company:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${company || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Service Type:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${serviceType || "N/A"}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-radius: 5px;">
            <strong>Message:</strong>
            <p style="margin-top: 10px; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    };

    console.log('📤 Sending email to:', process.env.NOTIFICATION_EMAIL);
    
    const info = await transporter.sendMail(mailOptions);
    
    console.log('✅ Email sent successfully:', info.messageId);

    return res.status(200).json({ 
      success: true, 
      message: "Email notification sent successfully",
      messageId: info.messageId
    });

  } catch (error) {
    console.error("❌ Email sending error:", error);
    return res.status(500).json({ 
      success: false, 
      error: "Failed to send email notification",
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// 404 handler
app.use((req, res) => {
  console.log(`❌ 404 - Route not found: ${req.method} ${req.path}`);
  res.status(404).json({ 
    error: 'Route not found',
    path: req.path,
    method: req.method
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('❌ Server error:', err);
  res.status(500).json({ 
    error: 'Internal Server Error',
    details: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`
╔════════════════════════════════════════╗
║   🚀 API Server Running                ║
║   Port: ${PORT}                       ║
║   Time: ${new Date().toISOString()}   ║
╚════════════════════════════════════════╝
  `);
  
  console.log('Environment Check:');
  console.log('✓ SMTP_HOST:', process.env.SMTP_HOST || '❌ Missing');
  console.log('✓ SMTP_PORT:', process.env.SMTP_PORT || '❌ Missing');
  console.log('✓ SMTP_USER:', process.env.SMTP_USER ? '✓ Set' : '❌ Missing');
  console.log('✓ SMTP_PASS:', process.env.SMTP_PASS ? '✓ Set' : '❌ Missing');
  console.log('✓ NOTIFICATION_EMAIL:', process.env.NOTIFICATION_EMAIL || '❌ Missing');
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('👋 SIGTERM received, shutting down gracefully');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('👋 SIGINT received, shutting down gracefully');
  process.exit(0);
});
