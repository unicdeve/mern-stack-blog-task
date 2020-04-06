import morgan from 'morgan';
import express from 'express';
import passport from 'passport';
import passportConfig from './check-auth';

import { isDev } from '../constants';

export default app => {
  app.use(morgan(isDev ? 'dev' : 'common'));
  app.use(express.json());
  app.use(passport.initialize());
  passportConfig(passport);
};
