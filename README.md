# Y - Full-Stack Web Application

A modern full-stack web application built with React (Vite), TypeScript, and Node.js serverless API for handling contact form submissions with email notifications.

## 🚀 Features

- **Modern React Frontend**: Built with Vite, TypeScript, and Tailwind CSS
- **Responsive Design**: Mobile-first design approach
- **Contact Forms**: Multiple contact forms with validation
- **Email Notifications**: Automated email notifications via Nodemailer
- **Serverless API**: Deployed on Vercel with serverless functions
- **Service Selection**: IT Services and CCTV Solutions options

## 📁 Project Structure

```
y/
├── api/                    # Backend serverless functions
│   ├── index.js           # Contact form API endpoint
│   ├── package.json       # API dependencies
│   └── .env              # Environment variables (not committed)
├── frontend/              # React frontend application
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Page components
│   │   └── main.tsx      # Application entry point
│   ├── public/           # Static assets
│   ├── package.json      # Frontend dependencies
│   └── vite.config.ts    # Vite configuration
└── package.json          # Root package.json for monorepo
```

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Reusable component library
- **React Router** - Client-side routing

### Backend
- **Node.js** - JavaScript runtime
- **Vercel Serverless Functions** - API hosting
- **Nodemailer** - Email sending
- **SMTP** - Email protocol (Gmail/custom provider)

## 📋 Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager
- Gmail account or SMTP email service
- Vercel account for deployment

## 🔧 Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/y-forge.git
cd y-forge
```

### 2. Install dependencies

**Frontend:**
```bash
cd frontend
npm install
```

**API:**
```bash
cd ../api
npm install
```

### 3. Environment Variables

Create a `.env` file in the `api` folder:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
NOTIFICATION_EMAIL=your-notification-email@gmail.com
```

**Note:** For Gmail, you need to generate an [App Password](https://support.google.com/accounts/answer/185833).

## 🚀 Running Locally

### Frontend Development Server

```bash
cd frontend
npm run dev
```

The frontend will be available at `http://localhost:5173`

### API Development Server (Optional)

For local testing:

```bash
cd api
npm run dev
```

Or use Vercel CLI for serverless testing:

```bash
npm install -g vercel
vercel dev
```

## 📦 Building for Production

### Frontend Build

```bash
cd frontend
npm run build
```

Build output will be in `frontend/dist/`

## 🌐 Deployment

### Deploy to Vercel

1. **Install Vercel CLI:**
```bash
npm install -g vercel
```

2. **Login to Vercel:**
```bash
vercel login
```

3. **Deploy:**
```bash
vercel
```

Or connect your GitHub repository to Vercel dashboard for automatic deployments.

### Vercel Configuration

**Root Directory:** Leave empty or set to project root
**Framework Preset:** Vite (auto-detected)
**Build Command:** `cd frontend && npm run build`
**Output Directory:** `frontend/dist`

### Environment Variables on Vercel

Add the following environment variables in your Vercel project settings:

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `NOTIFICATION_EMAIL`

## 📧 API Endpoints

### POST `/api/index`

Contact form submission endpoint.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "company": "Example Corp",
  "serviceType": "IT Services",
  "message": "Your message here"
}
```

**Response:**
```json
{
  "message": "Email notification sent"
}
```

**Error Responses:**
- `400` - Missing required fields
- `405` - Method not allowed (only POST)
- `500` - Email sending failed

## 🧪 Testing the API

Using curl:

```bash
curl -X POST https://your-project.vercel.app/api/index \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "1234567890",
    "company": "Test Co",
    "serviceType": "IT Services",
    "message": "Test message"
  }'
```

Using Postman:
1. Create a new POST request
2. URL: `https://your-project.vercel.app/api/index`
3. Headers: `Content-Type: application/json`
4. Body: Raw JSON with required fields

## 🎨 Features Overview

### Contact Forms
- Contact page form with first name, last name split
- Get Started page with full name field
- Phone number validation
- Optional company field
- Service type selection (IT Services / CCTV Solutions)
- Message textarea with validation

### Email Notifications
- Automated email notifications on form submission
- Formatted email with all form details
- Error handling and user feedback
- SMTP configuration support

## 🔒 Security

- Environment variables for sensitive data
- Server-side validation
- CORS handled by Vercel
- No credentials in client-side code
- HTTPS enforced by Vercel

## 🐛 Troubleshooting

### Common Issues

**1. 404 Error on API calls:**
- Verify API file is in `/api` folder at root
- Check API filename matches route (e.g., `index.js` → `/api/index`)
- Ensure deployment includes API folder

**2. Email not sending:**
- Verify SMTP credentials in Vercel environment variables
- Check Gmail App Password is generated correctly
- Review Vercel function logs for errors

**3. Build errors:**
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check Node.js version compatibility
- Verify all dependencies are in package.json

**4. CORS errors:**
- Vercel handles CORS automatically for serverless functions
- Ensure API is deployed on same Vercel project as frontend

## 📝 License

This project is licensed under the MIT License.

## 👤 Author

Yashwant Chowdary

## 🙏 Acknowledgments

- shadcn/ui for component library
- Nodemailer for email functionality
