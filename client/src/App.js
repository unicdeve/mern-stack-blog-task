import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import lightTheme from './theme/light';
import darkTheme from './theme/dark';

import setAuthToken from './utils/setAuthToken';
import isEmpty from './utils/isEmpty';
import authTypes from './redux/auth/auth.types';

import AppRoute from './utils/app-route';
import GlobalStyle from './global-styles';
import LoginPage from './pages/login/login.page';
import HomePage from './pages/home/home.page';
import Layout from './components/layout/layout.comp';
import SigninPage from './pages/signup/signup.page';
import ExplorePage from './pages/explore/explore.page';
import CreateArticle from './pages/create-article/create-article.page';
import SingleArticle from './pages/single-article/single-article.page';

function App({ dispatch }) {
  let userAuth = !isEmpty(localStorage.auth);

  React.useEffect(() => {
    if (userAuth) {
      const auth = JSON.parse(localStorage.getItem('auth'));

      setAuthToken(auth.token);

      dispatch({
        type: authTypes.SIGN_IN_SUCCESS,
        payload: auth
      });
    }
  }, [userAuth, dispatch]);

  const stored = localStorage.getItem('isDarkMode');
  const [isDarkMode, setIsDarkMode] = React.useState(
    stored === 'true' ? true : false
  );

  const darkModeClicked = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('isDarkMode', !isDarkMode);
  };

  return (
    <Switch>
      <ThemeProvider theme={darkTheme}>
        <>
          <GlobalStyle />

          <Route exact path='/login' component={LoginPage} />

          <Route exact path='/signup' component={SigninPage} />

          <AppRoute
            exact
            path='/create/new-article'
            layout={Layout}
            component={CreateArticle}
          />

          <AppRoute
            exact
            path='/:articleId'
            layout={Layout}
            component={SingleArticle}
          />

          <AppRoute exact path='/' layout={Layout} component={HomePage} />

          <AppRoute
            exact
            path='/explore/articles'
            layout={Layout}
            component={ExplorePage}
          />
        </>
      </ThemeProvider>
    </Switch>
  );
}

export default connect(null)(App);
