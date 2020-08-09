import axios from 'axios';
import apiConfig from '../config';

const apiModule = 'auth/';
export const signUp = (userData) => {
  const user = userData;
  const apiUrl = apiConfig.baseUrl + apiModule + 'register';
  return axios({
    method: 'POST',
    url: apiUrl,
    data: user
  });
};

export const signIn = (user) => {
  const apiUrl = apiConfig.baseUrl + apiModule + 'signIn';

  console.log(user);
  console.log(apiUrl);
  return axios({
    method: 'POST',
    url: apiUrl,
    data: user
  });
};
export const signInWithToken = (token) => {
  const apiUrl = apiConfig.baseUrl + apiModule + 'access-token/' + token;
  return axios({
    method: 'GET',
    url: apiUrl
  });
};
/*
export const signInWithSocial = (userData) => {
    const user = userData;
      let apiUrl = apiConfig.baseUrl + apiModule + 'signin-social';
    console.log(user);
    console.log(apiUrl);
    return axios({
        method: 'POST',
        url: apiUrl,
        data: user
    })
}
export const sendEmail = ( email => {
    let apiUrl = apiConfig.baseUrl + 'resetPassword';
    return axios({
        method: 'POST',
        url: apiUrl,
        headers: {
            'Content-Type': 'application/json'
        },
        data: {email}
    })
})
*/
