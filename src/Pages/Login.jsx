import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Page from '../Page';
import LoginLogo from '../UI/LoginLogo';
import Input from '../UI/Input';
import Button from '../Button';

const Login = () => {
  return (
    <Page second='true'>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <LoginLogo />
          <Text style={styles.title}>Sign in</Text>
        </View>
        <View style={styles.inputContainer}>
          <Input label='Email' />
          <Input label='Password' />
          <Text style={styles.help}>
            Must be longer than 8 characters and contain one capital letter.
          </Text>
          <Button title='Submit' />
          <Text style={{ ...styles.help, marginVertical: 6 }}>
            Forgot your password ?
          </Text>
        </View>
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
  inputContainer: {
    marginLeft: '20%',
    marginTop: '15%',
    maxWidth: '60%',
  },
  help: {
    fontSize: 15,
    color: '#A5A5A5',
  },
});
