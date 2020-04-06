import { combineReducers } from 'redux';
import articleReducer from './article/article.reducer';

// reducers import
const rootReducer = combineReducers({
  article: articleReducer
});

export default rootReducer;
