'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changePassword = exports.currentUser = exports.login = exports.register = undefined;

var _bcryptjs = require('bcryptjs');

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

var _user = require('./user.model');

var _user2 = _interopRequireDefault(_user);

var _constants = require('../../constants');

var _register = require('../../validations/register');

var _register2 = _interopRequireDefault(_register);

var _utils = require('../../constants/utils');

var _login = require('../../validations/login');

var _login2 = _interopRequireDefault(_login);

var _changePassword = require('../../validations/changePassword');

var _changePassword2 = _interopRequireDefault(_changePassword);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// Register User
var register = exports.register = function register(req, res) {
  var _validateRegisterInpu = (0, _register2.default)(req.body),
      errors = _validateRegisterInpu.errors,
      isValid = _validateRegisterInpu.isValid;

  // check validation


  if (!isValid) {
    return res.status(400).json(errors);
  }

  _user2.default.findOne({
    email: req.body.email
  }).then(function (user) {
    errors.email = 'Email already exist.';

    if (user) return res.status(400).json(errors);else {
      var newUser = new _user2.default({
        email: req.body.email,
        password: req.body.password
      });

      _bcryptjs2.default.genSalt(parseInt(_constants.SALT), function (err, salt) {
        _bcryptjs2.default.hash(newUser.password, salt, function (err, hash) {
          if (err) throw new Error(err);
          newUser.password = hash;

          newUser.save().then(function (user) {
            var token = (0, _utils.generateToken)(user);
            var _id = user._id,
                email = user.email;

            var data = {
              token: token,
              user: { _id: _id, email: email }
            };

            return res.status(201).json({ success: true, data: data });
          }).catch(function (err) {
            return console.log(err);
          });
        });
      });
    }
  });
};

var login = exports.login = function login(req, res) {
  var _validateLoginInput = (0, _login2.default)(req.body),
      isValid = _validateLoginInput.isValid,
      errors = _validateLoginInput.errors;

  if (!isValid) return res.status(400).json(errors);

  var _req$body = req.body,
      email = _req$body.email,
      inputPassword = _req$body.password;


  _user2.default.findOne({ email: email }).then(function (user) {
    if (!user) {
      // user not found
      errors.general = 'Wrong email/password';
      return res.status(400).json(errors);
    }

    var _id = user._id,
        email = user.email,
        password = user.password;


    _bcryptjs2.default.compare(inputPassword, password).then(function (isMatch) {
      if (isMatch) {
        var token = (0, _utils.generateToken)(user);
        var data = {
          token: token,
          user: {
            _id: _id,
            email: email
          }
        };

        return res.json({ success: true, data: data });
      } else {
        // wrong password
        errors.general = 'Wrong email/password';
        return res.status(400).json(errors);
      }
    });
  });
};

var currentUser = exports.currentUser = function currentUser(req, res) {
  return res.json({
    id: req.user.id,
    email: req.user.email,
    createdAt: req.user.createdAt,
    updatedAt: req.user.updatedAt,
    role: req.user.role
  });
};

var changePassword = exports.changePassword = function changePassword(req, res) {
  var _validateChangePasswo = (0, _changePassword2.default)(req.body),
      errors = _validateChangePasswo.errors,
      isValid = _validateChangePasswo.isValid;

  if (!isValid) return res.status(400).json(errors);

  var _req$body2 = req.body,
      password = _req$body2.password,
      newPassword = _req$body2.newPassword;


  _user2.default.findById(req.user.id).then(function (user) {
    _bcryptjs2.default.compare(password, user.password).then(function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(isMatch) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (isMatch) {
                  _context.next = 3;
                  break;
                }

                errors.general = 'Wrong password, please try again.';
                return _context.abrupt('return', res.status(400).json(errors));

              case 3:
                _context.next = 5;
                return _bcryptjs2.default.hash(newPassword, parseInt(_constants.SALT));

              case 5:
                user.password = _context.sent;


                user.save().then(function () {
                  return res.status(201).json({ success: 'Password successfully changed.' });
                }).catch(function () {
                  errors.general = 'An error occured while trying to change your password, please try again';
                  return res.status(500).json(errors);
                });

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, undefined);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  });
};
//# sourceMappingURL=user.controller.js.map