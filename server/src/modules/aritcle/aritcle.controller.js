import formidable from 'formidable';

import Article from './aritcle.model';
import validateArticleInput from '../../validations/article';
import { formatArticleFields } from './article';

// create or edit User Article
export const createEditArticle = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;

  form.parse(req, (err, fields, files) => {
    if (err)
      return res.status(400).json({
        error: 'Image could not be uploaded'
      });

    // validate fields object here
    const { errors, isValid } = validateArticleInput(fields);

    // if (!isValid) return res.status(400).json(errors);

    const articleFields = formatArticleFields(fields, files);
    articleFields.user = req.user.id;

    console.log('fields.articleId', fields.articleId);

    Article.findOne({
      _id: fields.articleId,
      user: req.user.id
    })
      .then(article => {
        if (!article) {
          if (articleFields.image && articleFields.image.data) {
            const newArticle = new Article(articleFields);
            newArticle
              .save()
              .then(article => res.json(article))
              .catch(err => {
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
          Article.findOneAndUpdate(
            { _id: fields.articleId },
            { $set: articleFields },
            { new: true }
          )
            .populate('user', 'email')
            .then(article => res.json(article))
            .catch(err => {
              errors.general = 'There was an error updating your article';
              return res.status(500).json(errors);
            });
        }
      })
      .catch(err => console.log(err));
  });
};

// get current user's articles
export const userArticles = (req, res) => {
  const errors = {};
  Article.find({ user: req.user.id })
    .populate('user', 'email')
    .then(article => {
      if (!article) {
        errors.noArticle = 'You have no article yet.';
        return res.status(400).json(errors);
      }
      return res.json(article);
    })
    .catch(() => {
      errors.noArticle = 'An error occured while finding your article';
      return res.status(400).json(errors);
    });
};

// get all articles
export const getArticles = (_, res) => {
  const errors = {};
  Article.find({})
    .populate('user', 'email')
    .then(article => {
      if (!article) {
        errors.noArticle = 'You have no article yet.';
        return res.status(400).json(errors);
      }
      return res.json(article);
    })
    .catch(() => {
      errors.noArticle = 'An error occured while finding your article';
      return res.status(400).json(errors);
    });
};

// get article by ID
export const getArticleById = (req, res) => {
  const errors = {};
  Article.findById(req.params.articleId)
    .populate('user', 'email')
    .then(article => {
      if (!article) {
        errors.noArticle = 'You have no article yet.';
        return res.status(400).json(errors);
      }
      return res.json(article);
    })
    .catch(() => {
      errors.noArticle = 'An error occured while finding your article';
      return res.status(400).json(errors);
    });
};

export const getArticleImage = (req, res) => {
  Article.findById(req.params.articleId)
    .populate('user', 'email')
    .then(article => {
      if (article) {
        res.set('Content-Type', article.image.contentType);
        return res.send(article.image.data);
      }
      return res.status(404).json({ error: 'Image not found' });
    });
};
