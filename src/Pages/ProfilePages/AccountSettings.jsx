import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import ProfilePage from './ProfilePage';
import CustomSwitch from '../../UI/CustomSwitch';
import ChangePassword from './AccountSettingsForms/ChangePassword';
import { ScrollView } from 'react-native-gesture-handler';
import ChangeEmail from './AccountSettingsForms/ChangeEmail';

const AccountSettings = ({ navigation, goHome }) => {
  const [getSelectionMode, setSelectionMode] = useState(1);
  const expand = () => {
    navigation.openDrawer();
  };

  return (
    <ProfilePage expand={expand} title='ACCOUNT' goHome={goHome}>
      <CustomSwitch
        roundCorner={false}
        selectionColor={'#4DAAAA'}
        getSelectionMode={getSelectionMode}
        setSelectionMode={setSelectionMode}
      />
      <ScrollView
        style={{
          width: '100%',
          marginTop: 30,
        }}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {getSelectionMode == 2 ? <ChangeEmail /> : <ChangePassword />}
      </ScrollView>
    </ProfilePage>
  );
};

export default AccountSettings;

const styles = StyleSheet.create({});
