import { StyleSheet, Text, View, Switch } from 'react-native';
import React, { useState } from 'react';
import Page from '../Page';
import LoginLogo from '../UI/LoginLogo';
import Input from '../UI/Input';
import Button from '../UI/Button';
import LoginForm from './../LoginForm';

const Login = () => {
  const [enabled, setEnabled] = useState(false);
  return (
    <Page second='true'>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <LoginLogo />
          <Text style={styles.title}>Sign in</Text>
        </View>
        <LoginForm />
      </View>
      <View style={styles.switch}>
        {/* <Switch
          trackColor={{ false: '#4DAAAA', true: '#81b0ff' }}
          thumbColor={enabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor='#3e3e3e'
          onValueChange={() => {
            setEnabled(previousState => !previousState);
          }}
          value={enabled}
        />
        <LoginLogo style={styles.logo} /> */}
      </View>
    </Page>
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
