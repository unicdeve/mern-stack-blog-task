import express from 'express';
import middlewaresConfig from './config/middlewares';
import './config/db';
import { port } from './constants';
import { UserRoutes } from './modules';

const app = express();

middlewaresConfig(app);

// API routes
app.use('/api/v1/users', UserRoutes);

app.listen(port, err => {
  if (err) console.log(err);
  else console.log(`Server running on port ${port}`);
});
