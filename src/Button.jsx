import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const Button = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View
        style={{
          ...styles.container,
          backgroundColor: props.backgroundColor
            ? props.backgroundColor
            : '#4DAAAA',
        }}
      >
        <Text
          style={{
            ...styles.text,
            color: props.color ? props.colors : 'white',
          }}
        >
          {props.title}
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
  },
});
