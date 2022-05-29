import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import image1 from '../../assets/image1.png';
import AppIntroSlider from 'react-native-app-intro-slider';
import cuteBox from '../../assets/cuteBox.png';
import money from '../../assets/money.png';
import meal from '../../assets/meal.png';
import Icon from 'react-native-vector-icons/Ionicons';

const Slides = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return (
      <View style={{ ...styles.slide, backgroundColor: item.backgroundColor }}>
        <Image source={item.image} style={{ width: 230, height: 289 }} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <Text style={styles.description}>{item.text}</Text>
      </View>
    );
  };
  const slides = [
    {
      key: 'one',
      title: 'Save Food !',
      text: 'Get food for next to nothing.\nWhile saving it from being thrown away   ',
      image: image1,
      backgroundColor: '#f7f7f9',
    },
    {
      key: 'two',
      title: 'Save Money !',
      text: 'Perfeclty for your pocket.\nSave money while saving food',
      image: money,
      backgroundColor: '#f7f7f9',
    },
    {
      key: 'three',
      title: 'Get Started !',
      text: 'Choose to get boxes full of goods\nYou get the choice to get canned or fresh food',
      image: cuteBox,
      backgroundColor: '#f7f7f9',
    },
    {
      key: 'four',
      title: 'Get Started !',
      text: 'Or opt for last minute fast food deals.\nFor a reduced price get rich meal !',
      image: meal,
      backgroundColor: '#f7f7f9',
    },
  ];
  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={slides}
      activeDotStyle={{ backgroundColor: 'rgba(246, 181, 215, 0.31)' }}
      renderNextButton={() => (
        <View style={styles.buttonCircle}>
          <Icon name='arrow-forward' color='#373737' size={30} />
        </View>
      )}
      showSkipButton={true}
      renderSkipButton={() => {
        return (
          <View
            style={{
              ...styles.buttonCircle,
              backgroundColor: 'rgba(3,47,130,0.5)',
            }}
          >
            <Text
              style={{ ...styles.buttonText, fontSize: 16, fontWeight: 'bold' }}
            >
              Skip
            </Text>
          </View>
        );
      }}
      renderDoneButton={() => (
        <View style={styles.buttonCircle}>
          <Icon name='checkmark' color='#373737' size={30} />
        </View>
      )}
      onDone={() => {
        navigation.navigate('Home');
      }}
    />
  );
};

export default Slides;

const styles = StyleSheet.create({
  slide: {
    paddingTop: '10%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    color: '#2f3942',
    fontWeight: '600',
  },
  titleContainer: {
    marginVertical: 30,
    paddingVertical: 6,
    paddingHorizontal: 40,
    borderRadius: 30,
    borderWidth: 0.5,
    borderColor: '#959595',
  },
  description: {
    color: '#959595',
    fontSize: 15,
    textAlign: 'center',
  },
  buttonCircle: {
    borderRadius: 80,
    padding: 10,
    backgroundColor: 'rgba(246, 181, 215, 0.31)',
  },
});
