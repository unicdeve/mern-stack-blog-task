import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textColor};
    min-height: 100vh;
    margin: 0;
    padding: 0;
    transition: all 0.45s linear;
  }
`;

export default GlobalStyle;
