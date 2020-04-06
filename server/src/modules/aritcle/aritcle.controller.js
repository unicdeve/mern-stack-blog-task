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

    Article.findOne({
      _id: fields.articleId,
      user: req.user.id
    }).then(article => {
      if (!article) {
        if (articleFields.image && articleFields.image.data) {
          const newArticle = new Article(articleFields);
          newArticle
            .save()
            .then(article => res.json(article))
            .catch(err => {
              errors.general = 'There was an error saving your article';
              return res.status(500).json(errors);
            });
        }
        errors.image = 'Image is required';
        return res.status(400).json(errors);
      }
      // update article
      else {
        Article.findOneAndUpdate(
          { user: req.user.id },
          { $set: articleFields },
          { new: true }
        )
          .then(article => res.json(article))
          .catch(err => {
            errors.general = 'There was an error updating your article';
            return res.status(500).json(errors);
          });
      }
    });
  });
};
