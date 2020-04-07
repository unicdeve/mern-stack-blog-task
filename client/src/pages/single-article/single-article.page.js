import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import { getArticle } from '../../redux/article/article.action';
import {
  selectArticleLoading,
  selectSingleArticle
} from '../../redux/article/articles.selector';
import {
  ArticleContainer,
  ArticleActionsWrapper,
  ArticleWrapper,
  ArticleImageWrapper,
  ArticleImage,
  ArticleContentContainer
} from './single-article.styled';
import CustomButton from '../../components/custom-button/custom-button.comp';
import { selectCurrentUser } from '../../redux/auth/auth.selector';
import ArticleForm from '../../components/article-form/article-form.comp';

function SingleArticle({ match, dispatch, article, currentUser }) {
  const [formVisible, setFormVisible] = useState(false);

  const showForm = () => setFormVisible(true);

  const closeForm = () => setFormVisible(false);

  const articleId = match.params.articleId;
  useEffect(() => {
    if (articleId) {
      dispatch(getArticle(articleId));
    }
  }, [articleId, dispatch]);

  const { _id: id, title, createdAt, description, user } = article;

  dayjs.extend(relativeTime);

  return (
    <>
      {article ? (
        <ArticleContainer>
          <ArticleActionsWrapper>
            {currentUser && user && currentUser._id === user._id && (
              <>
                {formVisible ? (
                  <CustomButton noBackground onClick={closeForm}>
                    Cancel
                  </CustomButton>
                ) : (
                  <CustomButton noBackground onClick={showForm}>
                    Edit
                  </CustomButton>
                )}
              </>
            )}
          </ArticleActionsWrapper>

          {!formVisible ? (
            <ArticleWrapper>
              <ArticleImageWrapper>
                <ArticleImage
                  src={`http://127.0.0.1:4000/api/v1/article/${id}/image/`}
                  alt='article-img'
                />

                <ArticleContentContainer>
                  <div className='title'>{title}</div>
                  <div className='article-user'>
                    @{user && user.email.split('@')[0]}
                  </div>
                  <div className='timesince'>{dayjs(createdAt).fromNow()}</div>
                  <div className='description'>{description}</div>
                </ArticleContentContainer>
              </ArticleImageWrapper>
            </ArticleWrapper>
          ) : (
            <>
              <div className='auth-container'>
                <h1 className='auth-header'>Edit Article</h1>
                <ArticleForm article={article} />
              </div>
            </>
          )}
        </ArticleContainer>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  article: selectSingleArticle,
  loading: selectArticleLoading,
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(SingleArticle);
