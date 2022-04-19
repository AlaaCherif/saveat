import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ProgressBar = props => {
  return (
    <View style={styles.container}>
      <View style={{ ...styles.progress, width: `${props.progress}%` }}>
        <Text style={styles.text}>{props.progress}%</Text>
      </View>
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#B1E4E4',
    width: 340,
    height: 32,
    borderRadius: 10,
  },
  progress: {
    backgroundColor: '#4DAAAA',
    borderRadius: 10,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
