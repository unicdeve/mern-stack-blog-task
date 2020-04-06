import { createSelector } from 'reselect';

export const selectArticle = state => state.article;

export const selectArticles = createSelector(
  [selectArticle],
  article => article.articles
);

export const selectArticleLoading = createSelector(
  [selectArticle],
  selectArticle => selectArticle.loading
);

export const selectArticleErrors = createSelector(
  [selectArticle],
  selectArticle => selectArticle.errors
);
