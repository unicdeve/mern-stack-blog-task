import dotenv from 'dotenv';
dotenv.config();

export const isDev = process.env.NODE_ENV === 'development';

export const port = process.env.PORT || 5000;

export const DB_URL =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/mern-article';

export const SECRET_OR_KEY = process.env.SECRET_OR_KEY;

export const SALT = process.env.SALT;
