import { createContext, useState, useEffect } from 'react';
import AsyncStorageLib from '@react-native-async-storage/async-storage';
import { loggedIn } from '../api/api.user';

const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  useEffect(async () => {
    const res = await loggedIn();
    if (res) {
      setAuth({ email: res.email, token: res.token });
    } else {
      await AsyncStorageLib.removeItem('user');
      setAuth({});
    }
  }, []);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
