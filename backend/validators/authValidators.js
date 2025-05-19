import { body, oneOf } from 'express-validator';

export const signupValidator = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().normalizeEmail().withMessage('Invalid email'),
  body('password')
    .isLength({ min: 8 }).withMessage('Password must be at least 8 characters')
    .matches(/\d/).withMessage('Password must contain a number'),
  body('userType')
    .isIn(['startup', 'investor']).withMessage('Invalid user type'),
  oneOf([
    [
      body('userType').equals('startup'),
      body('startupName').trim().notEmpty().withMessage('Startup name is required'),
      body('category')
        .isIn(['cleantech', 'agtech', 'healthtech', 'fintech', 'edtech', 'ai/ml', 'saas', 'e-commerce', 'other'])
        .withMessage('Invalid category')
    ],
    [
      body('userType').equals('investor'),
      body('startupName').not().exists(),
      body('category').not().exists()
    ]
  ], 'Invalid fields for user type')
];