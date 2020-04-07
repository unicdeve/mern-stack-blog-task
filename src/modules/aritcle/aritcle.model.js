import { Schema, model } from 'mongoose';

export const SEX_ENUM = ['male', 'female'];

const articleSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
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
  },
  { timestamps: true }
);

export default model('article', articleSchema);
