// server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const subscriptionRoutes = require('./routes/subscriptionRoutes');



const app = express();
app.use(cors());
app.use(express.json());
app.use(cors({
  origin: process.env.FRONTEND_URL, 
  credentials: true, 
}));
// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

app.use('/api/subscribe', subscriptionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
