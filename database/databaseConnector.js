const mongoose = require('mongoose');

const ConnectDatabase = () => {
  const uri = process.env.MONGODB_URI || process.env.CONNECTION_URL;
  if (!uri) {
    throw new Error('No MongoDB connection string found in environment variables!');
  }
  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB!'))
    .catch((err) => console.error('MongoDB connection error:', err));
};

module.exports = { ConnectDatabase };
