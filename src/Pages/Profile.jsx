import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import EditProfile from './ProfilePages/EditProfile';
import CustomDrawer from '../UI/CustomDrawer';
import AccountSettings from './ProfilePages/AccountSettings';
import { ProfileLogo, SettingsLogo } from '../UI/Icons/ProfileLogos';

const Drawer = createDrawerNavigator();
const Profile = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: { width: 80 },
        drawerItemStyle: { justifyContent: 'center', alignItems: 'center' },
        drawerActiveBackgroundColor: '#4DAAAA',
        headerShadowVisible: false,
      }}
      drawerContent={props => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name='Edit'
        component={EditProfile}
        options={{
          drawerLabel: ProfileLogo,
        }}
      />
      <Drawer.Screen
        name='Settings'
        component={AccountSettings}
        options={{
          drawerLabel: SettingsLogo,
        }}
      />
    </Drawer.Navigator>
  );
};

export default Profile;

const styles = StyleSheet.create({});
