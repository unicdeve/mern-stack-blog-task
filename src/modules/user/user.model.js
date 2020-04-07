import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
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
  },
  { timestamps: true }
);

// userSchema.index({ email: 1 });

export default model('user', userSchema);
