import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Expand, HomeLogo } from './../../UI/Icons/ProfileLogos';

const ProfilePage = ({
  children,
  expand,
  goHome,
  title,
  backgroundColor,
  color,
}) => {
  return (
    <View style={{ ...styles.container, backgroundColor: backgroundColor }}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={expand}
          style={{ padding: 10, marginLeft: 20 }}
        >
          <Expand color={color} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={goHome}
          style={{ padding: 10, marginRight: 20 }}
        >
          <HomeLogo color={color} />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>{title}</Text>
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
