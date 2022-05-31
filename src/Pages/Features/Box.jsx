import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useContext } from 'react';
import canandonion from '../../../assets/canandonion.png';
import Button from './../../UI/Button';
import AuthContext from '../../context/AuthProvider';

const Box = ({ category, subCategory, stock, items, price, id }) => {
  const { addItem, cart } = useContext(AuthContext);
  const capSub = subCategory.charAt(0).toUpperCase() + subCategory.slice(1);
  const capCat = category.charAt(0).toUpperCase() + category.slice(1);
  const name = items.map(item => item.name + ', ');
  return (
    <View style={styles.boxContainer} key={id}>
      <Text style={styles.title}>
        {capSub + ' Box of ' + capCat + ' goods'}
      </Text>
      <Image source={canandonion} style={{ width: 60, height: 60 }} />
      <Text style={styles.includes}>This box might contain</Text>
      <Text>{items.map(item => item.name + ', ')}</Text>
      <Text style={styles.price}>{price} DT</Text>
      {cart.filter(item => item.id === id).length ? (
        <Button
          width={150}
          title='Check cart'
          backgroundColor='white'
          color='#4DAAAA'
          onPress={console.log(cart)}
        />
      ) : (
        <Button
          width={150}
          title='Add to cart'
          onPress={() => {
            addItem(id, name, price);
          }}
        />
      )}
    </View>
  );
};

export default Box;

const styles = StyleSheet.create({
  boxContainer: {
    width: 200,
    shadowColor: '#000',
    shadowOffset: { width: -2, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    borderRadius: 2,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  title: {
    color: '#4DAAAA',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  includes: {
    color: '#FFBCBC',
    fontWeight: 'bold',
    fontSize: 15,
  },
  price: {
    color: '#4DAAAA',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
