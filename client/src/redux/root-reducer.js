import { combineReducers } from 'redux';
import articleReducer from './article/article.reducer';
import authReducer from './auth/auth.reducer';

// reducers import
const rootReducer = combineReducers({
  article: articleReducer,
  auth: authReducer
});

export default rootReducer;
