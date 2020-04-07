'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _expressSslify = require('express-sslify');

var _expressSslify2 = _interopRequireDefault(_expressSslify);

var _checkAuth = require('./check-auth');

var _checkAuth2 = _interopRequireDefault(_checkAuth);

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app) {
  app.use((0, _morgan2.default)(_constants.isDev ? 'dev' : 'common'));
  app.use((0, _compression2.default)());
  app.use(_express2.default.json());
  app.use(_passport2.default.initialize());
  app.use((0, _cors2.default)());
  // app.use(enforce.HTTPS({ trustProtoHeader: true }));
  (0, _checkAuth2.default)(_passport2.default);
};
//# sourceMappingURL=middlewares.js.map