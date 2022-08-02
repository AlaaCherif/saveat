import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import bagel from '../../assets/bagel.png';
import Icon from 'react-native-vector-icons/Ionicons';

const CartItem = ({ addItem, item, deleteItem, removeItem }) => {
  return (
    <View>
      <View style={styles.itemContainer}>
        {/* <Image source={bagel} style={styles.image} /> */}
        <Text style={styles.name}>{item.name}</Text>

        <Text style={styles.quantity}>{item.quantity}</Text>
        <TouchableOpacity
          style={{ padding: 15, borderRadius: 50 }}
          onPress={() => {
            deleteItem(item.id);
          }}
        >
          <Icon name='trash-outline' size={24} color='#6CD6D6' />
        </TouchableOpacity>
      </View>
      <View style={styles.adjustContainer}>
        <Text style={styles.price}>{item.price * item.quantity} DT</Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={addItem.bind(null, item.id, item.name, item.price)}
          >
            <Icon
              name='add'
              size={20}
              color='#6CD6D6'
              style={{
                padding: 5,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={removeItem.bind(null, item.id)}>
            <Icon
              name='remove'
              size={20}
              color='#6CD6D6'
              style={{
                padding: 5,
              }}
            />
          </TouchableOpacity>
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
    margin: 10,
  },
  seperator: {
    marginTop: 20,
    height: 2,
    backgroundColor: 'rgba(177,228,228,0.8)',
    width: 300,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  price: {
    color: '#FFBCBC',
    fontWeight: 'bold',
    fontSize: 20,
  },
  image: {},
  adjustContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  quantity: {
    fontSize: 20,
  },
});
