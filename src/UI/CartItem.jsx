import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import bagel from '../../assets/bagel.png';
import Icon from 'react-native-vector-icons/Ionicons';

const CartItem = () => {
  return (
    <View>
      <View style={styles.itemContainer}>
        <Image source={bagel} style={styles.image} />
        <Text style={styles.name}>NAME</Text>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.price}>2.00 DT</Text>
          <Text>-</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity style={{ padding: 15, borderRadius: 50 }}>
            <Icon name='trash-outline' size={24} color='#6CD6D6' />
          </TouchableOpacity>
          <Text>+</Text>
        </View>
      </View>
      <View style={styles.seperator} />
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  seperator: {
    marginTop: 20,
    height: 2,
    backgroundColor: 'rgba(177,228,228,0.8)',
    width: 300,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  price: {
    color: '#6CD6D6',
    fontWeight: 'bold',
    fontSize: 15,
  },
  image: {},
});
