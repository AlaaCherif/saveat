import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useState } from 'react';
import image1 from '../../assets/image1.png';
import AppIntroSlider from 'react-native-app-intro-slider';

const Slides = () => {
  const renderItem = ({ item }) => {
    return (
      <View style={{ ...styles.slide, backgroundColor: item.backgroundColor }}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} style={{ width: 214, height: 289 }} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };
  const slides = [
    {
      key: 'one',
      title: 'STRART SAVING',
      text: 'Description.\nSay something cool',
      image: image1,
      backgroundColor: '#ECEEEE',
    },
    {
      key: 'two',
      title: 'Title 2',
      text: 'Other cool stuff',
      image: image1,
      backgroundColor: '#febe29',
    },
    {
      key: 'three',
      title: 'Rocket guy',
      text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
      image: image1,
      backgroundColor: '#22bcb5',
    },
  ];
  return (
    <AppIntroSlider renderItem={renderItem} data={slides} onDone={() => {}} />
  );
};

export default Slides;

const styles = StyleSheet.create({
  slide: {
    paddingTop: '10%',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 43,
  },
});
