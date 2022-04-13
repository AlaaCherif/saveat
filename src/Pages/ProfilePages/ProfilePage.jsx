import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Expand, HomeLogo } from './../../UI/Icons/ProfileLogos';

const ProfilePage = ({ children, expand }) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={expand} style={{ padding: 10 }}>
          <Expand />
        </TouchableOpacity>
        <TouchableOpacity onPress={expand} style={{ padding: 10 }}>
          <HomeLogo />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>PROFILE</Text>
      {children}
    </View>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  container: {
    paddingTop: '10%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 40,
    letterSpacing: 10,
    color: '#4DAAAA',
    fontWeight: '100',
    marginBottom: 50,
  },
  buttonContainer: {
    paddingBottom: '10%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
