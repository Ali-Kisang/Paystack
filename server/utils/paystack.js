
const axios = require('axios');

const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;
const BASE_URL = 'https://api.paystack.co';

const headers = {
  Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
  'Content-Type': 'application/json',
};

exports.initializePayment = async (email, amount, callback_url) => {
  const data = {
    email,
    amount: amount * 100, // Paystack expects amount in kobo
    callback_url,
  };
  const res = await axios.post(`${BASE_URL}/transaction/initialize`, data, { headers });
  return res.data;
};

exports.verifyPayment = async (reference) => {
  const res = await axios.get(`${BASE_URL}/transaction/verify/${reference}`, { headers });
  return res.data;
};
