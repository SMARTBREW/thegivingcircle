import nodemailer from 'nodemailer';


export const createEmailTransporter = () => {
  const emailService = process.env.EMAIL_SERVICE || 'gmail';
  
  let transportConfig;

  switch (emailService.toLowerCase()) {
    case 'gmail':
      // Gmail SMTP Configuration
      transportConfig = {
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD, // Use App Password, not regular password
        },
      };
      break;

    case 'aws-ses':
    case 'ses':
      // AWS SES Configuration
      transportConfig = {
        host: process.env.SMTP_HOST || 'email-smtp.us-east-1.amazonaws.com',
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
        auth: {
          user: process.env.SMTP_USER, // SMTP username from AWS SES
          pass: process.env.SMTP_PASSWORD, // SMTP password from AWS SES
        },
      };
      break;

    case 'sendgrid':
      // SendGrid SMTP Configuration
      transportConfig = {
        host: 'smtp.sendgrid.net',
        port: 587,
        secure: false,
        auth: {
          user: 'apikey',
          pass: process.env.SENDGRID_API_KEY,
        },
      };
      break;

    case 'custom':
    default:
      // Custom SMTP Configuration
      transportConfig = {
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      };
      break;
  }

  return nodemailer.createTransport(transportConfig);
};

// Verify email configuration
export const verifyEmailConfig = async () => {
  try {
    const transporter = createEmailTransporter();
    await transporter.verify();
    console.log('✅ Email configuration verified successfully');
    return true;
  } catch (error) {
    console.error('❌ Email configuration verification failed:', error.message);
    return false;
  }
};

// Email template helper
export const formatEmailHTML = (title, fields, submittedAt) => {
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #15803d 0%, #16a34a 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-top: none; }
          .footer { background: #f9fafb; padding: 20px; text-align: center; color: #6b7280; font-size: 12px; border-radius: 0 0 8px 8px; }
          table { width: 100%; border-collapse: collapse; }
          .divider { height: 1px; background: #e5e7eb; margin: 20px 0; }
          @media only screen and (max-width: 600px) {
            .container { padding: 10px; }
            .header, .content, .footer { padding: 20px; }
          }
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
            <p style="margin: 5px 0;">This email was sent from The Giving Circle contact form.</p>
            <p style="margin: 5px 0;">© ${new Date().getFullYear()} The Giving Circle. All rights reserved.</p>
            <p style="margin: 5px 0; font-size: 11px;">
              <a href="https://www.thegivingcircle.in" style="color: #16a34a; text-decoration: none;">www.thegivingcircle.in</a>
            </p>
          </div>
        </div>
      </body>
    </html>
  `;
};

// Send email helper
export const sendEmail = async (mailOptions) => {
  const transporter = createEmailTransporter();
  
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('❌ Error sending email:', error);
    throw new Error(`Failed to send email: ${error.message}`);
  }
};

export default {
  createEmailTransporter,
  verifyEmailConfig,
  formatEmailHTML,
  sendEmail,
};

