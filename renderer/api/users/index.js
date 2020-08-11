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

export const addUser = (user) => {
  const apiUrl = apiConfig.baseUrl + apiModule + 'add';
  return axios({
    method: 'POST',
    url: apiUrl,
    data: user
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

export const getUserInfo = (user) => {
  const apiUrl = apiConfig.baseUrl + apiModule + 'get-user-by-id';
  return axios({
    method: 'POST',
    url: apiUrl,
    data: { userName: user }
  });
};
