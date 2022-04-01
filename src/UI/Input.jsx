import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import React, { useState } from 'react';
import Eye from './Icons/Eye';

const Input = props => {
  const [focused, setFocused] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.errorAndLabel}>
        <Text style={styles.label}>{props.label}</Text>
      </View>
      <View>
        <TextInput
          style={[
            styles.input,
            styles.password,
            focused ? styles.focusedInput : null,
            props.error ? styles.inputError : null,
          ]}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
          autoCapitalize={false}
          {...props}
        />
        {props.label === 'Password:' || props.label === 'Confirm Password:' ? (
          <TouchableWithoutFeedback onPress={props.toggle}>
            <Eye closed={!props.showPassword} style={styles.eye} />
          </TouchableWithoutFeedback>
        ) : null}
      </View>

      {props.error ? <Text style={styles.error}>{props.error}</Text> : null}
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
    backgroundColor: '#FFBCBC',
    borderWidth: 1,
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
  eye: {
    position: 'absolute',
    right: 7,
    top: '15%',
    padding: 5,
    borderRadius: 10,
  },
  password: {
    position: 'relative',
  },
  focusedInput: { borderColor: '#4DAAAA', borderWidth: 2 },
});
