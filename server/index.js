import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import morgan from 'morgan';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { submitCauseChampionForm, submitNGOPartnerForm } from './routes/forms.js';
import { verifyEmailConfig } from './config/email.js';

// Get current directory for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables from server/.env
dotenv.config({ path: join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 3001;
const NODE_ENV = process.env.NODE_ENV || 'development';

// Security middleware
app.use(helmet({
  contentSecurityPolicy: false, // Disable for API
  crossOriginEmbedderPolicy: false,
}));

// CORS configuration
app.use(cors({
  origin: [
    'https://www.thegivingcircle.in',
    'https://thegivingcircle.in',
    'http://localhost:5173',
    'http://localhost:3000',
    process.env.FRONTEND_URL
  ].filter(Boolean),
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Rate limiting - prevent abuse
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});

const formLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 100, // Limit each IP to 100 form submissions per hour
  standardHeaders: true, // Return rate limit info in `RateLimit-*` headers
  legacyHeaders: false,
  skipSuccessfulRequests: false, // Count all requests, even successful ones
  skipFailedRequests: false, // Count failed requests too
  handler: (req, res) => {
    const remaining = req.rateLimit?.remaining || 0;
    const total = req.rateLimit?.limit || 100;
    const resetTime = req.rateLimit?.resetTime ? new Date(req.rateLimit.resetTime).toLocaleTimeString() : 'unknown';
    
    res.status(429).json({
      success: false,
      error: 'Too many form submissions',
      message: `You have reached the limit of ${total} form submissions per hour. Please try again after ${resetTime}.`,
      limit: total,
      remaining: remaining,
      window: '1 hour',
      resetTime: resetTime
    });
  }
});

app.use('/api/', limiter);

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Logging middleware
if (NODE_ENV === 'development') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('combined'));
}

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'The Giving Circle API is running',
    timestamp: new Date().toISOString(),
    environment: NODE_ENV
  });
});

app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'The Giving Circle API is running',
    timestamp: new Date().toISOString(),
    environment: NODE_ENV
  });
});

// Form submission routes with rate limiting
app.post('/api/submit/cause-champion', formLimiter, submitCauseChampionForm);
app.post('/api/submit/ngo-partner', formLimiter, submitNGOPartnerForm);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ 
    success: false,
    message: 'Endpoint not found',
    path: req.path 
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal server error';
  
  res.status(statusCode).json({ 
    success: false, 
    message,
    error: NODE_ENV === 'development' ? err.stack : undefined
  });
});

// Start server
app.listen(PORT, async () => {
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('🚀 The Giving Circle Backend API');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`📡 Server running on port ${PORT}`);
  console.log(`🌍 Environment: ${NODE_ENV}`);
  console.log(`⏰ Started at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`);
  
  // Email configuration
  const receiverEmail = process.env.RECEIVER_EMAIL || 'hello@thegivingcircle.in';
  const emailService = process.env.EMAIL_SERVICE || 'gmail';
  console.log(`📧 Email service: ${emailService.toUpperCase()}`);
  console.log(`📬 Forms will be sent to: ${receiverEmail}`);
  
  // Verify email configuration
  const isEmailConfigured = await verifyEmailConfig();
  if (!isEmailConfigured) {
    console.warn('⚠️  WARNING: Email configuration not verified!');
    console.warn('   Please check your EMAIL_USER and EMAIL_PASSWORD in .env');
    console.warn('   Form submissions may fail until email is configured.');
  }
  
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('✅ Server ready to accept requests');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('\nSIGINT signal received: closing HTTP server');
  process.exit(0);
});

export default app;
