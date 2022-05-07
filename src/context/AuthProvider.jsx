import { createContext, useState, useEffect } from 'react';
import AsyncStorageLib from '@react-native-async-storage/async-storage';
import { loggedIn } from '../api/api.user';

const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
  // network ready
  const [auth, setAuth] = useState({});
  const setInfo = data => {
    console.log('setting data to state');
    setAuth({
      email: data.email,
      token: data.token,
      firstName: data.firstName,
      lastName: data.lastName,
      phoneNumber: data.phoneNumber,
      address: data.address,
    });
  };
  useEffect(async () => {
    const res = await loggedIn();
    if (res) {
      let test = {
        email: res.email,
        token: res.token,
        firstName: res.firstName,
        lastName: res.lastName,
        phoneNumber: res.phoneNumber,
        address: res.address,
      };
      setInfo(test);
    } else {
      await AsyncStorageLib.removeItem('user');
      setAuth({});
    }
  }, []);

  //local
  // const [auth, setAuth] = useState({
  //   email: 'alaac617@gmail.com',
  //   token: 'tafokaf',
  //   phoneNumber: ' 5454654',
  //   address: ' Ariana Tunis',
  //   birthDate: ' 2001-02-13',
  // });
  return (
    <AuthContext.Provider value={{ auth, setAuth, setInfo }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
