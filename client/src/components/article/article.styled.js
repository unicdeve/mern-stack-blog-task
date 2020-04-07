import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ArticleWrapper = styled.div`
  display: flex;
  margin-bottom: 3rem;
  border-radius: 2rem 0 0 2rem;
  box-shadow: 0px 16px 24px #50b0f117;
`;

export const ArticleImageWrapper = styled.div`
  width: 10rem;
`;

export const ArticleImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 2rem 0 0 2rem;
`;

export const ArticleContentContainer = styled.div`
  margin-left: 2rem;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .title {
    font-size: 2rem;
    font-weight: 500;
    color: #51b0f1;
    text-transform: capitalize;
    transition: all 0.3s;

    &:hover {
      background: rgba(81, 176, 241, 0.12);
    }
  }

  .article-user,
  .timesince {
    color: #c2c2c2;
  }

  .timesince {
    font-size: 0.8rem;
    font-weight: 500;
  }

  .article-user {
    font-size: 1.2rem;
    font-weight: 500;
  }

  .description {
    font-size: 1rem;
    margin-top: 0.9rem;
  }
`;

export const ArticleTitle = styled(Link)`
  text-decoration: none;
`;
