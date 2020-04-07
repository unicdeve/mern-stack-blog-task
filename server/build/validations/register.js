'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = validateRegisterInput;

var _validator = require('validator');

var _validator2 = _interopRequireDefault(_validator);

var _isEmpty = require('./isEmpty');

var _isEmpty2 = _interopRequireDefault(_isEmpty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validateRegisterInput(data) {
  var errors = {};

  data.email = !(0, _isEmpty2.default)(data.email) ? data.email : '';
  data.password = !(0, _isEmpty2.default)(data.password) ? data.password : '';
  data.password2 = !(0, _isEmpty2.default)(data.password2) ? data.password2 : '';

  if (_validator2.default.isEmpty(data.email)) errors.email = 'Email field is required';

  if (!_validator2.default.isEmail(data.email)) errors.email = 'Please enter a valid email';

  if (_validator2.default.isEmpty(data.password)) errors.password = 'Password field is required';

  if (!_validator2.default.isLength(data.password, { min: 6, max: 30 })) errors.password = 'Password must be at least 6 characters';

  if (_validator2.default.isEmpty(data.password2)) errors.password2 = 'Confirm Password field is required';

  if (!_validator2.default.equals(data.password, data.password2)) errors.password2 = 'Both passwords must match';

  return {
    errors: errors,
    isValid: (0, _isEmpty2.default)(errors)
  };
}
//# sourceMappingURL=register.js.map