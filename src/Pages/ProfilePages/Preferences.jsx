import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import ProfilePage from './ProfilePage';
import CardSelector from '../../UI/CardSelectors/CardSelector';
import gluten from '../../../assets/gluten2.png';
import lactose from '../../../assets/lactose.png';
import nuts from '../../../assets/nuts.png';
import Button from './../../UI/Button';

const Preferences = ({ navigation }) => {
  const [glutenSelected, setGlutenSelected] = useState(true);
  const toggleSelectGluten = () => {
    setGlutenSelected(prevState => !prevState);
  };
  const [lactoseSelected, setLactoseSelected] = useState(true);
  const toggleSelectLactose = () => {
    setLactoseSelected(prevState => !prevState);
  };
  const [nutsSelected, setNutsSelected] = useState(true);
  const toggleSelectNuts = () => {
    setNutsSelected(prevState => !prevState);
  };
  const expand = () => {
    navigation.openDrawer();
  };
  return (
    <ProfilePage expand={expand} title='PREFERENCES'>
      <View style={styles.innerContainer}>
        <Text style={styles.help}>
          Are you allergic to some food elements ? {'\n'}Or do you have some
          special preferences ?{'\n'}Complete your profile so we can offer you
          the best food deals !
        </Text>
        <Text style={styles.secondaryTitle}>
          Allergies you might suffer from ...
        </Text>
      </View>
      <View style={styles.cardContainer}>
        <CardSelector
          image={gluten}
          text={'Gluten'}
          selected={glutenSelected}
          toggleSelect={toggleSelectGluten}
        />
        <CardSelector
          image={lactose}
          text={'Lactose'}
          selected={lactoseSelected}
          toggleSelect={toggleSelectLactose}
        />
        <CardSelector
          image={nuts}
          text={'Nuts'}
          selected={nutsSelected}
          toggleSelect={toggleSelectNuts}
        />
      </View>
      <Button title='Save' />
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
  cardContainer: {
    marginTop: 20,
    flexDirection: 'column',
  },
});
