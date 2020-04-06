import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import {
  ArticleImage,
  ArticleWrapper,
  ArticleImageWrapper,
  ArticleContentContainer,
  ArticleTitle
} from './article.styled';

export default function Article({ article }) {
  const {
    _id: id,
    title,
    description,
    createdAt,
    user: { email }
  } = article;

  const username = email.split('@')[0];
  dayjs.extend(relativeTime);
  return (
    <ArticleWrapper>
      <ArticleImageWrapper>
        <ArticleImage
          key={id}
          src={`http://127.0.0.1:4000/api/v1/article/${id}/image/`}
          width='100'
          alt='article-img'
        />
      </ArticleImageWrapper>

      <ArticleContentContainer>
        <ArticleTitle to={`/explore/article/${id}`} className='title'>
          {title}
        </ArticleTitle>
        <div className='article-user'>@{username}</div>
        <div className='timesince'>{dayjs(createdAt).fromNow()}</div>
        <div className='description'>{description}</div>
      </ArticleContentContainer>
    </ArticleWrapper>
  );
}
