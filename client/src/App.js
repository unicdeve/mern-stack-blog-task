import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AppRoute from './utils/app-route';
import LoginPage from './pages/login/login.page';
import HomePage from './pages/home/home.page';
import Layout from './components/layout/layout.comp';

function App() {
  return (
    <Switch>
      <AppRoute exact path='/' layout={Layout} component={HomePage} />
      <Route exact path='/login' component={LoginPage} />
    </Switch>
  );
}

export default App;
