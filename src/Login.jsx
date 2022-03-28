import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LoginLogo from '../UI/LoginLogo';
import LoginForm from './../LoginForm';
import Button from './UI/Button';

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <LoginLogo />
        <Text style={styles.title}>Login</Text>
      </View>
      <LoginForm />
      <Text>Or</Text>
      <Button title='HI' />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: '15%',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: '#4DAAAA',
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 40,
  },

  help: {
    fontSize: 15,
    color: '#A5A5A5',
  },
  switch: {
    position: 'relative',
  },
  logo: {
    position: 'absolute',
    top: 0,
  },
});
