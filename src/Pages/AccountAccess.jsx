import { StyleSheet, Text, View, Switch } from 'react-native';
import React from 'react';
import Page from '../Page';
import LoginLogo from '../UI/LoginLogo';
import LoginForm from '../LoginForm';
import SignupForm from '../SignupForm';
import AddLogo from '../UI/AddLogo';

const AccountAccess = ({ route, navigation }) => {
  const goVerif = params => {
    navigation.navigate('EmailVerification', params);
  };
  const changeType = () => {
    navigation.setParams({ login: !route.params.login });
  };
  const goHome = email => {
    navigation.navigate('Authed', { email: email });
  };
  return (
    <Page second='true'>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <LoginLogo />
          <Text style={styles.title}>
            {route.params.login ? 'Log in' : 'Sign up'}
          </Text>
        </View>
        {route.params.login ? (
          <LoginForm next={goHome} />
        ) : (
          <SignupForm next={goVerif} />
        )}
      </View>
      <View behavior='' style={styles.switchContainer}>
        {route.params.login ? (
          <LoginLogo width='20' height='24' />
        ) : (
          <AddLogo style={{ marginRight: 2 }} />
        )}

        <Switch
          trackColor={{ false: '#4DAAAA', true: '#4DAAAA' }}
          ios_backgroundColor='#4DAAAA'
          onValueChange={changeType}
          value={route.params.login}
          thumbColor='#f4f3f4'
          style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
        />
      </View>
    </Page>
  );
};

export default AccountAccess;

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
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
});
