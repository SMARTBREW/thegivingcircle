# Resend Setup Guide

Resend is much easier than SMTP - it uses HTTPS requests (no port blocking issues on Render).

## Step 1: Create Resend Account

1. Go to [resend.com](https://resend.com)
2. Sign up (free account)
3. Verify your email

## Step 2: Get API Key

1. Go to **API Keys** in Resend dashboard
2. Click **"Create API Key"**
3. Name: `The Giving Circle Backend`
4. Permissions: **Full Access** (or **Sending Access**)
5. Click **"Add"**
6. **Copy the API key** (starts with `re_`)

## Step 3: Add to Render

1. Go to Render dashboard → Your service → **Environment**
2. **Remove** (if present):
   - `SENDGRID_API_KEY`
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_SECURE`
   - `SMTP_USER`
   - `SMTP_PASS`
3. **Add**:
   ```
   RESEND_API_KEY=re_your-api-key-here
   RECEIVER_EMAIL=hello@thegivingcircle.in
   ```
4. Click **"Save Changes"**
5. Render will auto-redeploy

## Step 4: Verify Domain (Optional)

For production, you can verify your domain:
1. Go to **Domains** in Resend
2. Add `thegivingcircle.in`
3. Add DNS records as shown
4. Update `from` field in code to use your domain

**For now, you can use the default `onboarding@resend.dev` domain for testing.**

## Step 5: Test

1. Submit a form
2. Check Render logs - should see success
3. Check email inbox

## Why Resend?

✅ **HTTPS requests** - No SMTP port blocking  
✅ **Works on Render free tier** - No restrictions  
✅ **Simple API** - Just one API key  
✅ **Free tier**: 3,000 emails/month  
✅ **Fast & reliable** - Modern email API  

## Update From Email (After Domain Verification)

Once you verify your domain, update the `from` field in `server/routes/forms.js`:

```javascript
from: 'The Giving Circle <hello@thegivingcircle.in>',
```

For now, it uses `onboarding@resend.dev` which works fine for testing.

---

That's it! Much simpler than SMTP. 🎉

