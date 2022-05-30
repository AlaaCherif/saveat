import axios from 'axios';
import { api } from './config';
export const getAllBoxes = async token => {
  return await axios
    .get(`${api}/boxes/getAllBoxes`, {
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
      console.log(err);
      return false;
    });
};
