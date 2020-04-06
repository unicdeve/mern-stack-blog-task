import { Router } from 'express';
import passport from 'passport';
import {
  currentUser,
  login,
  register,
  changePassword
} from './user.controller';

const router = Router();

// @route POST api/v1/users/register
// @desc Register User  - Returning JWT token
// @access Public
router.post('/register', register);

// @route POST api/users/login
// @desc User Login  -  Returning JWT token
// @access Public
router.post('/login', login);

// @route GET api/users/current
// @desc Return current user
// @access Private
router.get(
  '/current-user',
  passport.authenticate('jwt', { session: false }),
  currentUser
);

// @route POST api/users/change-password
// @desc Change password
// @access Private
router.post(
  '/change-password',
  passport.authenticate('jwt', { session: false }),
  changePassword
);

export default router;
