import axios from 'axios';

const http = token => {
  const headers = {};
  if (token) {
    // console.log(token)
    // console.log('masuk pak')
    headers.authorization = 'Bearer ' + token;
  }
  const instance = axios.create({
    // baseURL: 'http://localhost:8888',
    // baseURL: 'http://192.168.1.37:8888',
    baseURL: process.env.REACT_APP_URL,
    headers,
  });
  return instance;
};

export default http;
