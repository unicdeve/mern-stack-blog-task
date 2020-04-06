import { Router } from 'express';
import passport from 'passport';

import { createEditArticle } from './aritcle.controller';

const router = Router();

// @route POST api/v1/profile/
// @desc Get User Profile
// @access Public
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  createEditArticle
);

export default router;
