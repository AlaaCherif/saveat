import axios from 'axios';
import { api } from './config';
import AsyncStorageLib from '@react-native-async-storage/async-storage';

export const login = async data => {
  return axios
    .post(`${api}/users/login`, data)
    .then(async res => {
      if (res.status === 200) {
        // await AsyncStorageLib.setItem('authToken', res.data.token);
        // await AsyncStorageLib.setItem('email', data.email);
        await AsyncStorageLib.setItem(
          'user',
          JSON.stringify({
            email: data.email,
            token: res.data.token,
            firstName: data.firstName,
          })
        );
        return {
          token: res.data.token,
          firstName: res.data.data.user.firstName,
          lastName: res.data.data.user.lastName,
          phoneNumber: res.data.data.user.phoneNumber,
          address: res.data.data.user.address,
          birthDate: res.data.data.user.birthDate,
        };
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
      if (res.data.status === 'success') {
        await AsyncStorageLib.setItem(
          'user',
          JSON.stringify({
            token: res.data.token,
            email: res.data.email,
          })
        );
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
  const user = JSON.parse(await AsyncStorageLib.getItem('user'));
  if (!user) return false;
  if (user.token && user.token !== undefined) {
    let authToken = user.token;
    return await axios
      .get(`${api}/users/test`, {
        headers: {
          authorization: 'Bearer ' + authToken,
        },
      })
      .then(res => {
        if (res.data.status === 'success') {
          return {
            email: user.email,
            token: user.token,
            firstName: res.data.user.firstName,
            lastName: res.data.user.lastName,
            phoneNumber: res.data.user.phoneNumber,
            address: res.data.user.address,
          };
        } else {
          return false;
        }
      })
      .catch(err => {
        console.log(err);
        return false;
      });
  } else {
    return false;
  }
};

export const logout = async token => {
  return await axios
    .post(
      `${api}/users/logout`,
      {},
      {
        headers: {
          authorization: 'Bearer ' + token,
        },
      }
    )
    .then(res => {
      if (res.data.status === 'success') {
        AsyncStorageLib.removeItem('user');
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
      console.log(err);
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
      console.log(err);
      return false;
    });
};
export const updateMe = async (data, token) => {
  const user = await AsyncStorageLib.getItem('user');
  let authToken = user.token;
  const userInfo = {
    firstName: data.firstName || user.firstName,
    lastName: data.lastName || user.lastName,
    phoneNumber: data.phoneNumber || user.phoneNumber,
    address: data.address || user.address,
    birthday: data.birthday || user.birthday,
  };
  return await axios
    .patch(`${api}/users/updateMe`, userInfo, {
      headers: {
        authorization: 'Bearer ' + token,
      },
    })
    .then(res => {
      if (res.data.status === 'success') {
        return res.data.data.updatedUser;
      } else {
        return false;
      }
    })
    .catch(err => {
      console.log(err);
      return false;
    });
};
