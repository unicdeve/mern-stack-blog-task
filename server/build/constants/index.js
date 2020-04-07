'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SALT = exports.SECRET_OR_KEY = exports.DB_URL = exports.port = exports.isDev = undefined;

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

var isDev = exports.isDev = process.env.NODE_ENV === 'development';

var port = exports.port = process.env.PORT || 5000;

var DB_URL = exports.DB_URL = process.env.DB_URL;

var SECRET_OR_KEY = exports.SECRET_OR_KEY = process.env.SECRET_OR_KEY;

var SALT = exports.SALT = process.env.SALT;
//# sourceMappingURL=index.js.map