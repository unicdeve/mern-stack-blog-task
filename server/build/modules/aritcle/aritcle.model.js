'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEX_ENUM = undefined;

var _mongoose = require('mongoose');

var SEX_ENUM = exports.SEX_ENUM = ['male', 'female'];

var articleSchema = new _mongoose.Schema({
  user: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },

  title: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  image: {
    data: Buffer,
    contentType: String
  }
}, { timestamps: true });

exports.default = (0, _mongoose.model)('article', articleSchema);
//# sourceMappingURL=aritcle.model.js.map