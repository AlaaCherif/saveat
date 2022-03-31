import React from 'react';
import { View, Text } from 'react-native';

const MyTimer = ({ expiryTimestamp }) => {
  const { seconds, minutes } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn('onExpire called'),
  });

  return (
    <View>
      <Text>{minutes}</Text>:<Text>{seconds}</Text>
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
