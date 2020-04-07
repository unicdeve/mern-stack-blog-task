'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = validateLoginInput;

var _validator = require('validator');

var _validator2 = _interopRequireDefault(_validator);

var _isEmpty = require('./isEmpty');

var _isEmpty2 = _interopRequireDefault(_isEmpty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validateLoginInput(data) {
  var errors = {};

  data.email = !(0, _isEmpty2.default)(data.email) ? data.email : '';
  data.password = !(0, _isEmpty2.default)(data.password) ? data.password : '';

  if (!_validator2.default.isEmail(data.email)) {
    errors.email = 'Please enter a valid email';
  }

  if (_validator2.default.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  if (_validator2.default.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  return {
    errors: errors,
    isValid: (0, _isEmpty2.default)(errors)
  };
}
//# sourceMappingURL=login.js.map