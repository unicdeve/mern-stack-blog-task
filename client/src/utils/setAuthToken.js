import axios from 'axios';

const setAuthToken = token => {
  if (token) {
    // apply to every request
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    // Delete auth header
    console.log('not coming throught');
    delete axios.defaults.headers.common['Authorization'];
  }
};

export default setAuthToken;
