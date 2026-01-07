# 🚀 Quick Start Guide
## Get The Giving Circle Backend Running in 5 Minutes

---

## ⚡ Super Fast Setup (Gmail)

### 1. Install Dependencies (30 seconds)

```bash
cd server
npm install
```

### 2. Get Gmail App Password (2 minutes)

1. Go to https://myaccount.google.com/apppasswords
2. Select: **Mail** → **Other** (enter "The Giving Circle")
3. Click **Generate**
4. Copy the 16-character password (like: `abcd efgh ijkl mnop`)

### 3. Create `.env` File (1 minute)

```bash
# Copy the template
cp env-example.txt .env

# Or create manually
nano .env
```

Add this:

```bash
PORT=3001
NODE_ENV=development
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=abcdefghijklmnop
FROM_EMAIL=your-email@gmail.com
RECEIVER_EMAIL=hello@thegivingcircle.in
FRONTEND_URL=http://localhost:5173
```

PORT=3001
NODE_ENV=development
EMAIL_SERVICE=gmail
EMAIL_USER=hello@thegivingcircle.in
EMAIL_PASSWORD=TGC@2026#sbs#
FROM_EMAIL=hello@thegivingcircle.in
RECEIVER_EMAIL=hello@thegivingcircle.in
FRONTEND_URL=http://localhost:5173


💡 **Important:** Remove spaces from the app password!

### 4. Start Server (30 seconds)

```bash
npm run dev
```

You should see:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚀 The Giving Circle Backend API
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📡 Server running on port 3001
🌍 Environment: development
📧 Email service: GMAIL
✅ Email configuration verified successfully
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ Server ready to accept requests
```

### 5. Test It! (30 seconds)

**Open browser:** http://localhost:3001/health

**Or use curl:**

```bash
curl http://localhost:3001/health
```

Should return:

```json
{
  "status": "ok",
  "message": "The Giving Circle API is running",
  "timestamp": "2025-01-27T10:30:00.000Z",
  "environment": "development"
}
```

---

## ✅ You're Done!

Now test form submission:

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

**Check your email** - you should receive a notification! 📧

---

## 🎯 Next Steps

### For Development
1. ✅ Backend running locally
2. Update frontend API URL to `http://localhost:3001/api`
3. Test forms from your website

### For Production
1. Choose deployment: AWS EB / EC2 / Lambda
2. Switch to AWS SES for better limits
3. Deploy using guides in `AWS_DEPLOYMENT.md`

---

## 🐛 Troubleshooting

### ❌ Email not verified?

**Problem:** `❌ Email configuration verification failed`

**Fix:**
- Check EMAIL_USER and EMAIL_PASSWORD in `.env`
- Make sure you're using **App Password**, not regular password
- Remove spaces from app password
- Enable 2FA first: https://myaccount.google.com/security

### ❌ Port already in use?

**Problem:** `Error: listen EADDRINUSE: address already in use :::3001`

**Fix:**
```bash
# Kill process on port 3001
lsof -ti:3001 | xargs kill -9

# Or change PORT in .env
PORT=3002
```

### ❌ Dependencies not installing?

**Fix:**
```bash
# Clear cache
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

---

## 📚 Full Documentation

- **[README.md](./README.md)** - Complete guide
- **[GMAIL_SETUP.md](./GMAIL_SETUP.md)** - Gmail setup
- **[AWS_DEPLOYMENT.md](./AWS_DEPLOYMENT.md)** - AWS deployment
- **[MIGRATION_SUMMARY.md](./MIGRATION_SUMMARY.md)** - What changed

---

## 🆘 Need Help?

1. Check server logs (scroll up in terminal)
2. Verify `.env` file has correct values
3. Make sure port 3001 is available
4. Ensure Node.js version ≥18

---

**That's it! Backend is ready! 🎉**

