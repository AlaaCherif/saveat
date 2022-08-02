import { StyleSheet, Text, View, FlatList, Button as Btn } from 'react-native';
import React, { useContext } from 'react';
import ProfilePage from './ProfilePage';
import CartItem from './../../UI/CartItem';
import AuthContext from '../../context/AuthProvider';
import Button from './../../UI/Button';

const Cart = ({ navigation, goHome }) => {
  const { cart, setCart } = useContext(AuthContext);
  const expand = () => {
    navigation.openDrawer();
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

  return (
    <ProfilePage expand={expand} title='CART' goHome={goHome}>
      <View style={{ flex: 1, marginBottom: 20 }}>
        <FlatList
          data={cart}
          renderItem={({ item }) => (
            <CartItem
              item={item}
              deleteItem={deleteItem}
              addItem={addItem}
              removeItem={removeItem}
            />
          )}
        />
        <Btn
          title='press to add'
          onPress={() => {
            addItem(3, 'bnina', 5);
          }}
        />
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Button title='Submit' onPress={() => {}} />
          <Button
            title='Clear cart'
            backgroundColor='white'
            color='black'
            onPress={() => {
              setCart([]);
            }}
          />
        </View>
      </View>
    </ProfilePage>
  );
};

export default Cart;

const styles = StyleSheet.create({});
