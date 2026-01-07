# The Giving Circle - Backend API

Node.js/Express backend API for The Giving Circle platform with **Nodemailer** email service.

---

## 🚀 Quick Start

### 1. Install Dependencies

```bash
cd server
npm install
```

### 2. Configure Environment Variables

Create `server/.env` file:

```bash
# Server
PORT=3001
NODE_ENV=development

# Email (Gmail)
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password  # Generate at myaccount.google.com/apppasswords
FROM_EMAIL=your-email@gmail.com
RECEIVER_EMAIL=hello@thegivingcircle.in

# Frontend
FRONTEND_URL=http://localhost:5173
```

### 3. Start Server

```bash
# Development
npm run dev

# Production
npm start
```

Server will run on `http://localhost:3001`

---

## 📧 Email Configuration

### Option 1: Gmail (Quick Start)

1. Enable 2FA: https://myaccount.google.com/security
2. Generate App Password: https://myaccount.google.com/apppasswords
3. 

📖 **Detailed guide:** See `GMAIL_SETUP.md`


### Option 3: SendGrid

```bash
EMAIL_SERVICE=sendgrid
SENDGRID_API_KEY=your-api-key
```

---

## 🛠️ API Endpoints

### Health Check
```
GET /health
GET /api/health
```

Response:
```json
{
  "status": "ok",
  "message": "The Giving Circle API is running",
  "timestamp": "2025-01-27T10:30:00.000Z",
  "environment": "development"
}
```

### Cause Champion Form
```
POST /api/submit/cause-champion
```

Body:
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "phoneNumber": "+919876543210",
  "country": "India",
  "city": "Mumbai",
  "selectedCause": "wings-of-hope"
}
```

### NGO Partner Form
```
POST /api/submit/ngo-partner
```

Body:
```json
{
  "organizationName": "Sample NGO",
  "email": "contact@samplengo.org",
  "contactPersonName": "Jane Smith",
  "phoneNumber": "+919876543210"
}
```

---

## 📁 Project Structure

```
server/
├── config/
│   └── email.js           # Email configuration & Nodemailer setup
├── routes/
│   └── forms.js           # Form submission handlers
├── index.js               # Main server file
├── package.json           # Dependencies
├── .env                   # Environment variables (create this)
├── .env.example           # Environment template
├── README.md              # This file
├── GMAIL_SETUP.md         # Gmail configuration guide
└── AWS_DEPLOYMENT.md      # AWS deployment guide
```

---

## 🔧 Environment Variables

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `PORT` | No | 3001 | Server port |
| `NODE_ENV` | No | development | Environment (development/production) |
| `EMAIL_SERVICE` | Yes | gmail | Email provider (gmail/aws-ses/sendgrid/custom) |
| `EMAIL_USER` | Yes | - | Email username |
| `EMAIL_PASSWORD` | Yes | - | Email password / App Password |
| `FROM_EMAIL` | No | EMAIL_USER | Sender email address |
| `RECEIVER_EMAIL` | No | hello@thegivingcircle.in | Recipient email |
| `FRONTEND_URL` | No | - | Frontend URL for CORS |

---

## 🚀 Deployment

### AWS Elastic Beanstalk (Easiest)

```bash
# Install EB CLI
pip install awsebcli

# Initialize
cd server
eb init -p node.js-18 thegivingcircle-backend

# Deploy
eb create thegivingcircle-backend-prod

# Update
eb deploy
```

### AWS EC2

```bash
# SSH to EC2
ssh -i your-key.pem ubuntu@your-ec2-ip

# Clone repo
git clone https://github.com/SMARTBREW/thegivingcircle.git
cd thegivingcircle/server

# Install dependencies
npm install

# Setup environment
nano .env  # Add your config

# Install PM2
sudo npm install -g pm2

# Start app
pm2 start index.js --name thegivingcircle-backend
pm2 save
pm2 startup
```

📖 **Detailed guides:** See `AWS_DEPLOYMENT.md`

---

## 🔒 Security Features

- ✅ **Helmet.js** - Security headers
- ✅ **CORS** - Cross-origin protection
- ✅ **Rate Limiting** - Prevent abuse (100 req/15min, 5 forms/hour)
- ✅ **Input Validation** - Email & required field checks
- ✅ **Error Handling** - Graceful error responses

---

## 📊 Logging

### Development
```bash
npm run dev
# Uses morgan 'dev' format - colorized, concise
```

### Production
```bash
npm start
# Uses morgan 'combined' format - Apache-style logs
```

### View Logs (PM2)
```bash
pm2 logs thegivingcircle-backend
pm2 monit
```

---

## 🧪 Testing

### Test Health Endpoint

```bash
curl http://localhost:3001/health
```

### Test Form Submission

```bash
curl -X POST http://localhost:3001/api/submit/cause-champion \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Test User",
    "email": "test@example.com",
    "phoneNumber": "+919876543210",
    "country": "India",
    "city": "Mumbai",
    "selectedCause": "wings-of-hope"
  }'
```

---

## 🐛 Troubleshooting

### Server won't start

**Check:**
1. Port 3001 not in use: `lsof -ti:3001`
2. Dependencies installed: `npm install`
3. `.env` file exists with correct values

### Email not sending

**Check:**
1. Email credentials in `.env`
2. Server logs: `npm run dev` (look for ✅ or ❌)
3. Gmail: Using App Password (not regular password)
4. Firewall: Ports 587/465 not blocked

### CORS errors

**Check:**
1. `FRONTEND_URL` in `.env` matches your frontend
2. Frontend URL in CORS whitelist (index.js)

---

## 📦 Dependencies

### Core
- `express` - Web framework
- `nodemailer` - Email sending
- `cors` - CORS middleware
- `dotenv` - Environment variables

### Security
- `helmet` - Security headers
- `express-rate-limit` - Rate limiting

### Utilities
- `morgan` - HTTP logging

### Dev
- `nodemon` - Auto-restart on changes

---

## 🎯 Next Steps

1. ✅ Install dependencies
2. ✅ Configure email (Gmail/AWS SES)
3. ✅ Start server locally
4. ✅ Test form submissions
5. ⏳ Deploy to AWS
6. ⏳ Configure production email
7. ⏳ Setup custom domain
8. ⏳ Monitor with CloudWatch

---

## 📚 Documentation

- [Gmail Setup Guide](./GMAIL_SETUP.md)
- [AWS Deployment Guide](./AWS_DEPLOYMENT.md)

---

## 💬 Support

Having issues? Check:
1. Server logs
2. `.env` configuration
3. Email provider status
4. AWS deployment guide

---

**Made with ❤️ for The Giving Circle**

*Empowering communities through transparent giving*
