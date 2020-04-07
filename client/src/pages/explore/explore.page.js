import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { getAllArticles } from '../../redux/article/article.action';
import {
  selectArticleLoading,
  selectExploreArticles
} from '../../redux/article/articles.selector';
import Articles from '../../components/articles/articles.comp';

function ExplorePage(props) {
  const { articles, getArticles, loading } = props;

  useEffect(() => {
    getArticles();
  }, [getArticles]);

  return <Articles articles={articles} loading={loading} />;
}

const mapStateToProps = createStructuredSelector({
  articles: selectExploreArticles,
  loading: selectArticleLoading
});

const mapDispatchToProps = {
  getArticles: getAllArticles
};

export default connect(mapStateToProps, mapDispatchToProps)(ExplorePage);
