// Load Raneto
import raneto from './app/index.js';

// Load config
import config from './config/config.js';

const app = raneto(config);

// Force Render environment
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

// Start server
const server = app.listen(PORT, HOST, () => {
  console.log(`HTTP server listening on port ${server.address().port}`);
});
