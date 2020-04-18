import React from 'react';
import {
  StyledActions,
  ActionsContainer,
  ActionWrapper
} from './article-actions.styled';

export default function ArticleActions() {
  return (
    <StyledActions>
      <ActionsContainer>
        <ActionWrapper>
          <i className='fas fa-comment' />
          <span>2</span>
        </ActionWrapper>

        <ActionWrapper>
          <i className='fas fa-retweet' />
          <span>2</span>
        </ActionWrapper>

        <ActionWrapper>
          <i className='fas fa-heart' />
          <span>2</span>
        </ActionWrapper>

        <ActionWrapper>
          <i className='fas fa-project-diagram' />
        </ActionWrapper>
      </ActionsContainer>
    </StyledActions>
  );
}
