import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import React, { useEffect, useRef } from 'react';
import check from '../../assets/check.png';
import close from '../../assets/close.png';

const Message = ({ disappear, message, type }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      fadeOut();
      setTimeout(disappear, 300);
    }, 3000);
  };
  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setTimeout(disappear, 300);
  };
  useEffect(() => {
    fadeIn();
  }, []);
  return (
    <Animated.View
      style={{ opacity: fadeAnim, position: 'absolute', bottom: 30 }}
    >
      <TouchableWithoutFeedback onPress={fadeOut}>
        <View style={styles.container}>
          <View
            style={{
              ...styles.colored,
              backgroundColor: type === 'Error' ? 'red' : '#50c766',
            }}
          />
          <Image
            source={type === 'Error' ? close : check}
            style={{ width: 35, height: 35 }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text>{type}</Text>
            <Text>{message}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Animated.View>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8fafb',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 7,
    height: 60,
    marginBottom: 20,
    flexDirection: 'row',
  },
  colored: {
    backgroundColor: '#50c766',
    width: 5,
    height: 60,
    position: 'absolute',
    left: 0,
    bottom: 0,
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
});
