import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const Button = props => {
  return (
    <TouchableOpacity onPress={props.onPress} disabled={props.disabled}>
      <View
        style={{
          ...styles.container,
          backgroundColor: props.backgroundColor
            ? props.backgroundColor
            : '#4DAAAA',
          width: props.width ? props.width : 220,
        }}
      >
        <Text
          style={{
            ...styles.text,
            color: props.color ? props.color : 'white',
            borderWidth: props.borderColor ? 1 : 0,
            borderColor: props.borderColor ? props.borderColor : null,
            borderRadius: 7,
            backgroundColor: props.disabled ? '#AEE1E1' : null,
          }}
        >
          {props.disabled ? 'Loading' : props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4DAAAA',
    marginTop: 20,
    width: 220,
    borderRadius: 7,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    paddingVertical: 7,
    fontWeight: 'bold',
  },
});
