import express from 'express';

import middlewaresConfig from './config/middlewares';
import './config/db';
import { port } from './constants';
import { UserRoutes, ArticleRoutes } from './modules';

const app = express();

middlewaresConfig(app);

// API routes
app.use('/api/v1/users', UserRoutes);
app.use('/api/v1/article', ArticleRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.get('/service-worker', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js'));
});

app.listen(port, err => {
  if (err) console.log(err);
  else console.log(`Server running on port ${port}`);
});
