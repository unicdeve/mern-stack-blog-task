import React from 'react';

import Article from '../article/article.comp';
import isEmpty from '../../utils/isEmpty';

export default function Articles({ articles, loading }) {
  return (
    <>
      {loading ? (
        <p>Loading</p>
      ) : !isEmpty(articles) ? (
        articles.map(article => <Article key={article._id} article={article} />)
      ) : (
        <p>No articles yet</p>
      )}
    </>
  );
}
