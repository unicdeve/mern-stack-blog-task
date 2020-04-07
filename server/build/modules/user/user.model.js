'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var userSchema = new _mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: 1
  },

  password: {
    type: String,
    required: true,
    minlength: 6
  }
}, { timestamps: true });

// userSchema.index({ email: 1 });

exports.default = (0, _mongoose.model)('user', userSchema);
//# sourceMappingURL=user.model.js.map