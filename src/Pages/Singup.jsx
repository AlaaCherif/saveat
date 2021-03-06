import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LoginLogo from '../UI/LoginLogo';
import SignupForm from './../SignupForm';

const Signup = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <LoginLogo />
        <Text style={styles.title}>Create Account</Text>
      </View>
      <SignupForm />
    </View>
  );
};

export default Signup;

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
