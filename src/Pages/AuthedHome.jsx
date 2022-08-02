import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useEffect, useContext } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Page from '../Page';
import AuthContext from '../context/AuthProvider';
import { logout } from '../api/api.user';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Boxes from './Features/Boxes';
import Deals from './Features/Deals';

const Tab = createBottomTabNavigator();

const AuthedHome = ({ navigation }) => {
  const { auth, setAuth, setCart } = useContext(AuthContext);
  const handleLogout = async () => {
    await logout(auth.token).then(() => {
      setAuth({});
      setCart([]);
      navigation.replace('Home');
    });
  };
  const goProfile = () => {
    navigation.navigate('Profile');
  };
  useEffect(async () => {
    if (!auth.email) {
      navigation.replace('Home');
    }
  }, [auth]);
  return (
    // <Page noAnimation={true}>
    //   <View
    //     style={{
    //       justifyContent: 'space-between',
    //       flexDirection: 'row',
    //       marginTop: -20,
    //     }}
    //   >
    //     <TouchableOpacity onPress={goProfile}>
    //       <Icon
    //         style={{ padding: 20, paddingTop: 0 }}
    //         name='person-outline'
    //         size={30}
    //         color='#4DAAAA'
    //       />
    //     </TouchableOpacity>
    //     <TouchableOpacity onPress={handleLogout}>
    //       <Icon
    //         style={{ padding: 20, paddingTop: 0 }}
    //         name='log-out-outline'
    //         size={30}
    //         color='#4DAAAA'
    //       />
    //     </TouchableOpacity>
    //   </View>
    //   <View style={styles.container}></View>
    // </Page>
    <Tab.Navigator defaultScreenOptions={{ headerShown: false }}>
      <Tab.Screen
        name='Boxes'
        options={{
          headerShown: false,
          tabBarActiveTintColor: '#4DAAAA',
          tabBarIcon: props => (
            <Icon name='cube-outline' color='#4DAAAA' {...props} />
          ),
        }}
      >
        {props => (
          <Boxes {...props} handleLogout={handleLogout} goProfile={goProfile} />
        )}
      </Tab.Screen>
      <Tab.Screen
        name='Deals'
        options={{
          headerShown: false,
          tabBarActiveTintColor: '#4DAAAA',
          tabBarIcon: props => (
            <Icon name='fast-food-outline' color='#4DAAAA' {...props} />
          ),
        }}
      >
        {props => (
          <Deals {...props} handleLogout={handleLogout} goProfile={goProfile} />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default AuthedHome;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
