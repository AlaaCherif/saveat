import { StyleSheet, Text, View, Image, Platform } from 'react-native';
import React, { useState } from 'react';
import Page from '../Page';
import image from '../../assets/splash.png';
import Dash from '../Icons/Dash';
import Button from '../UI/Button';

const Home = ({ navigation }) => {
  const [changed, setChanged] = useState(false);
  const goLogin = () => {
    navigation.navigate('Login1');
  };
  const goSignup = () => {
    navigation.navigate('Signup');
  };

  return (
    <Page changed={changed}>
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
