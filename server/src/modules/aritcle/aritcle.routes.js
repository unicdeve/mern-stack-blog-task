import { Router } from 'express';
import passport from 'passport';

import {
  createEditArticle,
  userArticles,
  getArticles
} from './aritcle.controller';

const router = Router();

// @route POST api/v1/article/
// @desc Create or Edit Article
// @access Public
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  createEditArticle
);

// @route GET api/v1/article/user/articles/
// @desc Get current Articles
// @access Public
router.get(
  '/user/articles',
  passport.authenticate('jwt', { session: false }),
  userArticles
);

// @route GET api/v1/article/
// @desc Get all Articles
// @access Public
router.get('/', getArticles);

export default router;
