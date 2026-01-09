import { formatEmailHTML, sendEmail } from '../config/email.js';

/**
 * Form submission handlers for The Giving Circle
 * Handles Cause Champion and NGO Partner registration forms
 */

export const submitCauseChampionForm = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, country, city, selectedCause } = req.body;

    // Validation
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

    const receiverEmail = process.env.RECEIVER_EMAIL || 'hello@thegivingcircle.in';
    const fromEmail = process.env.FROM_EMAIL || process.env.EMAIL_USER || 'noreply@thegivingcircle.in';
    
    console.log(`📧 Processing Cause Champion form submission from: ${email}`);
    
    const submittedAt = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'long',
    });

    const causeName = selectedCause
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    // Email options
    const mailOptions = {
      from: `"The Giving Circle" <${fromEmail}>`,
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

    // Send response immediately to user (don't wait for email)
    res.json({
      success: true,
      message: 'Form submitted successfully! We will contact you soon.',
    });

    // Send email asynchronously in background (fire and forget)
    sendEmail(mailOptions)
      .then(() => {
        console.log(`✅ Cause Champion email sent successfully for: ${email}`);
      })
      .catch((error) => {
        console.error('❌ Failed to send Cause Champion email:', error.message);
        // Email failed but user already got success response - log for monitoring
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

    // Validation
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

    const receiverEmail = process.env.RECEIVER_EMAIL || 'hello@thegivingcircle.in';
    const fromEmail = process.env.FROM_EMAIL || process.env.EMAIL_USER || 'noreply@thegivingcircle.in';

    console.log(`📧 Processing NGO Partner form submission from: ${organizationName}`);

    const submittedAt = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'long',
    });

    // Email options
    const mailOptions = {
      from: `"The Giving Circle" <${fromEmail}>`,
      to: receiverEmail,
      replyTo: email,
      subject: `New NGO Partner Registration - ${organizationName}`,
      html: formatEmailHTML(
        'NGO Partner Registration',
        {
          'Organization Name': organizationName,
          'Contact Person': contactPersonName,
          'Email': email,
          'Phone Number': phoneNumber,
        },
        submittedAt
      ),
      text: `
NGO Partner Registration

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ORGANIZATION DETAILS

🏛️ Organization Name: ${organizationName}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CONTACT INFORMATION

👨‍💼 Contact Person: ${contactPersonName}
📧 Email: ${email}
📞 Phone Number: ${phoneNumber}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📅 Submitted: ${submittedAt}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This organization wants to become a verified partner with The Giving Circle platform.
      `.trim(),
    };

    // Send response immediately to user (don't wait for email)
    res.json({
      success: true,
      message: 'Partner registration submitted successfully! We will contact you soon.',
    });

    // Send email asynchronously in background (fire and forget)
    sendEmail(mailOptions)
      .then(() => {
        console.log(`✅ NGO Partner email sent successfully for: ${organizationName}`);
      })
      .catch((error) => {
        console.error('❌ Failed to send NGO Partner email:', error.message);
        // Email failed but user already got success response - log for monitoring
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
