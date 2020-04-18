import React from 'react';

import Header from '../header/header.comp';
import LeftSideBar from '../left-sidebar/left-sidebar.comp';

import { Container, LayoutContainer, ContentsContainer } from './layout.styled';

export default function Layout({ children }) {
  return (
    <LayoutContainer>
      <LeftSideBar />

      <Container>
        <Header />
        <ContentsContainer>{children}</ContentsContainer>
      </Container>
    </LayoutContainer>
  );
}
