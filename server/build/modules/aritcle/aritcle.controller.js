'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getArticleImage = exports.getArticleById = exports.getArticles = exports.userArticles = exports.createEditArticle = undefined;

var _formidable = require('formidable');

var _formidable2 = _interopRequireDefault(_formidable);

var _aritcle = require('./aritcle.model');

var _aritcle2 = _interopRequireDefault(_aritcle);

var _article = require('../../validations/article');

var _article2 = _interopRequireDefault(_article);

var _article3 = require('./article');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// create or edit User Article
var createEditArticle = exports.createEditArticle = function createEditArticle(req, res) {
  var form = new _formidable2.default.IncomingForm();
  form.keepExtensions = true;

  form.parse(req, function (err, fields, files) {
    if (err) return res.status(400).json({
      error: 'Image could not be uploaded'
    });

    // validate fields object here

    var _validateArticleInput = (0, _article2.default)(fields),
        errors = _validateArticleInput.errors,
        isValid = _validateArticleInput.isValid;

    // if (!isValid) return res.status(400).json(errors);

    var articleFields = (0, _article3.formatArticleFields)(fields, files);
    articleFields.user = req.user.id;

    console.log('fields.articleId', fields.articleId);

    _aritcle2.default.findOne({
      _id: fields.articleId,
      user: req.user.id
    }).then(function (article) {
      if (!article) {
        if (articleFields.image && articleFields.image.data) {
          var newArticle = new _aritcle2.default(articleFields);
          newArticle.save().then(function (article) {
            return res.json(article);
          }).catch(function (err) {
            console.log(err);
            errors.general = 'There was an error saving your article';
            return res.status(500).json(errors);
          });
        } else {
          errors.image = 'Image is required';
          return res.status(400).json(errors);
        }
      }
      // update article
      else {
          _aritcle2.default.findOneAndUpdate({ _id: fields.articleId }, { $set: articleFields }, { new: true }).populate('user', 'email').then(function (article) {
            return res.json(article);
          }).catch(function (err) {
            errors.general = 'There was an error updating your article';
            return res.status(500).json(errors);
          });
        }
    }).catch(function (err) {
      return console.log(err);
    });
  });
};

// get current user's articles
var userArticles = exports.userArticles = function userArticles(req, res) {
  var errors = {};
  _aritcle2.default.find({ user: req.user.id }).populate('user', 'email').then(function (article) {
    if (!article) {
      errors.noArticle = 'You have no article yet.';
      return res.status(400).json(errors);
    }
    return res.json(article);
  }).catch(function () {
    errors.noArticle = 'An error occured while finding your article';
    return res.status(400).json(errors);
  });
};

// get all articles
var getArticles = exports.getArticles = function getArticles(_, res) {
  var errors = {};
  _aritcle2.default.find({}).populate('user', 'email').then(function (article) {
    if (!article) {
      errors.noArticle = 'You have no article yet.';
      return res.status(400).json(errors);
    }
    return res.json(article);
  }).catch(function () {
    errors.noArticle = 'An error occured while finding your article';
    return res.status(400).json(errors);
  });
};

// get article by ID
var getArticleById = exports.getArticleById = function getArticleById(req, res) {
  var errors = {};
  _aritcle2.default.findById(req.params.articleId).populate('user', 'email').then(function (article) {
    if (!article) {
      errors.noArticle = 'You have no article yet.';
      return res.status(400).json(errors);
    }
    return res.json(article);
  }).catch(function () {
    errors.noArticle = 'An error occured while finding your article';
    return res.status(400).json(errors);
  });
};

var getArticleImage = exports.getArticleImage = function getArticleImage(req, res) {
  _aritcle2.default.findById(req.params.articleId).populate('user', 'email').then(function (article) {
    if (article) {
      res.set('Content-Type', article.image.contentType);
      return res.send(article.image.data);
    }
    return res.status(404).json({ error: 'Image not found' });
  });
};
//# sourceMappingURL=aritcle.controller.js.map