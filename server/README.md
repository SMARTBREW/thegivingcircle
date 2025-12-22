# Backend Server - Form Submission API

This backend server handles form submissions from The Giving Circle website and sends email notifications using Nodemailer.

## Features

- ✅ Cause Champion Registration Form
- ✅ NGO Partner Registration Form
- ✅ Email notifications with HTML templates
- ✅ Form validation
- ✅ Error handling

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

This will install:
- `express` - Web server framework
- `nodemailer` - Email sending library
- `cors` - Cross-origin resource sharing
- `dotenv` - Environment variable management

### 2. Configure Email Settings

1. Copy the example environment file:
```bash
cp server/env.example server/.env
```

2. Edit `server/.env` and add your email configuration:

```env
# Server Configuration
PORT=3001
NODE_ENV=development

# Email Configuration (Nodemailer)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Receiver Email (where form submissions will be sent)
RECEIVER_EMAIL=hello@thegivingcircle.in
```

### 3. Gmail Setup (If using Gmail)

If you're using Gmail, you need to:

1. **Enable 2-Factor Authentication** on your Google account
2. **Generate an App Password**:
   - Go to [Google Account Settings](https://myaccount.google.com/)
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Use this password in `SMTP_PASS`

### 4. Other Email Providers

For other email providers, update the SMTP settings:

**Outlook/Hotmail:**
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
```

**Yahoo:**
```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_SECURE=false
```

**Custom SMTP:**
```env
SMTP_HOST=your-smtp-server.com
SMTP_PORT=587
SMTP_SECURE=false
```

### 5. Configure Frontend API URL

In your frontend `.env` file (or `vite.config.ts`), set:

```env
VITE_API_URL=http://localhost:3001/api
```

For production, update this to your backend server URL:
```env
VITE_API_URL=https://your-backend-domain.com/api
```

## Running the Server

### Development Mode

```bash
npm run server:dev
```

This uses `nodemon` to auto-restart on file changes.

### Production Mode

```bash
npm run server
```

The server will start on `http://localhost:3001` (or the port specified in `.env`).

## API Endpoints

### Health Check
```
GET /api/health
```

### Submit Cause Champion Form
```
POST /api/submit/cause-champion
Content-Type: application/json

{
  "fullName": "John Doe",
  "email": "john@example.com",
  "phoneNumber": "9876543210",
  "country": "India",
  "city": "Mumbai",
  "selectedCause": "break-barriers-girls-education"
}
```

### Submit NGO Partner Form
```
POST /api/submit/ngo-partner
Content-Type: application/json

{
  "organizationName": "Example NGO",
  "email": "contact@example.org",
  "contactPersonName": "Jane Smith",
  "phoneNumber": "9876543210"
}
```

## Response Format

### Success Response
```json
{
  "success": true,
  "message": "Form submitted successfully! We will contact you soon."
}
```

### Error Response
```json
{
  "success": false,
  "message": "All fields are required"
}
```

## Deployment

### Option 1: Deploy Backend Separately

Deploy the backend to a service like:
- **Heroku**
- **Railway**
- **Render**
- **DigitalOcean**
- **AWS EC2**

Make sure to:
1. Set environment variables in your hosting platform
2. Update `VITE_API_URL` in frontend to point to your backend
3. Configure CORS if needed

### Option 2: Deploy with Frontend (Same Domain)

If deploying backend and frontend on the same domain:
1. Build frontend: `npm run build`
2. Serve backend API from `/api` path
3. Serve frontend static files from root
4. Configure your server to handle both

## Troubleshooting

### Email Not Sending

1. **Check SMTP credentials** - Verify username and password are correct
2. **Check SMTP port** - Some providers use different ports (465 for SSL, 587 for TLS)
3. **Check firewall** - Ensure port 587/465 is not blocked
4. **Check spam folder** - Emails might be going to spam

### CORS Errors

If you see CORS errors, ensure:
1. Backend CORS is enabled (already configured)
2. Frontend `VITE_API_URL` matches backend URL
3. Both are on same domain or CORS is properly configured

### Port Already in Use

If port 3001 is already in use:
1. Change `PORT` in `.env` file
2. Update `VITE_API_URL` in frontend to match

## Security Notes

- ✅ Never commit `.env` file to git
- ✅ Use environment variables for sensitive data
- ✅ Enable HTTPS in production
- ✅ Validate all form inputs (already implemented)
- ✅ Rate limiting recommended for production

## Support

For issues or questions, check:
- [Nodemailer Documentation](https://nodemailer.com/)
- [Express Documentation](https://expressjs.com/)

