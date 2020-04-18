import styled from 'styled-components';

export const LayoutContainer = styled.div`
  max-width: 100%;
  display: flex;
  margin: 0rem 15%;
`;

export const Container = styled.div`
  width: 55%;
  border: ${({ theme }) => theme.colors.tinyBorder};

  @media screen and (max-width: 800px) {
    /* padding: 2rem 10px; */
  }
`;

export const ContentsContainer = styled.div`
  padding: 10px;
`;
