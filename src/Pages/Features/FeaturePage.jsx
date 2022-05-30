import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useEffect, useContext } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import AuthContext from '../../context/AuthProvider';
import Page from '../../Page';

const FeaturePage = ({ handleLogout, goProfile }) => {
  return (
    <Page noAnimation={true}>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginTop: -20,
        }}
      >
        <TouchableOpacity onPress={goProfile}>
          <Icon
            style={{ padding: 20, paddingTop: 0 }}
            name='person-outline'
            size={30}
            color='#4DAAAA'
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogout}>
          <Icon
            style={{ padding: 20, paddingTop: 0 }}
            name='log-out-outline'
            size={30}
            color='#4DAAAA'
          />
        </TouchableOpacity>
      </View>
    </Page>
  );
};

export default FeaturePage;

const styles = StyleSheet.create({});
