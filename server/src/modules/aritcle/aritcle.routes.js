import { Router } from 'express';
import passport from 'passport';

import { createEditArticle, userArticles } from './aritcle.controller';

const router = Router();

// @route POST api/v1/profile/
// @desc Get User Profile
// @access Public
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  createEditArticle
);

// @route GET api/v1/profile/my-profile
// @desc Get current User Profile
// @access Public
router.get(
  '/user/articles',
  passport.authenticate('jwt', { session: false }),
  userArticles
);

export default router;
