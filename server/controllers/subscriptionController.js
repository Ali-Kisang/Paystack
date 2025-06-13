
const { initializePayment, verifyPayment } = require('../utils/paystack');
const User = require('../models/User');

exports.initiateSubscription = async (req, res) => {
  try {
    const { email, amount } = req.body;
    const user = await User.findOne({ email }) || await User.create({ email });

    const payment = await initializePayment(email, amount, `${process.env.FRONTEND_URL}/verify`);
    res.status(200).json({ authorization_url: payment.data.authorization_url });
  } catch (err) {
    res.status(500).json({ error: 'Subscription initiation failed' });
  }
};

exports.verifySubscription = async (req, res) => {
  try {
    const { reference } = req.body;
    const payment = await verifyPayment(reference);
    if (payment.data.status === 'success') {
      const email = payment.data.customer.email;
      const user = await User.findOneAndUpdate(
        { email },
        {
          subscriptionStatus: 'active',
          subscriptionExpiry: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
        },
        { new: true }
      );
      return res.status(200).json({ message: 'Payment verified', user });
    } else {
      return res.status(400).json({ error: 'Payment not successful' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Verification failed' });
  }
};
