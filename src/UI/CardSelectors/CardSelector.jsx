import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';

const CardSelector = props => {
  const containerStyles = {
    ...styles.container,
    ...(props.selected && styles.selected),
  };
  const contentStyles = {
    ...styles.content,
    ...(props.selected && styles.selectedContent),
  };
  return (
    <TouchableOpacity style={containerStyles} onPress={props.toggleSelect}>
      <Image source={props.image} style={{ width: 50, height: 50 }} />
      <Text style={contentStyles}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default CardSelector;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
    width: 230,
    borderColor: '#4DAAAA',
    borderWidth: 1,
  },
  content: {
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  selected: {
    backgroundColor: '#FFBCBC',
    borderColor: '#FFBCBC',
  },
  selectedContent: {
    color: 'white',
  },
});
