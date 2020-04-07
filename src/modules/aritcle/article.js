import fs from 'fs';

export const formatArticleFields = (fields, files) => {
  const articleFields = {};

  const { title, description } = fields;

  if (title) articleFields.title = title;
  if (description) articleFields.description = description;

  if (files.image) {
    const {
      image: { path, type }
    } = files;

    articleFields.image = {};
    articleFields.image.data = fs.readFileSync(path);
    articleFields.image.contentType = type;
  }

  return articleFields;
};
