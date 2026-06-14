import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User.js';

dotenv.config();

mongoose.connect(process.env.MONGODB_URI)
  .then(async () => {
    const email = 'manalidighe230755@acropolis.in';
    const user = await User.findOne({ email });
    if (user) {
      user.role = 'admin';
      await user.save();
      console.log(`Successfully made ${email} an admin!`);
    } else {
      console.log('User not found. Check the email address.');
    }
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
