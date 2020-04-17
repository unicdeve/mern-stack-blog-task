import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.div`
  /* background: #fff; */
  padding: 14px;
  /* box-shadow: 0px 16px 24px #50b0f117; */
  border-bottom: ${({ theme }) => theme.colors.tinyBorder};
  max-width: 100%;
  transition: all 0.7s;
  position: sticky;
  top: 0px;
  z-index: 1000;
  background-color: ${({ theme }) => theme.colors.background};
  backface-visibility: hidden;

  @media screen and (max-width: 800px) {
    padding: 10px;
  }
`;

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;

  .nav {
    display: flex;
    flex-grow: 2;
    justify-content: center;

    @media screen and (max-width: 800px) {
      justify-content: start;
    }
  }

  .auth-nav {
    padding-right: 15rem;

    @media screen and (max-width: 800px) {
      padding-right: 0.5rem;
    }
  }

  @media screen and (max-width: 800px) {
    padding: 5px 10px;
  }
`;

export const NavLink = styled(Link)`
  color: #51b0f1;
  text-decoration: none;
  padding: 5px 10px;

  @media screen and (max-width: 800px) {
    padding: 5px;
    font-size: 80%;
  }
`;
