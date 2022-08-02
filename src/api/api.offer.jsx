import axios from 'axios';
import { api } from './config';

export const getAllOffers = async token => {
  return await axios
    .get(`${api}/offers/getAllOffers`, {
      headers: {
        authorization: 'Bearer ' + token,
      },
    })
    .then(res => {
      if (res.data.status === 'success') {
        return res.data;
      } else {
        return false;
      }
    })
    .catch(err => {
      console.log('err');
      return false;
    });
};
