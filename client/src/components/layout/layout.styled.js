import styled from 'styled-components';

export const LayoutContainer = styled.div`
  max-width: 100%;
  display: flex;
  margin: 0rem 15%;

  @media screen and (max-width: 800px) {
    margin: 0;
  }
`;

export const Container = styled.div`
  width: 55%;
  border: ${({ theme }) => theme.colors.tinyBorder};

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const ContentsContainer = styled.div``;
