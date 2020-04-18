import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledSideBar = styled.div`
  padding: 14px 0;
  margin-right: 2rem;
`;

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  transition: all 0.7s;
  position: sticky;
  top: 0px;
  z-index: 1000;
  background-color: ${({ theme }) => theme.colors.background};
  backface-visibility: hidden;
`;

export const ItemLink = styled(Link)`
  display: flex;
  width: 100%;
  text-decoration: none;
  padding: 10px 15px;
  margin-bottom: 1.2rem;
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: 800;
  font-size: 1.5rem;
  border-radius: 24px;
  transition: all 0.7s;

  span {
    margin-left: 1.1rem;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.hoverColor};
    background: ${({ theme }) => theme.colors.hoverBg};
  }
`;

export const ItemIcon = styled.i`
  text-decoration: none;
`;
