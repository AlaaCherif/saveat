import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import ProfilePage from './ProfilePage';
import CustomSwitch from '../../UI/CustomSwitch';
import ChangePassword from './AccountSettingsForms/ChangePassword';

const AccountSettings = ({ navigation }) => {
  const [getSelectionMode, setSelectionMode] = useState(1);
  const expand = () => {
    navigation.openDrawer();
  };

  return (
    <ProfilePage expand={expand} title='ACCOUNT'>
      <CustomSwitch
        roundCorner={false}
        selectionColor={'#4DAAAA'}
        getSelectionMode={getSelectionMode}
        setSelectionMode={setSelectionMode}
      />
      <Text>{getSelectionMode == 2 ? 'Email' : <ChangePassword />}</Text>
    </ProfilePage>
  );
};

export default AccountSettings;

const styles = StyleSheet.create({});
