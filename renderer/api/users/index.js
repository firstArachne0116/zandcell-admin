import axios from 'axios';
import apiConfig from '../config';

const apiModule = 'users/';

export const getAllUsers = (author) => {
  console.log('[api] get all users');
  const apiUrl = apiConfig.baseUrl + apiModule + 'get-all';
  return axios({
    method: 'POST',
    url: apiUrl,
    data: author
  });
};


export const updateUser = (user) => {
  const apiUrl = apiConfig.baseUrl + apiModule + 'update';
  return axios({
    method: 'POST',
    url: apiUrl,
    data: user
  });
};
