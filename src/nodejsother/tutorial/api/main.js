const express = require('express');
const app = express();
const PORT = 3000;

// Import routes
const userRoutes = require('./routes/userRoutes');

// Middleware
app.use(express.json());

// Mount routes
app.use('/users', userRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to My Node.js App!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});