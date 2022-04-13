import { createContext, useState, useEffect } from 'react';
import AsyncStorageLib from '@react-native-async-storage/async-storage';
const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  useEffect(async () => {
    const userString = await AsyncStorageLib.getItem('user');
    let user = JSON.parse(userString);

    if (user) {
      setAuth({ email: user.email, token: user.token });
    }
  }, []);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
