import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ProfilePage from './ProfilePage';
import { Rectangle } from '../../UI/Icons/ProfileLogos';

const ProfilePreview = ({ navigation }) => {
  const expand = () => {
    navigation.openDrawer();
  };
  return (
    <ProfilePage backgroundColor='#4DAAAA' expand={expand} color='white'>
      <Rectangle />
      <Text>ProfilePreview</Text>
    </ProfilePage>
  );
};

export default ProfilePreview;

const styles = StyleSheet.create({});
