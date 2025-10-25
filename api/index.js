import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import cors from "cors";
import { Resend } from 'resend';

const app = express();

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Middleware - CORS
app.use(cors({
  origin: '*',
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

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'API is running',
    timestamp: new Date().toISOString(),
    env: {
      hasResendApiKey: !!process.env.RESEND_API_KEY,
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

    // Check if Resend is configured
    if (!process.env.RESEND_API_KEY) {
      console.log('❌ Resend API key not configured');
      return res.status(500).json({
        success: false,
        error: "Email service not configured"
      });
    }

    console.log('✅ Validation passed, preparing email...');

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Default Resend email
      to: [process.env.NOTIFICATION_EMAIL],
      subject: `New Contact Form Submission - ${serviceType || 'General Inquiry'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr style="background-color: #f8f9fa;">
              <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold; width: 40%;">Name</td>
              <td style="padding: 12px; border: 1px solid #dee2e6;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold;">Email</td>
              <td style="padding: 12px; border: 1px solid #dee2e6;">
                <a href="mailto:${email}" style="color: #007bff; text-decoration: none;">${email}</a>
              </td>
            </tr>
            <tr style="background-color: #f8f9fa;">
              <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold;">Phone</td>
              <td style="padding: 12px; border: 1px solid #dee2e6;">
                <a href="tel:${phone}" style="color: #007bff; text-decoration: none;">${phone}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold;">Company</td>
              <td style="padding: 12px; border: 1px solid #dee2e6;">${company || "N/A"}</td>
            </tr>
            <tr style="background-color: #f8f9fa;">
              <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold;">Service Type</td>
              <td style="padding: 12px; border: 1px solid #dee2e6;">${serviceType || "N/A"}</td>
            </tr>
          </table>
          
          <div style="margin-top: 30px; padding: 20px; background-color: #f8f9fa; border-left: 4px solid #007bff; border-radius: 4px;">
            <h3 style="margin-top: 0; color: #333;">Message:</h3>
            <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6; text-align: center; color: #6c757d; font-size: 12px;">
            <p>This email was sent from your website contact form</p>
            <p>Received: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('❌ Resend error:', error);
      return res.status(500).json({ 
        success: false, 
        error: "Failed to send email",
        details: error.message 
      });
    }

    console.log('✅ Email sent successfully via Resend:', data.id);

    return res.status(200).json({ 
      success: true, 
      message: "Email notification sent successfully",
      emailId: data.id
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
  console.log('✓ RESEND_API_KEY:', process.env.RESEND_API_KEY ? '✓ Set' : '❌ Missing');
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
