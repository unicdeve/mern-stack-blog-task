import React from 'react';

import ArticleForm from '../../components/article-form/article-form.comp';

export default function CreateArticle() {
  return (
    <div className='auth-container'>
      <h1 className='auth-header'>Create New Article</h1>
      <ArticleForm />
    </div>
  );
}
