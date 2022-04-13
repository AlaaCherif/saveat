import { StyleSheet } from 'react-native';
import React, { useEffect, useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import EditProfile from './ProfilePages/EditProfile';
import CustomDrawer from '../UI/CustomDrawer';
import AccountSettings from './ProfilePages/AccountSettings';
import { ProfileLogo, SettingsLogo } from '../UI/Icons/ProfileLogos';
import AuthContext from '../context/AuthProvider';
import ProfilePreview from './ProfilePages/ProfilePreview';

const Drawer = createDrawerNavigator();

const Profile = ({ navigation }) => {
  const { auth } = useContext(AuthContext);
  useEffect(() => {
    if (!auth.email) {
      navigation.replace('Home');
    }
  });
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: { width: 80 },
        drawerItemStyle: { justifyContent: 'center', alignItems: 'center' },
        drawerActiveBackgroundColor: '#4DAAAA',
        headerShadowVisible: false,
        headerShown: false,
        swipeEnabled: false,
      }}
      drawerContent={props => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name='Edit'
        options={{
          drawerLabel: ProfileLogo,
        }}
      >
        {props => (
          <EditProfile
            {...props}
            goHome={() => navigation.replace('LoggedHome')}
          />
        )}
      </Drawer.Screen>
      <Drawer.Screen
        name='Settings'
        component={AccountSettings}
        options={{
          drawerLabel: SettingsLogo,
        }}
      />
      <Drawer.Screen
        name='Preview'
        component={ProfilePreview}
        options={{
          drawerLabel: SettingsLogo,
        }}
      />
    </Drawer.Navigator>
  );
};

export default Profile;

const styles = StyleSheet.create({});
