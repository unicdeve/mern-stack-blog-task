import styled from 'styled-components';

export const LayoutContainer = styled.div`
  max-width: 100%;
  min-height: 100%;
  display: flex;
  margin: 0rem 15%;

  @media screen and (max-width: 800px) {
    margin: 0;
  }
`;

export const Container = styled.div`
  max-width: 50%;
  width: 47%;
  min-height: 100vh;
  border: ${({ theme }) => theme.colors.tinyBorder};

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const ContentsContainer = styled.div``;
