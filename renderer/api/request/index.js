import axios from 'axios';
import apiConfig from '../config';

const apiModule = 'request/';
export const getAllRequests = (requestType, requestStatus) => {
  console.log('[api] get all requests');
  const apiUrl = apiConfig.baseUrl + apiModule + 'get-all';
  return axios({
    method: 'POST',
    url: apiUrl,
    data: { requestType, requestStatus }
  });
};

export const acceptRequest = (requestId) => {
  console.log('[api] accept Request : request id : ' + requestId);
  const apiUrl = apiConfig.baseUrl + apiModule + 'accept-request';
  return axios({
    method: 'POST',
    url: apiUrl,
    data: { requestId }
  });
};

export const rejectRequest = (requestId) => {
  console.log('[api] reject Request : request id : ' + requestId);
  const apiUrl = apiConfig.baseUrl + apiModule + 'reject-request';
  return axios({
    method: 'POST',
    url: apiUrl,
    data: { requestId }
  });
};

export const getRequestContentById = (requestId) => {
  console.log('[api] get all documets by request id : request id : ' + requestId);
  const apiUrl = apiConfig.baseUrl + apiModule + 'get-request-content-by-id';
  return axios({
    method: 'POST',
    url: apiUrl,
    data: { requestId }
  });
};

export const downloadFile = (fileName, name) => {
  let apiUrl = apiConfig.baseUrl + '/upload' + fileName;
  apiUrl = 'https://gameon-board-images.s3.eu-west-2.amazonaws.com/1596889828929';
  return axios({
    method: 'POST',
    url: apiUrl,
    headers: {
      'Content-Type': 'application/octet-stream',
      'Content-Disposition': `attachment; filename="${name}"`,
      'Access-Control-Allow-Origin': '*'
    }
  });
};

export const acceptDoc = (documentId) => {
  console.log('[api] accept doc : ' + documentId);
  const apiUrl = apiConfig.baseUrl + apiModule + 'accept-document-by-id';
  return axios({
    method: 'POST',
    url: apiUrl,
    data: { documentId }
  });
};

export const rejectDoc = (data) => {
  console.log('[api] reject doc : ', data);
  const apiUrl = apiConfig.baseUrl + apiModule + 'reject-document-by-id';
  return axios({
    method: 'POST',
    url: apiUrl,
    data
  });
};

export const addComment = (comment) => {
  console.log('[api] add comment : ', comment);
  const apiUrl = apiConfig.baseUrl + apiModule + 'add-comment';
  return axios({
    method: 'POST',
    url: apiUrl,
    data: comment
  });
};
