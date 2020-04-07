import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ArticleWrapper = styled.div`
  display: flex;
  margin-bottom: 3rem;
  border-radius: 2rem 0 0 2rem;
  box-shadow: 0px 16px 24px #50b0f117;

  @media screen and (max-width: 800px) {
    border-radius: 0.5rem 0 0 0.5rem;
  }
`;

export const ArticleImageWrapper = styled.div`
  width: 10rem;

  @media screen and (max-width: 800px) {
    width: 5rem;
  }
`;

export const ArticleImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 2rem 0 0 2rem;

  @media screen and (max-width: 800px) {
    border-radius: 0.5rem 0 0 0.5rem;
  }
`;

export const ArticleContentContainer = styled.div`
  margin-left: 2rem;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 800px) {
    margin-left: 0.2rem;
  }

  .title {
    font-size: 2rem;
    font-weight: 500;
    color: #51b0f1;
    text-transform: capitalize;
    transition: all 0.3s;

    @media screen and (max-width: 800px) {
      font-size: 0.9rem;
    }

    &:hover {
      background: rgba(81, 176, 241, 0.12);
    }
  }

  .article-user,
  .timesince {
    color: #c2c2c2;
  }

  .timesince {
    font-size: 0.7rem;
    font-weight: 500;
  }

  .article-user {
    font-size: 1.2rem;
    font-weight: 500;

    @media screen and (max-width: 800px) {
      font-size: 0.7rem;
    }
  }

  .description {
    font-size: 1rem;
    margin-top: 0.9rem;
  }
`;

export const ArticleTitle = styled(Link)`
  text-decoration: none;
`;
