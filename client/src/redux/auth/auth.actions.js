import axios from 'axios';
import authTypes from './auth.types';
import setAuthToken from '../../utils/setAuthToken';

const setUser = (data, dispatch) => {
  localStorage.setItem('auth', JSON.stringify(data.data));
  setAuthToken(data.data.token);
  dispatch({
    type: authTypes.SIGN_IN_SUCCESS,
    payload: data.data
  });
};

export const signinUser = userData => dispatch => {
  dispatch({ type: authTypes.SIGN_IN_START });
  axios
    .post('/users/login/', userData)
    .then(res => {
      setUser(res.data, dispatch);
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: authTypes.SIGN_IN_FAILURE,
        payload: err.response.data
      });
    });
};

export const signupUser = userData => dispatch => {
  dispatch({ type: authTypes.SIGN_UP_START });
  axios
    .post('/users/register/', userData)
    .then(res => {
      setUser(res.data, dispatch);
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: authTypes.SIGN_UP_FAILURE,
        payload: err.response.data
      });
    });
};

export const clearErrors = () => ({
  type: authTypes.CLEAR_ERROR
});
