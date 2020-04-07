'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _aritcle = require('./aritcle.controller');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

// @route POST api/v1/article/
// @desc Create or Edit Article
// @access Public
router.post('/', _passport2.default.authenticate('jwt', { session: false }), _aritcle.createEditArticle);

// @route GET api/v1/article/user/articles/
// @desc Get current Articles
// @access Public
router.get('/user/articles', _passport2.default.authenticate('jwt', { session: false }), _aritcle.userArticles);

// @route GET api/v1/article/
// @desc Get all Articles
// @access Public
router.get('/', _aritcle.getArticles);

// @route GET api/v1/article/
// @desc Get Article by ID
// @access Public
router.get('/:articleId', _aritcle.getArticleById);

// @route GET api/v1/article/
// @desc Get Article by ID
// @access Public
router.get('/:articleId/image', _aritcle.getArticleImage);

exports.default = router;
//# sourceMappingURL=aritcle.routes.js.map