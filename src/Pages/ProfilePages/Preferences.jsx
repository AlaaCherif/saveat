import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ProfilePage from './ProfilePage';
import CardSelector from '../../UI/CardSelectors/CardSelector';

const Preferences = ({ navigation }) => {
  const expand = () => {
    navigation.openDrawer();
  };
  return (
    <ProfilePage expand={expand} title='PREFERENCES'>
      <View style={styles.innerContainer}>
        <Text style={styles.help}>
          Are you allergic to some food elements ? Or do you have some special
          preferences ? Complete your profile so we can offer you the best food
          deals !
        </Text>
        <Text style={styles.secondaryTitle}>
          Allergies you might suffer from ...
        </Text>
      </View>
      <CardSelector />
    </ProfilePage>
  );
};

export default Preferences;

const styles = StyleSheet.create({
  help: {
    fontSize: 17,
    color: '#A5A5A5',
    marginVertical: 10,
  },
  innerContainer: {
    maxWidth: '80%',
  },
  secondaryTitle: {
    color: '#4DAAAA',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
