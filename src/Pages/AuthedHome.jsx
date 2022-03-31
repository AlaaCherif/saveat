import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const AuthedHome = ({ route }) => {
  return (
    <View>
      <Text>{route.params.email}</Text>
    </View>
  );
};

export default AuthedHome;

const styles = StyleSheet.create({});
