'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = global.Promise;

_mongoose2.default.set('useFindAndModify', false);
_mongoose2.default.set('useCreateIndex', true);
_mongoose2.default.set('debug', true);

try {
  _mongoose2.default.connect(_constants.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
} catch (err) {
  _mongoose2.default.createConnection(_constants.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
}

_mongoose2.default.connection.once('open', function () {
  return console.log('MongoDB running');
}).on('error', function (e) {
  throw e;
});
//# sourceMappingURL=db.js.map