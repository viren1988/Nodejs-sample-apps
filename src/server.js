const express = require('express');
const path = require('path');
const os = require('os');
const app = express();
const port = process.env.PORT || 3000;
// Serve static files
app.use(express.static(path.join(__dirname, '../public')));
// Environment endpoint
app.get('/api/environment', (req, res) => {
  res.json({
    environment: process.env.ENVIRONMENT || 'development',
    hostname: os.hostname(),
    timestamp: new Date().toISOString(),
    version: process.env.APP_VERSION || '1.0.0',
    features: {
      canary: process.env.FEATURE_CANARY === 'true',
      newUI: process.env.FEATURE_NEW_UI === 'true'
    }
  });
});
// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});
// Start server
app.listen(port, () => {
  console.log(`Server running in ${process.env.ENVIRONMENT || 'development'} mode on port ${port}`);
});
