'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatArticleFields = undefined;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var formatArticleFields = exports.formatArticleFields = function formatArticleFields(fields, files) {
  var articleFields = {};

  var title = fields.title,
      description = fields.description;


  if (title) articleFields.title = title;
  if (description) articleFields.description = description;

  if (files.image) {
    var _files$image = files.image,
        path = _files$image.path,
        type = _files$image.type;


    articleFields.image = {};
    articleFields.image.data = _fs2.default.readFileSync(path);
    articleFields.image.contentType = type;
  }

  return articleFields;
};
//# sourceMappingURL=article.js.map