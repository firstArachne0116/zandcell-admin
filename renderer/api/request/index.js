import axios from 'axios';
import apiConfig from '../config';

const apiModule = 'request/';
export const getAllRequests = () => {
  console.log('[api] get all requests');
  const apiUrl = apiConfig.baseUrl + apiModule + 'get-all';
  return axios({
    method: 'POST',
    url: apiUrl
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
