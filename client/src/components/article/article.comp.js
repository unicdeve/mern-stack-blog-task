import React from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import {
  UserImage,
  ArticleWrapper,
  UserImageWrapper,
  ArticleContentContainer,
  ArticleUser,
  ArticleImageWrapper,
  ArticleImage
} from './article.styled';
import ArticleActions from '../article-actions/article-actions.comp';

export default function Article({ article }) {
  const {
    _id: id,
    description,
    createdAt,
    user: { email, _id }
  } = article;

  const username = email.split('@')[0];
  dayjs.extend(relativeTime);
  return (
    <ArticleWrapper>
      <Link to={`/user/${_id}`}>
        <UserImageWrapper>
          <UserImage
            src={`http://127.0.0.1:4000/api/v1/article/${id}/image/`}
            alt='article-img'
          />
        </UserImageWrapper>
      </Link>

      <ArticleContentContainer>
        <ArticleUser to={`/user/${_id}`}>
          <span className='full-name'>Taiwo Ogunola</span>@{username}
          <span className='dot'> . </span>
          <span className='timesince'>{dayjs(createdAt).fromNow()}</span>
        </ArticleUser>

        <div className='text'>{description}</div>

        {/* TODO: place tweet image here if any */}
        <Link to={`/articles/${id}`}>
          <ArticleImageWrapper>
            <ArticleImage
              src={`http://127.0.0.1:4000/api/v1/article/${id}/image/`}
              alt='article-img'
            />
          </ArticleImageWrapper>
        </Link>

        <ArticleActions />
      </ArticleContentContainer>
    </ArticleWrapper>
  );
}
