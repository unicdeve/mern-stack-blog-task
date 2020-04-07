'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _user = require('./user.controller');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

// @route POST api/v1/users/register
// @desc Register User  - Returning JWT token
// @access Public
router.post('/register', _user.register);

// @route POST api/users/login
// @desc User Login  -  Returning JWT token
// @access Public
router.post('/login', _user.login);

// @route GET api/users/current
// @desc Return current user
// @access Private
router.get('/current-user', _passport2.default.authenticate('jwt', { session: false }), _user.currentUser);

// @route POST api/users/change-password
// @desc Change password
// @access Private
router.post('/change-password', _passport2.default.authenticate('jwt', { session: false }), _user.changePassword);

exports.default = router;
//# sourceMappingURL=user.routes.js.map