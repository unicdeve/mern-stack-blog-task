import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { selectIsAuthenticated } from '../redux/auth/auth.selector';
import { createStructuredSelector } from 'reselect';

function AppRoute({
  component: Component,
  layout: Layout,
  isAuthenticated,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated === true ? (
          <Layout>
            <Component {...props} />
          </Layout>
        ) : (
          <Redirect to={'/login'} />
        )
      }
    />
  );
}

const mapStateToProps = createStructuredSelector({
  isAuthenticated: selectIsAuthenticated
});

export default connect(mapStateToProps)(AppRoute);
