import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';

const Input = props => {
  return (
    <View style={styles.container}>
      <View style={styles.errorAndLabel}>
        <Text style={styles.label}>{props.label}</Text>
        {props.error ? <Text style={styles.error}>{props.error}</Text> : null}
      </View>
      <TextInput
        style={[styles.input, props.error ? styles.inputError : null]}
        {...props}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  label: {
    fontSize: 25,
    color: '#A5A5A5',
    fontWeight: 'bold',
    marginVertical: 8,
  },
  inputError: {
    borderColor: 'red',
    backgroundColor: 'rgba(228, 70, 70, 0.308)',
  },
  input: {
    borderColor: '#ECEEEE',
    borderWidth: 1,
    backgroundColor: '#F4F8F7',
    borderRadius: 5,
    width: 220,
    height: 37,
    fontSize: 17,
    paddingLeft: 10,
  },
  container: {
    alignItems: 'flex-start',
  },
  error: {
    fontSize: 15,
    color: 'red',
  },
  errorAndLabel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
});
