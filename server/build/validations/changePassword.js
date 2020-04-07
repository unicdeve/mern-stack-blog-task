'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = validateChangePasswordInput;

var _validator = require('validator');

var _validator2 = _interopRequireDefault(_validator);

var _isEmpty = require('./isEmpty');

var _isEmpty2 = _interopRequireDefault(_isEmpty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validateChangePasswordInput(data) {
  var password = data.password,
      newPassword = data.newPassword,
      confirmPassword = data.confirmPassword;

  var errors = {};

  password = !(0, _isEmpty2.default)(password) ? password : '';
  newPassword = !(0, _isEmpty2.default)(newPassword) ? newPassword : '';
  confirmPassword = !(0, _isEmpty2.default)(confirmPassword) ? confirmPassword : '';

  if (_validator2.default.isEmpty(password)) {
    errors.password = 'Please enter your current password';
  }

  if (!_validator2.default.isLength(newPassword, { min: 6, max: 30 })) errors.newPassword = 'New password must be at least 6 characters';

  if (_validator2.default.isEmpty(confirmPassword)) errors.confirmPassword = 'Confirm Password field is required';

  if (!_validator2.default.equals(newPassword, confirmPassword)) errors.confirmPassword = 'Both passwords must match';

  return {
    errors: errors,
    isValid: (0, _isEmpty2.default)(errors)
  };
}
//# sourceMappingURL=changePassword.js.map