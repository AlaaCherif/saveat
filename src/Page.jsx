import { StyleSheet, ImageBackground, Animated } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import bare from '../assets/bare.png';
import React, { useRef, useEffect } from 'react';
import Svg, { Path, Rect } from 'react-native-svg';
import KeyboardAvoidingWrapper from './UI/KeyboardAvoidingWrapper';
import Easing from 'react-native/Libraries/Animated/Easing';

const Page = ({ children, second, third, noAnimation }) => {
  let progress = -100;
  if (!noAnimation) {
    progress = third
      ? useRef(new Animated.Value(-350)).current
      : useRef(new Animated.Value(-930)).current;
  }

  useEffect(() => {
    if (second) startAnimation();
    if (third) startSecondAnimation();
  }, []);
  const startAnimation = () => {
    if (noAnimation) return;
    setTimeout(() => {
      Animated.timing(progress, {
        toValue: -350,
        useNativeDriver: false,
        duration: 750,
        easing: Easing.elastic(),
      }).start();
    }, 200);
  };
  const startSecondAnimation = () => {
    setTimeout(() => {
      Animated.timing(progress, {
        toValue: -100,
        useNativeDriver: false,
        duration: 750,
        easing: Easing.elastic(),
      }).start();
    }, 200);
  };
  return (
    <KeyboardAvoidingWrapper>
      <ImageBackground source={bare} resizeMode='cover' style={styles.image}>
        <Animated.View style={[styles.svgContainer, { right: progress }]}>
          <Svg width='880' height='2400' viewBox='0 0 880 2400' fill='none'>
            <Path
              d='M100.907 2400L92.9205 2360C84.3316 2320 69.2632 2240 44.7018 2160C21.0446 2080 -12.1058 2000 4.4694 1920C21.0446 1840 84.3316 1760 125.016 1680C165.701 1600 180.769 1520 205.33 1440C228.988 1360 262.138 1280 269.672 1200C277.206 1120 262.138 1040 221.453 960C180.769 880 117.482 800 100.907 720C84.3316 640 117.482 560 149.125 480C180.769 400 213.919 320 205.33 240C197.344 160 149.125 80.0003 125.016 40.0003L100.907 7.20688e-05H342V40.0003C342 80.0003 342 160 342 240C342 320 342 400 342 480C342 560 342 640 342 720C342 800 342 880 342 960C342 1040 342 1120 342 1200C342 1280 342 1360 342 1440C342 1520 342 1600 342 1680C342 1760 342 1840 342 1920C342 2000 342 2080 342 2160C342 2240 342 2320 342 2360V2400H100.907Z'
              fill='white'
            />
            <Rect x='307' width='538' height='2400' fill='white' />
          </Svg>
        </Animated.View>
        {children}
        <StatusBar />
      </ImageBackground>
    </KeyboardAvoidingWrapper>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    paddingTop: 100,
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  svgContainer: {
    position: 'absolute',
    top: 0,
  },
});
