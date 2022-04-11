import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import Page from '../Page';
import image from '../../assets/splash.png';
import Dash from '../Icons/Dash';
import Button from '../UI/Button';
import AsyncStorageLib from '@react-native-async-storage/async-storage';
import AuthContext from '../context/AuthProvider';

const Home = ({ navigation }) => {
  const { auth } = useContext(AuthContext);
  const goLogin = () => {
    navigation.navigate('Login1', { login: true });
  };
  const goSignup = () => {
    navigation.navigate('Login1', { login: false });
  };
  const [logged, setLogged] = useState();

  useEffect(() => {
    console.log(auth.email);
    if (auth.email) {
      navigation.replace('LoggedHome');
    }
    // const loggedInUser = await AsyncStorageLib.getItem('authToken');
    // if (loggedInUser) {
    //   setLogged(loggedInUser);
    //   navigation.replace('LoggedHome');
    // }
  });

  return (
    <Page>
      <Text>{logged}</Text>
      <View style={styles.container}>
        <Image source={image} style={{ width: 300, height: 300 }} />
        <Text style={styles.title}>Save it while saving on it</Text>
        <Dash />
        <Text style={styles.paragraph}>
          The Number One anti-food waste app in Tunisia
        </Text>
        <Button title='Sign in' onPress={goLogin} />
        <Button
          title='Sign up'
          backgroundColor='white'
          color='black'
          onPress={goSignup}
        />
        <Button
          title='Profile'
          backgroundColor='white'
          color='black'
          onPress={() => {
            navigation.navigate('Profile');
          }}
        />
      </View>
    </Page>
  );
};

export default Home;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: '15%',
  },
  paragraph: {
    fontSize: 20,
    textAlign: 'center',
    maxWidth: 300,
    color: 'white',
  },
});
