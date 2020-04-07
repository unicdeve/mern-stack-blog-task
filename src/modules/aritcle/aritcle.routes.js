import { Router } from 'express';
import passport from 'passport';

import {
  createEditArticle,
  userArticles,
  getArticles,
  getArticleById,
  getArticleImage
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

// @route GET api/v1/article/
// @desc Get Article by ID
// @access Public
router.get('/:articleId', getArticleById);

// @route GET api/v1/article/
// @desc Get Article by ID
// @access Public
router.get('/:articleId/image', getArticleImage);

export default router;
