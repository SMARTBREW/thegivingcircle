import { formatEmailHTML, sendEmail } from '../config/email.js';
import {
  insertFormSubmission,
  updateFormSubmissionEmailStatus,
} from '../services/formSubmissionsStore.js';

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

    let submissionId;
    try {
      submissionId = await insertFormSubmission({
        formType: 'cause_champion',
        payload: {
          fullName,
          email,
          phoneNumber,
          country,
          city,
          selectedCause,
        },
      });
    } catch (dbErr) {
      console.error('❌ Failed to save Cause Champion submission:', dbErr);
      return res.status(500).json({
        success: false,
        message: 'Failed to save your submission. Please try again later.',
      });
    }

    console.log(`📧 Processing Cause Champion form submission from: ${email} (saved id: ${submissionId})`);

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
        return updateFormSubmissionEmailStatus(submissionId, { emailSent: true });
      })
      .catch((error) => {
        console.error('❌ Failed to send Cause Champion email:', error.message);
        return updateFormSubmissionEmailStatus(submissionId, {
          emailSent: false,
          emailError: error.message || String(error),
        }).catch((uErr) =>
          console.error('❌ Failed to update Cause Champion email status in DB:', uErr.message)
        );
      });

  } catch (error) {
    console.error('Error submitting Cause Champion form:', error);
    if (!res.headersSent) {
      res.status(500).json({
        success: false,
        message: 'Failed to submit form. Please try again later.',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined,
      });
    }
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

    let submissionId;
    try {
      submissionId = await insertFormSubmission({
        formType: 'ngo_partner',
        payload: {
          organizationName,
          email,
          contactPersonName,
          phoneNumber,
        },
      });
    } catch (dbErr) {
      console.error('❌ Failed to save NGO Partner submission:', dbErr);
      return res.status(500).json({
        success: false,
        message: 'Failed to save your submission. Please try again later.',
      });
    }

    console.log(
      `📧 Processing NGO Partner form submission from: ${organizationName} (saved id: ${submissionId})`
    );

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
        return updateFormSubmissionEmailStatus(submissionId, { emailSent: true });
      })
      .catch((error) => {
        console.error('❌ Failed to send NGO Partner email:', error.message);
        return updateFormSubmissionEmailStatus(submissionId, {
          emailSent: false,
          emailError: error.message || String(error),
        }).catch((uErr) =>
          console.error('❌ Failed to update NGO Partner email status in DB:', uErr.message)
        );
      });

  } catch (error) {
    console.error('Error submitting NGO Partner form:', error);
    if (!res.headersSent) {
      res.status(500).json({
        success: false,
        message: 'Failed to submit form. Please try again later.',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined,
      });
    }
  }
};

export const submitAnimalWelfarePartnerForm = async (req, res) => {
  try {
    const {
      citySlug,
      regionLabel,
      person,
      organisation,
      contact,
      city,
      area,
      address,
      email,
      services,
    } = req.body || {};

    if (!citySlug || !city?.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Region and city of operation are required',
      });
    }

    const hasIdentity =
      (person && String(person).trim()) ||
      (organisation && String(organisation).trim()) ||
      (contact && String(contact).trim());

    if (!hasIdentity) {
      return res.status(400).json({
        success: false,
        message: 'Please provide at least a name, organisation, or contact number',
      });
    }

    if (email?.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        return res.status(400).json({
          success: false,
          message: 'Invalid email address',
        });
      }
    }

    const receiverEmail = process.env.RECEIVER_EMAIL || 'hello@thegivingcircle.in';
    const fromEmail = process.env.FROM_EMAIL || process.env.EMAIL_USER || 'noreply@thegivingcircle.in';
    const label = regionLabel || citySlug;

    const payload = {
      citySlug,
      regionLabel: label,
      person: person?.trim() || '',
      organisation: organisation?.trim() || '',
      contact: contact?.trim() || '',
      city: city.trim(),
      area: area?.trim() || '',
      address: address?.trim() || '',
      email: email?.trim() || '',
      services: services?.trim() || '',
    };

    let submissionId;
    try {
      submissionId = await insertFormSubmission({
        formType: 'animal_welfare_partner',
        payload,
      });
    } catch (dbErr) {
      console.error('❌ Failed to save animal welfare directory submission:', dbErr);
      return res.status(500).json({
        success: false,
        message: 'Failed to save your submission. Please try again later.',
      });
    }

    console.log(
      `📧 Animal welfare directory suggestion for ${label} (saved id: ${submissionId})`
    );

    const submittedAt = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'long',
    });

    const displayName = payload.organisation || payload.person || 'New listing';
    const replyTo = payload.email || undefined;

    const mailOptions = {
      from: `"The Giving Circle" <${fromEmail}>`,
      to: receiverEmail,
      ...(replyTo ? { replyTo } : {}),
      subject: `Animal Welfare Directory Suggestion — ${label} — ${displayName}`,
      html: formatEmailHTML(
        `Animal Welfare Directory Suggestion (${label})`,
        {
          Region: label,
          'Directory slug': citySlug,
          'Concerned Person': payload.person || '—',
          'Organisation / Individual': payload.organisation || '—',
          'Contact No.': payload.contact || '—',
          'City of Operation': payload.city,
          'Area of Operation': payload.area || '—',
          Address: payload.address || '—',
          Email: payload.email || '—',
          Services: payload.services || '—',
        },
        submittedAt
      ),
      text: `
Animal Welfare Directory Suggestion

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

REGION: ${label} (${citySlug})

Concerned Person: ${payload.person || '—'}
Organisation / Individual: ${payload.organisation || '—'}
Contact No.: ${payload.contact || '—'}
City of Operation: ${payload.city}
Area of Operation: ${payload.area || '—'}
Address: ${payload.address || '—'}
Email: ${payload.email || '—'}
Services: ${payload.services || '—'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📅 Submitted: ${submittedAt}

Add this entry to the animal welfare directory after verification.
      `.trim(),
    };

    res.json({
      success: true,
      message:
        'Thank you! Your suggestion has been sent for review. We will add verified listings to the directory soon.',
    });

    sendEmail(mailOptions)
      .then(() => {
        console.log(`✅ Animal welfare directory email sent for: ${displayName}`);
        return updateFormSubmissionEmailStatus(submissionId, { emailSent: true });
      })
      .catch((error) => {
        console.error('❌ Failed to send animal welfare directory email:', error.message);
        return updateFormSubmissionEmailStatus(submissionId, {
          emailSent: false,
          emailError: error.message || String(error),
        }).catch((uErr) =>
          console.error('❌ Failed to update animal welfare email status in DB:', uErr.message)
        );
      });
  } catch (error) {
    console.error('Error submitting animal welfare directory form:', error);
    if (!res.headersSent) {
      res.status(500).json({
        success: false,
        message: 'Failed to submit. Please try again later.',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined,
      });
    }
  }
};
