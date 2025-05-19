import express from 'express';
import User from '../models/User.js';
import { validationResult } from 'express-validator';
import { signupValidator } from '../validators/authValidators.js';

const router = express.Router();

// Signup Route
router.post('/signup', signupValidator, async (req, res) => {
  // Validate request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password, userType, startupName, category } = req.body;

  try {
    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    // Create new user
    const user = new User({
      name,
      email,
      password,
      userType,
      ...(userType === 'startup' && { startupName, category })
    });

    await user.save();

    // Return user data (without password)
    res.status(201).json({
      message: 'User created successfully',
      user: user.toJSON()
    });

  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Server error during signup' });
  }
});

export default router;