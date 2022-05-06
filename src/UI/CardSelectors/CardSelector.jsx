import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import gluten from '../../../assets/gluten.png';

const CardSelector = props => {
  return (
    <View style={styles.container}>
      <Image source={gluten} />
      <Text style={styles.content}>CardSelector</Text>
    </View>
  );
};

export default CardSelector;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    backgroundColor: '#FFBCBC',
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
