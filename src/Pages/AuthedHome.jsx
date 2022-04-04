import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import Page from '../Page';
import Button from '../UI/Button';
import AsyncStorageLib from '@react-native-async-storage/async-storage';

const AuthedHome = ({ navigation }) => {
  const logout = async () => {
    await AsyncStorageLib.removeItem('authToken');
  };
  useEffect(async () => {
    const loggedInUser = await AsyncStorageLib.getItem('authToken');
    if (!loggedInUser) {
      navigation.replace('Home');
    }
  }, []);
  return (
    <Page noAnimation={true}>
      <Text>You re logged in hi </Text>
      <Button title='LOGOUT' onPress={logout} />
    </Page>
  );
};

export default AuthedHome;

const styles = StyleSheet.create({});
