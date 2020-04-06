import axios from 'axios';
import articleTypes from './article.types';

export const getAllArticles = () => dispatch => {
  dispatch({ type: articleTypes.ARTICLES_LOADING });
  axios
    .get('/article/')
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
