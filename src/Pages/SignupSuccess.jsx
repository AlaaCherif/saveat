import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import Page from '../Page';
import Progress from './../UI/Icons/Progress';

const SignupSuccess = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('LoggedHome');
    }, 2000);
  }, []);

  return (
    <Page noAnimation={true}>
      <View style={styles.container}>
        <Progress step={3} />
        <Text style={styles.help}>Successfully logged in !</Text>
        <Text style={styles.help}>Taking you home</Text>
      </View>
    </Page>
  );
};

export default SignupSuccess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  help: {
    fontSize: 15,
    color: '#A5A5A5',
    width: 220,
    textAlign: 'center',
    marginVertical: 20,
  },
});
