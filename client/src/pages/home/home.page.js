import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { getAllArticles } from '../../redux/article/article.action';
import {
  selectArticles,
  selectArticleLoading
} from '../../redux/article/articles.selector';
import Article from '../../components/article/article.comp';

function HomePage(props) {
  const { articles, getArticles } = props;

  console.log(articles);

  useEffect(() => {
    getArticles();
  }, [getArticles]);

  return (
    <div>
      {articles &&
        articles.map(article => (
          <Article key={article._id} article={article} />
        ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  articles: selectArticles,
  loading: selectArticleLoading
});

const mapDispatchToProps = {
  getArticles: getAllArticles
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
