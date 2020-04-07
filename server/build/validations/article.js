'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = validateArticleInput;

var _validator = require('validator');

var _validator2 = _interopRequireDefault(_validator);

var _isEmpty = require('./isEmpty');

var _isEmpty2 = _interopRequireDefault(_isEmpty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validateArticleInput(data) {
  var title = data.title,
      description = data.description;


  var errors = {};

  title = !(0, _isEmpty2.default)(title) ? title : '';
  description = !(0, _isEmpty2.default)(description) ? description : '';

  if (_validator2.default.isEmpty(title)) {
    errors.title = 'title is required';
  }

  if (_validator2.default.isEmpty(description)) {
    errors.description = 'Description is required';
  }

  return {
    errors: errors,
    isValid: (0, _isEmpty2.default)(errors)
  };
}
//# sourceMappingURL=article.js.map