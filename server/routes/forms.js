import nodemailer from 'nodemailer';

const createTransporter = () => {
  // Use SendGrid if API key is provided (recommended for Render - works on free tier)
  if (process.env.SENDGRID_API_KEY) {
    return nodemailer.createTransport({
      host: 'smtp.sendgrid.net',
      port: 587,
      secure: false,
      auth: {
        user: 'apikey',
        pass: process.env.SENDGRID_API_KEY,
      },
    });
  }

  // Fallback to SMTP (Gmail, etc.) - may not work on Render free tier due to port blocking
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    throw new Error('Email credentials not configured. Please set SENDGRID_API_KEY (recommended) or SMTP_USER and SMTP_PASS');
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

const formatEmailHTML = (title, fields, submittedAt) => {
  const fieldsHTML = Object.entries(fields)
    .map(([key, value]) => {
      const label = key
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, str => str.toUpperCase())
        .trim();
      return `
        <tr>
          <td style="padding: 8px 0; font-weight: 600; color: #374151; width: 200px;">${label}:</td>
          <td style="padding: 8px 0; color: #6B7280;">${value || 'N/A'}</td>
        </tr>
      `;
    })
    .join('');

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #15803d 0%, #16a34a 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-top: none; }
          .footer { background: #f9fafb; padding: 20px; text-align: center; color: #6b7280; font-size: 12px; border-radius: 0 0 8px 8px; }
          table { width: 100%; border-collapse: collapse; }
          .divider { height: 1px; background: #e5e7eb; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0; font-size: 24px;">${title}</h1>
          </div>
          <div class="content">
            <table>
              ${fieldsHTML}
            </table>
            <div class="divider"></div>
            <p style="color: #6b7280; font-size: 14px; margin-top: 20px;">
              <strong>Submitted:</strong> ${submittedAt}
            </p>
          </div>
          <div class="footer">
            <p>This email was sent from The Giving Circle contact form.</p>
            <p>© ${new Date().getFullYear()} The Giving Circle. All rights reserved.</p>
          </div>
        </div>
      </body>
    </html>
  `;
};

export const submitCauseChampionForm = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, country, city, selectedCause } = req.body;

    if (!fullName || !email || !phoneNumber || !country || !city || !selectedCause) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required',
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email address',
      });
    }

    const transporter = createTransporter();
    const receiverEmail = process.env.RECEIVER_EMAIL || 'hello@thegivingcircle.in';
    console.log(`📧 Sending Cause Champion form submission to: ${receiverEmail}`);
    const submittedAt = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'long',
    });

    const causeName = selectedCause
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    const mailOptions = {
      from: `"The Giving Circle" <${process.env.SMTP_USER}>`,
      to: receiverEmail,
      replyTo: email,
      subject: `New Cause Champion Registration - ${fullName}`,
      html: formatEmailHTML(
        'Cause Champion Registration',
        {
          'Full Name': fullName,
          'Email': email,
          'Phone Number': phoneNumber,
          'Country': country,
          'City': city,
          'Selected Cause': causeName,
        },
        submittedAt
      ),
      text: `
Cause Champion Registration

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PERSONAL INFORMATION

👤 Full Name: ${fullName}
📧 Email: ${email}
📞 Phone Number: ${phoneNumber}
🌍 Country: ${country}
📍 City: ${city}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CAUSE INFORMATION

🎯 Selected Cause: ${causeName}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📅 Submitted: ${submittedAt}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This person wants to become a Cause Champion and start their giving journey with The Giving Circle.
      `.trim(),
    };

    await transporter.sendMail(mailOptions);

    res.json({
      success: true,
      message: 'Form submitted successfully! We will contact you soon.',
    });
  } catch (error) {
    console.error('Error submitting Cause Champion form:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit form. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
};

export const submitNGOPartnerForm = async (req, res) => {
  try {
    const { organizationName, email, contactPersonName, phoneNumber } = req.body;

    if (!organizationName || !email || !contactPersonName || !phoneNumber) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required',
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email address',
      });
    }

    const transporter = createTransporter();
    const receiverEmail = process.env.RECEIVER_EMAIL || 'hello@thegivingcircle.in';
    console.log(`📧 Sending NGO Partner form submission to: ${receiverEmail}`);

    const submittedAt = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'long',
    });

    const mailOptions = {
      from: `"The Giving Circle" <${process.env.SMTP_USER}>`,
      to: receiverEmail,
      replyTo: email,
      subject: `Partner Registration - ${organizationName}`,
      html: formatEmailHTML(
        'Partner Registration - Join Verified Partner Network',
        {
          'Organization Name': organizationName,
          'Email': email,
          'Contact Person': contactPersonName,
          'Phone Number': phoneNumber,
        },
        submittedAt
      ),
      text: `
Partner Registration - Join Verified Partner Network India

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ORGANIZATION DETAILS

🏛️ Organization Name: ${organizationName}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CONTACT INFORMATION

📧 Email: ${email}
👨‍💼 Contact Person: ${contactPersonName}
📞 Phone Number: ${phoneNumber}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📅 Submitted: ${submittedAt}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

I would like to become partner with The Giving Circle's verified partner platform India. Please provide details about the partner onboarding process, partnership benefits, and how to join your trusted partner network.
      `.trim(),
    };

    await transporter.sendMail(mailOptions);

    res.json({
      success: true,
      message: 'Partner registration submitted successfully! We will contact you soon.',
    });
  } catch (error) {
    console.error('Error submitting NGO Partner form:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit form. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
};

