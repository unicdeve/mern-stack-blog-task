import styled from 'styled-components';

export const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 4rem;
`;

export const ArticleActionsWrapper = styled.div`
  text-align: right;
`;

export const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 0.2px solid rgba(0, 0, 0, 0.25);
  height: 100%;
`;

export const ArticleImageWrapper = styled.div`
  height: 60vh;
`;

export const ArticleImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const ArticleContentContainer = styled.div`
  margin-left: 2rem;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 800px) {
    margin-left: 0;
  }

  .title {
    font-size: 2rem;
    font-weight: 500;
    color: #51b0f1;
    text-transform: capitalize;
    transition: all 0.3s;

    @media screen and (max-width: 800px) {
      font-size: 1rem;
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
    font-size: 0.8rem;
    font-weight: 500;
  }

  .article-user {
    font-size: 1.2rem;
    font-weight: 500;

    @media screen and (max-width: 800px) {
      font-size: 0.8rem;
    }
  }

  .description {
    font-size: 1rem;
    margin-top: 0.9rem;
  }
`;
