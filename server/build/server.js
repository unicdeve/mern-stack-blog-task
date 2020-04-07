'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _middlewares = require('./config/middlewares');

var _middlewares2 = _interopRequireDefault(_middlewares);

require('./config/db');

var _constants = require('./constants');

var _modules = require('./modules');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

(0, _middlewares2.default)(app);

// API routes
app.use('/api/v1/users', _modules.UserRoutes);
app.use('/api/v1/article', _modules.ArticleRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(_express2.default.static(path.join(__dirname, 'client/build')));

  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.get('/service-worker', function (req, res) {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js'));
});

app.listen(_constants.port, function (err) {
  if (err) console.log(err);else console.log('Server running on port ' + _constants.port);
});
//# sourceMappingURL=server.js.map