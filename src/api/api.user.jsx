import axios from 'axios';
import { api } from './config';
import AsyncStorageLib from '@react-native-async-storage/async-storage';

export const login = async data => {
  return axios
    .post(`${api}/user/login`, data)
    .then(async res => {
      if (res.status === 200) {
        await AsyncStorageLib.setItem('authToken', res.data.token);
        return true;
      } else {
        console.log('api error during login');
      }
    })
    .catch(err => {
      console.log(err);
      return false;
    });
};

export const signUp = async data => {
  return axios
    .post(`${api}/users/signup`, data)
    .then(async res => {
      if (res.data.status === 'success') {
        await AsyncStorageLib.setItem('accessToken', res.data.accessToken);
        console.log('response ' + res);
        return 'true';
      } else if (res.data.status === 'error') {
        return res.data.error;
      }
    })
    .catch(err => {
      return false;
    });
};

export const verifySignup = async data => {
  //check accesToken in local storage and send it in header

  //post with code
  //if invalid send error else save auth token in local storage and remove access
  const accessToken = await AsyncStorageLib.getItem('accessToken');
  return axios
    .post(`${api}/users/verifyAccount`, data, {
      headers: {
        access: 'Bearer ' + accessToken,
      },
    })
    .then(async res => {
      if (res.data.status === 'success') {
        await AsyncStorageLib.setItem('authToken', res.data.token);
        return 'true';
      } else if (res.data.status === 'error') {
        return res.data.error;
      }
    })
    .catch(err => {
      console.log(err);
      return false;
    });
};
