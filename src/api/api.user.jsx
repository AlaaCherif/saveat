import axios from 'axios';
import { api } from './config';
import AsyncStorageLib from '@react-native-async-storage/async-storage';

export const login = async data => {
  return axios
    .post(`${api}/users/login`, data)
    .then(async res => {
      if (res.status === 200) {
        await AsyncStorageLib.setItem('authToken', res.data.token);
        await AsyncStorageLib.setItem('email', data.email);
        return res.data.token;
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
        const accessToken = await AsyncStorageLib.setItem(
          'accessToken',
          res.data.accessToken
        );
        return accessToken;
      } else if (res.data.status === 'error') {
        return res.data.error;
      }
    })
    .catch(err => {
      console.log(err);
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
      console.log(res);
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
export const loggedIn = async () => {
  const authToken = await AsyncStorageLib.getItem('authToken');
  if (authToken && authToken !== undefined) {
    return true;
  } else {
    return false;
  }
};

export const logout = async () => {
  const authToken = await AsyncStorageLib.getItem('authToken');
  return await axios
    .post(
      `${api}/users/logout`,
      {},
      {
        headers: {
          authorization: 'Bearer ' + authToken,
        },
      }
    )
    .then(res => {
      if (res.data.status === 'success') {
        AsyncStorageLib.removeItem('authToken');
        return true;
      }
    })
    .catch(err => {
      console.log(err);
      return false;
    });
};
// First Form
export const forgotPassword = async data => {
  return axios
    .post(`${api}/users/forgotPassword`, data)
    .then(res => {
      if (res.data.status === 'success') {
        return true;
      } else {
        return false;
      }
    })
    .catch(err => {
      return false;
    });
};

// Second Form
export const resetPassword = async (password, params) => {
  console.log(password);
  return await axios
    .patch(`${api}/users/resetPassword/${params.token}`, password)
    .then(res => {
      if (res.data.status === 'success') {
        return true;
        //changed
      } else {
        return false;
        //invalid token or has expired
      }
    })
    .catch(err => {
      return false;
    });
};
