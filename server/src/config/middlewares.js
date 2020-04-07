import morgan from 'morgan';
import express from 'express';
import passport from 'passport';
import cors from 'cors';
import compression from 'compression';
import enforce from 'express-sslify';

import passportConfig from './check-auth';

import { isDev } from '../constants';

export default app => {
  app.use(morgan(isDev ? 'dev' : 'common'));
  app.use(compression());
  app.use(express.json());
  app.use(passport.initialize());
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
  app.use(cors());
  passportConfig(passport);
};
