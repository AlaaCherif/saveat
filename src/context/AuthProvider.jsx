import { createContext, useState, useEffect } from 'react';
import AsyncStorageLib from '@react-native-async-storage/async-storage';
import { loggedIn } from '../api/api.user';

const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
  // network ready
  const [auth, setAuth] = useState({});
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
      console.log('test is');
      console.log(test);
      setAuth(test);
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
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
