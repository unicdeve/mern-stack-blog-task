import React from 'react';

import Header from '../header/header.comp';
import { Container } from './layout.styled';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
}
