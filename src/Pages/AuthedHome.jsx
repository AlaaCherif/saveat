import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useContext } from 'react';
import Page from '../Page';
import Button from '../UI/Button';
import AuthContext from '../context/AuthProvider';
import { logout } from '../api/api.user';

const AuthedHome = ({ navigation }) => {
  const { auth, setAuth, setCart } = useContext(AuthContext);
  const handleLogout = async () => {
    await logout(auth.token).then(() => {
      setAuth({});
      setCart([]);
      navigation.replace('Home');
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
        <Button
          title='Profile'
          backgroundColor='#FFBCBC'
          color='white'
          onPress={() => {
            navigation.navigate('Profile');
          }}
        />
        <Button title='LOGOUT' onPress={handleLogout} />
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
