'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _passportJwt = require('passport-jwt');

var _index = require('../constants/index');

var _user = require('../modules/user/user.model');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var opts = {};
opts.jwtFromRequest = _passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = _index.SECRET_OR_KEY;

exports.default = function (passport) {
  passport.use(new _passportJwt.Strategy(opts, function (jwt_payload, done) {
    _user2.default.findById(jwt_payload.id).then(function (user) {
      if (user) return done(null, user);

      return done(null, false);
    }).catch(function (err) {
      return console.log(err);
    });
  }));
};
//# sourceMappingURL=check-auth.js.map