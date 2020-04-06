import mongoose from 'mongoose';

import { DB_URL } from '../constants';

mongoose.Promise = global.Promise;

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('debug', true);

try {
  mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
} catch (err) {
  mongoose.createConnection(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
}

mongoose.connection
  .once('open', () => console.log('MongoDB running'))
  .on('error', e => {
    throw e;
  });
