import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.div`
  background: #fff;
  padding: 14px;
  box-shadow: 0px 16px 24px #50b0f117;
  width: 100%;
  transition: all 0.7s;
`;

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;

  .nav {
    display: flex;
    flex-grow: 2;
    justify-content: center;
  }

  .auth-nav {
    padding-right: 15rem;
  }
`;

export const NavLink = styled(Link)`
  color: #51b0f1;
  text-decoration: none;
  padding: 5px 10px;
`;
