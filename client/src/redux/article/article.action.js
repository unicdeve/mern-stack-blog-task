import axios from 'axios';
import articleTypes from './article.types';

export const getUserArticles = token => dispatch => {
  dispatch({ type: articleTypes.ARTICLES_LOADING });
  axios
    .get('/article/user/articles/')
    .then(res => {
      dispatch({
        type: articleTypes.GET_ARTICLES,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: articleTypes.ARTICLES_ERROS
      });
    });
};

export const getAllArticles = () => dispatch => {
  dispatch({ type: articleTypes.ARTICLES_LOADING });
  axios
    .get('/article/')
    .then(res => {
      dispatch({
        type: articleTypes.GET_EXPLORE_ARTICLES,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: articleTypes.ARTICLES_ERROS
      });
    });
};
