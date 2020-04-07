import jwt from 'jsonwebtoken';
import { SECRET_OR_KEY } from '.';

export const generateToken = user => {
  const payload = {
    id: user.id,
    email: user.email
  };
  return jwt.sign(payload, SECRET_OR_KEY, { expiresIn: '24h' });
};
