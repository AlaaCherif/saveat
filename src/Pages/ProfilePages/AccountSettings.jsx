import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ProfilePage from './ProfilePage';

const AccountSettings = ({ navigation }) => {
  const expand = () => {
    navigation.openDrawer();
  };
  return (
    <ProfilePage expand={expand} title='ACCOUNT'>
      <View>
        <Text>FU</Text>
      </View>
    </ProfilePage>
  );
};

export default AccountSettings;

const styles = StyleSheet.create({});
