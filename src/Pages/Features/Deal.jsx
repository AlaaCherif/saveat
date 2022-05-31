import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Button from '../../UI/Button';
import { ScrollView } from 'react-native-gesture-handler';

const Deal = ({
  id,
  description,
  newPrice,
  oldPrice,
  product,
  restaurant,
  stock,
  setModal,
  setShowModal,
}) => {
  return (
    <View style={styles.container} key={id}>
      <Text style={styles.restaurant}>{restaurant}</Text>
      <Text style={styles.product}>{product}</Text>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.oldPrice}>{oldPrice}</Text>
        <Text style={styles.newPrice}>{newPrice} DT</Text>
      </View>
      <View
        style={{
          ...styles.priceContainer,
          alignItems: 'center',
          justifyContent: 'space-around',
          width: '100%',
        }}
      >
        <Text style={styles.stock}>{stock} items to save</Text>
        <Button
          width={120}
          title='Take deal'
          onPress={() => {
            setModal({ id, description, newPrice, product });
            setShowModal(true);
          }}
        />
      </View>
    </View>
  );
};

export default Deal;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 0,
    borderWidth: 0,
    width: 300,
    alignItems: 'center',
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  restaurant: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#6CD6D6',
    textAlign: 'center',
  },
  product: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#4DAAAA',
    textAlign: 'center',
  },
  description: {
    color: '#A5A5A5',
    marginVertical: 5,
  },
  newPrice: {
    color: '#4DAAAA',
    fontWeight: 'bold',
    fontSize: 22,
  },
  priceContainer: {
    flexDirection: 'row',
  },
  oldPrice: {
    color: 'black',
    textDecorationLine: 'line-through',
    fontSize: 22,
    fontWeight: 'bold',
    marginRight: 20,
  },
  stock: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFBCBC',
  },
});
