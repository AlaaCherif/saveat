import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import ProfilePage from './ProfilePage';
import { PenIcon, Rectangle } from '../../UI/Icons/ProfileLogos';
import onion from '../../../assets/onion.png';
import ProgressBar from './../../UI/ProgressBar';
import Button from './../../UI/Button';
import AuthContext from '../../context/AuthProvider';

const ProfilePreview = ({ navigation }) => {
  const finishProfile = () => {
    navigation.navigate('Edit');
  };
  const expand = () => {
    navigation.openDrawer();
  };
  const { auth } = useContext(AuthContext);
  return (
    <ProfilePage backgroundColor='#4DAAAA' expand={expand} color='white'>
      <View style={styles.iconContainer}>
        <Rectangle />
        <Image source={onion} style={styles.icon} />
        <TouchableOpacity style={styles.change}>
          <PenIcon />
        </TouchableOpacity>
      </View>
      <Text style={styles.greeting}>Hi, {auth.email}</Text>
      <View style={styles.bottom}>
        <View style={styles.content}>
          <Text style={styles.h1}>Profile Progress</Text>
          <Text style={styles.help}>You're almost there!</Text>
          <ProgressBar />
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Button
              backgroundColor='#FFBCBC'
              title='Finish Now'
              onPress={finishProfile}
            />
          </View>
        </View>
      </View>
    </ProfilePage>
  );
};

export default ProfilePreview;

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    top: 0,
    left: 35,
  },
  change: {
    backgroundColor: 'white',
    width: 22,
    height: 22,
    borderRadius: 20,
    position: 'absolute',
    bottom: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 25,
  },
  bottom: {
    backgroundColor: 'white',
    height: 200,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  content: {
    marginHorizontal: 30,
    marginVertical: 20,
    justifyContent: 'flex-start',
  },
  h1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4DAAAA',
  },
  help: {
    fontSize: 15,
    color: '#BCC5C5',
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
