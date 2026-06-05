import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import morgan from 'morgan';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import {
  submitCauseChampionForm,
  submitNGOPartnerForm,
  submitAnimalWelfarePartnerForm,
} from './routes/forms.js';
import blogRoutes from './routes/blog.js';
import animalWelfareRoutes from './routes/animalWelfare.js';
import { verifyEmailConfig } from './config/email.js';
import { connectMongo, closeMongo } from './config/mongo.js';
import { seedBlogPostsFromJsonIfEmpty } from './services/blogStore.js';
import { seedAnimalWelfarePartnersIfEmpty } from './services/animalWelfarePartnersStore.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 3001;
const NODE_ENV = process.env.NODE_ENV || 'development';

// Trust only N proxy hops (not `true`). `trust proxy: true` triggers express-rate-limit
// ERR_ERL_PERMISSIVE_TRUST_PROXY and lets clients spoof X-Forwarded-For.
// Local dev: omit TRUST_PROXY_HOPS or set 0. Behind one reverse proxy: TRUST_PROXY_HOPS=1
const trustProxyHops = Number.parseInt(process.env.TRUST_PROXY_HOPS ?? '0', 10);
if (Number.isFinite(trustProxyHops) && trustProxyHops > 0) {
  app.set('trust proxy', trustProxyHops);
}

app.use(helmet({
  contentSecurityPolicy: false, 
  crossOriginEmbedderPolicy: false,
}));


// Public API — allow all origins (no auth cookies used)
app.use(cors());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});

const formLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, 
  max: 100, 
  standardHeaders: true,
  skipSuccessfulRequests: false,
  skipFailedRequests: false,
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

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));


if (NODE_ENV === 'development') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('combined'));
}

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

app.post('/api/submit/cause-champion', formLimiter, submitCauseChampionForm);
app.post('/api/submit/ngo-partner', formLimiter, submitNGOPartnerForm);
app.post('/api/submit/animal-welfare-partner', formLimiter, submitAnimalWelfarePartnerForm);

// Blog APIs (read + AI generation)
app.use('/api/blog', blogRoutes);

// Animal welfare directory (MongoDB CRUD)
app.use('/api/animal-welfare', animalWelfareRoutes);

app.use((req, res) => {
  res.status(404).json({ 
    success: false,
    message: 'Endpoint not found',
    path: req.path 
  });
});

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

async function start() {
  try {
    await connectMongo();
    await seedBlogPostsFromJsonIfEmpty();
    await seedAnimalWelfarePartnersIfEmpty();
  } catch (err) {
    console.error('❌ MongoDB connection failed:', err?.message || err);
    console.error('   Set MONGODB_URI or MONGO_URI in server/.env');
    process.exit(1);
  }

  app.listen(PORT, async () => {
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('🚀 The Giving Circle Backend API');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(`📡 Server running on port ${PORT}`);
    console.log(`🌍 Environment: ${NODE_ENV}`);
    console.log(`⏰ Started at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`);

    const receiverEmail = process.env.RECEIVER_EMAIL || 'hello@thegivingcircle.in';
    const emailService = process.env.EMAIL_SERVICE || 'gmail';
    console.log(`📧 Email service: ${emailService.toUpperCase()}`);
    console.log(`📬 Forms will be sent to: ${receiverEmail}`);

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
}

start();

process.on('SIGTERM', async () => {
  console.log('SIGTERM signal received: closing HTTP server');
  await closeMongo();
  process.exit(0);
});

process.on('SIGINT', async () => {
  console.log('\nSIGINT signal received: closing HTTP server');
  await closeMongo();
  process.exit(0);
});

export default app;
