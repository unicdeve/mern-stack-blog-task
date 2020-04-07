import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import setAuthToken from './utils/setAuthToken';
import isEmpty from './utils/isEmpty';
import authTypes from './redux/auth/auth.types';

import AppRoute from './utils/app-route';
import GlobalStyle from './global-styles';
import LoginPage from './pages/login/login.page';
import HomePage from './pages/home/home.page';
import Layout from './components/layout/layout.comp';

function App({ dispatch }) {
  let userAuth = !isEmpty(localStorage.auth);

  React.useEffect(() => {
    if (userAuth) {
      const auth = JSON.parse(localStorage.getItem('auth'));

      setAuthToken(auth.token);

      dispatch({
        type: authTypes.SIGN_IN_SUCCESS,
        payload: auth.data
      });
    }
  }, [userAuth, dispatch]);

  return (
    <Switch>
      <AppRoute exact path='/' layout={Layout} component={HomePage} />
      <Route exact path='/login' component={LoginPage} />

      <GlobalStyle />
    </Switch>
  );
}

export default connect(null)(App);
