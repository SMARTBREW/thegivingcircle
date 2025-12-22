import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { submitCauseChampionForm, submitNGOPartnerForm } from './routes/forms.js';

// Get current directory for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables from server/.env
dotenv.config({ path: join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: [
    'https://www.thegivingcircle.in',
    'https://thegivingcircle.in',
    'http://localhost:5173',
    'http://localhost:3000'
  ],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Form submission routes
app.post('/api/submit/cause-champion', submitCauseChampionForm);
app.post('/api/submit/ngo-partner', submitNGOPartnerForm);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ 
    success: false, 
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  const receiverEmail = process.env.RECEIVER_EMAIL || 'hello@thegivingcircle.in';
  console.log(`📧 Form submissions will be sent to: ${receiverEmail}`);
  
  // Validate email configuration
  if (process.env.RESEND_API_KEY) {
    console.log('✅ Resend API Key configured (recommended for Render)');
  } else {
    console.warn('⚠️  WARNING: Resend API key not configured!');
    console.warn('   Please set RESEND_API_KEY environment variable');
    console.warn('   Email sending will fail until API key is configured.');
  }
});

