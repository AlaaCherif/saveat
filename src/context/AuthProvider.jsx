import { createContext, useState, useEffect } from 'react';
import AsyncStorageLib from '@react-native-async-storage/async-storage';
const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  useEffect(async () => {
    const user = await AsyncStorageLib.getItem('email');
    const token = await AsyncStorageLib.getItem('authToken');
    // const user = await AsyncStorageLib.multiGet(['email', 'authToken']).then(
    //   () => {

    //   }
    // );
    if (user) {
      setAuth({ email: user, token: token });
    }
  });
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
