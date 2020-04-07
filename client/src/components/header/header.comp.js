import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { StyledHeader, Container, NavLink } from './header.styled';
import {
  selectIsAuthenticated,
  selectCurrentUser
} from '../../redux/auth/auth.selector';

function Header({ isAuthenticated, currentUser }) {
  const { email } = currentUser;

  return (
    <StyledHeader>
      <Container>
        <div className='nav'>
          <NavLink to='/'>Articles</NavLink>
          <NavLink to='/create-new-article'>New Article</NavLink>
          <NavLink to='/explore/articles'>Explore</NavLink>
        </div>

        <div className='auth-nav'>
          {isAuthenticated ? (
            <NavLink to='/'>Hi {email.split('@')[0]}</NavLink>
          ) : (
            <NavLink to='/login'>Login</NavLink>
          )}
        </div>
      </Container>
    </StyledHeader>
  );
}

const mapStateToProps = createStructuredSelector({
  isAuthenticated: selectIsAuthenticated,
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(Header);
