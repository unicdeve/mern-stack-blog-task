import articleTypes from './article.types';

const initialState = {
  errors: null,
  loading: false,
  articles: []
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case articleTypes.GET_ARTICLES:
      return {
        ...state,
        articles: action.payload,
        loading: false
      };

    case articleTypes.ARTICLES_LOADING:
      return {
        ...state,
        loading: true
      };

    case articleTypes.CLEAR_ERROR:
      return {
        ...state,
        errors: null
      };

    default:
      return state;
  }
};

export default authReducer;
