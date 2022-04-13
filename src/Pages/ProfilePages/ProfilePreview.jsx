import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ProfilePage from './ProfilePage';

const ProfilePreview = ({ navigation }) => {
  const expand = () => {
    navigation.openDrawer();
  };
  return (
    <ProfilePage expand={expand}>
      <Text>ProfilePreview</Text>
    </ProfilePage>
  );
};

export default ProfilePreview;

const styles = StyleSheet.create({});
