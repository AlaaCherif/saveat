import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Page from '../Page';
import Button from '../UI/Button';
import AsyncStorageLib from '@react-native-async-storage/async-storage';

const AuthedHome = ({ logout }) => {
  return (
    <Page noAnimation={true}>
      <Text>You re logged in</Text>
      <Button title='LOGOUT' onPress={logout} />
    </Page>
  );
};

export default AuthedHome;

const styles = StyleSheet.create({});
