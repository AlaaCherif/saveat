import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';

const Input = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput style={styles.input} {...props} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  label: {
    fontSize: 25,
    color: '#A5A5A5',
    fontWeight: 'bold',
    marginVertical: 12,
  },
  input: {
    borderColor: '#ECEEEE',
    borderWidth: 1,
    backgroundColor: '#F4F8F7',
    borderRadius: 5,
    width: 220,
    height: 37,
    fontSize: 20,
  },
  container: {
    alignItems: 'flex-start',
  },
});
