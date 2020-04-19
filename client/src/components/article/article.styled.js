import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ArticleWrapper = styled.div`
  display: flex;
  border-bottom: ${({ theme }) => theme.colors.tinyBorder};
  padding: 10px;

  @media screen and (max-width: 800px) {
    border-radius: 0.5rem 0 0 0.5rem;
  }
`;

export const UserImageWrapper = styled.div`
  width: 4rem;
  height: 4rem;

  @media screen and (max-width: 800px) {
    width: 3rem;
    height: 3rem;
  }
`;

export const UserImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

export const ArticleContentContainer = styled.div`
  margin-left: 1rem;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 800px) {
    margin-left: 0.2rem;
  }

  .text {
    font-size: 1rem;
    margin-top: 0.3rem;
  }
`;

export const ArticleUser = styled(Link)`
  color: #c2c2c2;
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: 500;

  @media screen and (max-width: 800px) {
    font-size: 0.6rem;
  }

  span.full-name {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.textColor};
    padding-right: 5px;
    font-weight: 600;
  }

  span.dot {
    margin-top: 50%;
    color: #c2c2c2;
    height: 100%;
    width: 100%;
  }
`;

export const ArticleImageWrapper = styled.div`
  width: 25vw;
  height: 15rem;
  margin-top: 1rem;

  @media screen and (max-width: 800px) {
    width: 100%;
    height: 10rem;
  }
`;

export const ArticleImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
`;
