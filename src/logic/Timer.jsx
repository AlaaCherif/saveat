import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTimer } from 'react-timer-hook';

const MyTimer = ({ expiryTimestamp }) => {
  const { seconds, minutes } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn('onExpire called'),
  });

  return (
    <View>
      <Text style={styles.help}>
        Time remaining : {minutes}:{seconds.toPrecision(2)}
      </Text>
    </View>
  );
};
export const Timer = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 300); // 5 minutes timer
  return (
    <View>
      <MyTimer expiryTimestamp={time} />
    </View>
  );
};
const styles = StyleSheet.create({
  help: {
    fontSize: 15,
    color: '#A5A5A5',
    width: 220,
  },
});
