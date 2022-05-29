import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ProfilePage from './ProfilePage';
import CartItem from './../../UI/CartItem';

const Cart = ({ navigation, goHome }) => {
  const expand = () => {
    navigation.openDrawer();
  };
  return (
    <ProfilePage expand={expand} title='CART' goHome={goHome}>
      <CartItem />
    </ProfilePage>
  );
};

export default Cart;

const styles = StyleSheet.create({});
