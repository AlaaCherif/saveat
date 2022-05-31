import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import canandonion from '../../../assets/canandonion.png';

const Box = ({ category, subCategory, stock, items, price, id }) => {
  const capSub = subCategory.charAt(0).toUpperCase() + subCategory.slice(1);
  const capCat = category.charAt(0).toUpperCase() + category.slice(1);
  return (
    <View style={styles.boxContainer} key={id}>
      <Text style={styles.title}>
        {capSub + ' Box of ' + capCat + ' goods'}
      </Text>
      <Image source={canandonion} style={{ width: 60, height: 60 }} />
      <Text style={styles.includes}>This box might contain</Text>
      <Text>{items.map(item => item.name + ', ')}</Text>
      <Text style={styles.price}>{price} DT</Text>
    </View>
  );
};

export default Box;

const styles = StyleSheet.create({
  boxContainer: {
    width: 200,
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    borderRadius: 2,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 8,
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
