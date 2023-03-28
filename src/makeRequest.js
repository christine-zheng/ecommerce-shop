import axios from 'axios';

// base axios instance
// send API token in the header
export const makeRequest = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Authorization: 'bearer ' + process.env.REACT_APP_API_TOKEN,
  },
});
