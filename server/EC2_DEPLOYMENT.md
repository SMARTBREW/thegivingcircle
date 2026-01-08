# EC2 Deployment Guide - The Giving Circle Backend
## Production Node.js Backend Deployment (Nginx + PM2)

**Complete step-by-step guide for deploying your backend to AWS EC2.**

---

## Prerequisites

- ✅ AWS EC2 instance (Ubuntu 22.04 LTS)
- ✅ Domain name: `api.thegivingcircle.in` (will configure)
- ✅ SSH access to EC2 instance
- ✅ Backend code in GitHub: `SMARTBREW/thegivingcircle`

---

## Step 1: Launch EC2 Instance

1. Go to AWS Console → EC2
2. Click "Launch Instance"
3. Configure:
   - **Name:** `thegivingcircle-backend`
   - **AMI:** Ubuntu Server 22.04 LTS
   - **Instance type:** t2.micro (free tier)
   - **Key pair:** Create new or select existing (.pem file)
   - **Network settings:**
     - Allow SSH (22) - Your IP only
     - Allow HTTP (80) - Anywhere
     - Allow HTTPS (443) - Anywhere
     - Allow Custom TCP (3001) - Anywhere (for testing)
   - **Storage:** 8 GB (free tier)
4. Click "Launch instance"

**Save your:**
- EC2 Public IP address
- Key pair file (.pem)

---

## Step 2: Connect to EC2

```bash
# On your local machine
# Set permissions for key file
chmod 400 ~/.ssh/thegivingcircle.pem

# Connect to EC2
ssh -i ~/.ssh/thegivingcircle.pem ubuntu@[YOUR-EC2-PUBLIC-IP]
```

---

## Step 3: Update System

```bash
sudo apt update && sudo apt upgrade -y
```

---

## Step 4: Install Node.js 18

```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Verify
node --version  # Should show v18.x.x
npm --version
```

---

## Step 5: Install PM2

```bash
sudo npm install -g pm2
pm2 --version
```

---

## Step 6: Install Nginx

```bash
sudo apt install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx

# Verify
sudo systemctl status nginx
```

---

## Step 7: Configure Firewall

```bash
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
sudo ufw status
```

---

## Step 8: Deploy Application Code

### Create App Directory

```bash
sudo mkdir -p /var/www/thegivingcircle-backend
sudo chown -R $USER:$USER /var/www/thegivingcircle-backend
cd /var/www/thegivingcircle-backend
```

### Clone Repository

```bash
git clone https://github.com/SMARTBREW/thegivingcircle.git .
cd server
```

---

## Step 9: Install Dependencies

```bash
npm install --production
```

---

## Step 10: Create Environment Variables

```bash
nano .env
```

Add this (use your actual values):

```env
NODE_ENV=production
PORT=3001
EMAIL_SERVICE=gmail
EMAIL_USER=hello@thegivingcircle.in
EMAIL_PASSWORD=zjablnqzgqwqilmt
FROM_EMAIL=hello@thegivingcircle.in
RECEIVER_EMAIL=hello@thegivingcircle.in
FRONTEND_URL=https://www.thegivingcircle.in
```

Save: `Ctrl+X`, `Y`, `Enter`

---

## Step 11: Create Logs Directory

```bash
mkdir -p logs
```

---

## Step 12: Start App with PM2

```bash
# Start the app
pm2 start ecosystem.config.js --env production

# Save PM2 configuration
pm2 save

# Setup PM2 to start on boot
pm2 startup
# Run the command that PM2 outputs (usually something like:
# sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u ubuntu --hp /home/ubuntu)

# Verify
pm2 status
pm2 logs thegivingcircle-backend
```

---

## Step 13: Configure Nginx Reverse Proxy

Create Nginx config:

```bash
sudo nano /etc/nginx/sites-available/thegivingcircle-backend
```

Paste this:

```nginx
server {
    listen 80;
    server_name api.thegivingcircle.in;

    server_tokens off;

    location / {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Save: `Ctrl+X`, `Y`, `Enter`

Enable site:

```bash
sudo ln -s /etc/nginx/sites-available/thegivingcircle-backend /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl reload nginx
```

---

## Step 14: Install SSL Certificate

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d api.thegivingcircle.in

# Follow prompts:
# - Enter email: hello@thegivingcircle.in
# - Agree to terms: Y
# - Share email: N (or Y)
# - Redirect HTTP to HTTPS: 2 (Yes)

# Test auto-renewal
sudo certbot renew --dry-run
```

---

## Step 15: Add DNS Record

In Route 53 → Create Record:

```
Record name: api
Type: A
Value: [Your EC2 Public IP]
TTL: 300
```

Or better, use Alias (if you have Elastic IP):

```
Record name: api
Type: A (Alias)
Alias: Yes
Route traffic to: EC2 instance
  → Select your EC2 instance
```

---

## Step 16: Test Backend

```bash
# Test locally on EC2
curl http://localhost:3001/health

# Test from your local machine
curl https://api.thegivingcircle.in/health
```

Should return:
```json
{
  "status": "ok",
  "message": "The Giving Circle API is running",
  "timestamp": "...",
  "environment": "production"
}
```

---

## Step 17: Test Form Submission

1. Go to your website: `https://www.thegivingcircle.in/onboarding`
2. Fill out the form
3. Submit
4. Check your email: `hello@thegivingcircle.in`
5. You should receive the form submission email!

---

## Monitoring & Maintenance

### View Logs

```bash
# PM2 logs
pm2 logs thegivingcircle-backend

# Nginx logs
sudo tail -f /var/log/nginx/error.log
sudo tail -f /var/log/nginx/access.log
```

### Restart Application

```bash
pm2 restart thegivingcircle-backend
```

### Update Application

```bash
cd /var/www/thegivingcircle-backend/server
git pull
npm install --production
pm2 restart thegivingcircle-backend
```

### Monitor Resources

```bash
pm2 monit
```

---

## Troubleshooting

### Application not starting?

```bash
# Check PM2 status
pm2 status

# Check logs
pm2 logs thegivingcircle-backend

# Check if port is in use
sudo lsof -i :3001
```

### Nginx not working?

```bash
# Check Nginx status
sudo systemctl status nginx

# Test Nginx config
sudo nginx -t

# Check Nginx logs
sudo tail -f /var/log/nginx/error.log
```

### SSL certificate issues?

```bash
# Check certificate
sudo certbot certificates

# Renew manually
sudo certbot renew
```

---

## Security Checklist

- [x] Firewall configured (UFW)
- [x] SSH key-based authentication
- [x] Nginx security headers
- [x] SSL certificate installed
- [x] Environment variables secured (.env not in Git)
- [x] PM2 auto-restart enabled
- [x] Regular system updates

---

## Quick Reference Commands

```bash
# PM2
pm2 status
pm2 logs thegivingcircle-backend
pm2 restart thegivingcircle-backend
pm2 stop thegivingcircle-backend
pm2 monit

# Nginx
sudo systemctl status nginx
sudo systemctl restart nginx
sudo nginx -t

# Application
cd /var/www/thegivingcircle-backend/server
git pull
npm install --production
pm2 restart thegivingcircle-backend
```

---

## Final Architecture

```
Internet
  ↓
Route 53 (api.thegivingcircle.in)
  ↓
EC2 Instance
  ↓
Nginx (80 → 443, SSL)
  ↓
Node.js API (PM2, port 3001)
  ↓
Nodemailer → Gmail
```

---

**Your backend is now production-ready!** 🚀

