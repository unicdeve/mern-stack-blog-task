'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateToken = undefined;

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _ = require('.');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var generateToken = exports.generateToken = function generateToken(user) {
  var payload = {
    id: user.id,
    email: user.email
  };
  return _jsonwebtoken2.default.sign(payload, _.SECRET_OR_KEY, { expiresIn: '24h' });
};
//# sourceMappingURL=utils.js.map