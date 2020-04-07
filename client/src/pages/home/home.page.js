import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { getUserArticles } from '../../redux/article/article.action';
import {
  selectArticles,
  selectArticleLoading
} from '../../redux/article/articles.selector';
import Articles from '../../components/articles/articles.comp';
import { selectIsAuthenticated } from '../../redux/auth/auth.selector';

function HomePage(props) {
  const { articles, getArticles, isAuthenticated, loading } = props;

  useEffect(() => {
    if (isAuthenticated) {
      getArticles();
    }
  }, [getArticles, isAuthenticated]);

  return <Articles articles={articles} loading={loading} />;
}

const mapStateToProps = createStructuredSelector({
  articles: selectArticles,
  loading: selectArticleLoading,
  isAuthenticated: selectIsAuthenticated
});

const mapDispatchToProps = {
  getArticles: getUserArticles
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
