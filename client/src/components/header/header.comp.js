import React from 'react';

import { StyledHeader, Container, NavLink } from './header.styled';

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <div className='nav'>
          <NavLink to='/'>Articles</NavLink>
          <NavLink to='/create-new-article'>New Article</NavLink>
          <NavLink to='/explore/articles'>Explore</NavLink>
        </div>

        <div className='auth-nav'>
          <NavLink to='/login'>Login</NavLink>
        </div>
      </Container>
    </StyledHeader>
  );
}
