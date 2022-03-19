import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';
import { View, StyleSheet } from 'react-native';

function Dash() {
  return (
    <View style={styles.icon}>
      <Svg width='64' height='9' viewBox='0 0 64 9' fill='white'>
        <Rect width='64' height='9' rx='4.5' fill='#FEFEFE' />
      </Svg>
    </View>
  );
}

export default Dash;

const styles = StyleSheet.create({
  icon: {
    marginVertical: 20,
  },
});
