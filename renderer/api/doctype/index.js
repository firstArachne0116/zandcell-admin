import axios from 'axios';
import apiConfig from '../config';

const apiModule = 'doc-type/';
export const getDocTypes = (author) => {
  console.log('[api] get doc by author');
  const apiUrl = apiConfig.baseUrl + apiModule + 'get-doc-by-author';
  return axios({
    method: 'POST',
    url: apiUrl,
    data: author
  });
};

export const getAllDocTypes = (author) => {
  console.log('[api] get all doc types');
  const apiUrl = apiConfig.baseUrl + apiModule + 'get-all';
  return axios({
    method: 'POST',
    url: apiUrl,
    data: author
  });
};

export const getDocTypes1 = (author) => {
  const apiUrl = apiConfig.baseUrl + apiModule + 'get-doc-by-author';
  return axios({
    method: 'POST',
    url: apiUrl,
    data: author
  });
};

export const addDocType = (docType) => {
  const apiUrl = apiConfig.baseUrl + apiModule + 'add';
  return axios({
    method: 'POST',
    url: apiUrl,
    data: docType
  });
};

export const updateDocType = (docType) => {
  const apiUrl = apiConfig.baseUrl + apiModule + 'update';
  return axios({
    method: 'POST',
    url: apiUrl,
    data: docType
  });
};

export const deleteDocType = (docType) => {
  const apiUrl = apiConfig.baseUrl + apiModule + 'delete';
  return axios({
    method: 'POST',
    url: apiUrl,
    data: docType
  });
};
