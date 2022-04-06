import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useContext } from 'react';
import Page from '../Page';
import Button from '../UI/Button';
import AsyncStorageLib from '@react-native-async-storage/async-storage';
import AuthContext from '../context/AuthProvider';

const AuthedHome = ({ navigation }) => {
  const { auth, setAuth } = useContext(AuthContext);
  const logout = async () => {
    setAuth({});
    await AsyncStorageLib.removeItem('authToken').then(() => {
      // navigation.replace('Home');
    });
  };
  useEffect(async () => {
    if (!auth.email) {
      navigation.replace('Home');
    }
  }, [auth]);
  return (
    <Page noAnimation={true}>
      <View style={styles.container}>
        <Text>You re logged in hi </Text>
        <Text>{auth.email}</Text>
        <Button title='LOGOUT' onPress={logout} />
      </View>
    </Page>
  );
};

export default AuthedHome;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
