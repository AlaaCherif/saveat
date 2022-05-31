import { createContext, useState, useEffect } from 'react';
import AsyncStorageLib from '@react-native-async-storage/async-storage';
import { loggedIn } from '../api/api.user';

const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
  // network ready
  const [auth, setAuth] = useState({});
  const [cart, setCart] = useState([]);
  const setInfo = data => {
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
  const refresh = async () => {
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
  };
  const addItem = (id, name, price) => {
    if (cart.filter(item => item.id === id).length) {
      const index = cart.findIndex(item => item.id === id);
      setCart(previousCart => {
        const newCart = [...previousCart];
        newCart[index].quantity += 1;
        return newCart;
      });
    } else {
      setCart(previousState => {
        const newState = [
          ...previousState,
          { id: id, name: name, price: price, quantity: 1 },
        ];
        return newState;
      });
    }
  };
  const removeItem = id => {
    if (cart.filter(item => item.id === id).length) {
      const index = cart.findIndex(item => item.id === id);
      if (cart[index].quantity > 1) {
        setCart(previousCart => {
          const newCart = [...previousCart];
          newCart[index].quantity -= 1;
          return newCart;
        });
      } else {
        deleteItem(id);
      }
    }
  };
  const deleteItem = id => {
    setCart(previousCart => {
      const newCart = [...previousCart];
      const index = newCart.findIndex(item => item.id === id);
      newCart.splice(index, 1);
      return newCart;
    });
  };

  //local
  // const [auth, setAuth] = useState({
  //   email: 'alaac617@gmail.com',
  //   token: 'tafokaf',
  //   phoneNumber: ' 5454654',
  //   address: ' Ariana Tunis',
  //   birthDate: ' 2001-02-13',
  // });
  return (
    <AuthContext.Provider
      value={{ auth, setAuth, setInfo, refresh, cart, setCart, addItem }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
