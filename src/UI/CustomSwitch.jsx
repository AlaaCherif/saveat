import React, { useState } from 'react';

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { EmailLogo, PasswordLogo } from './Icons/ProfileLogos';

const CustomSwitch = ({
  roundCorner,
  selectionColor,
  getSelectionMode,
  setSelectionMode,
}) => {
  //   const [getSelectionMode, setSelectionMode] = useState(selectionMode);
  const [getRoundCorner, setRoundCorner] = useState(roundCorner);

  const updatedSwitchData = val => {
    setSelectionMode(val);
  };

  return (
    <View>
      <View
        style={{
          height: 40,
          width: 140,
          backgroundColor: 'white',
          borderRadius: getRoundCorner ? 25 : 5,
          borderWidth: 1,
          borderColor: selectionColor,
          flexDirection: 'row',
          justifyContent: 'center',
          padding: 0,
        }}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => updatedSwitchData(1)}
          style={{
            flex: 1,
            backgroundColor: getSelectionMode == 1 ? selectionColor : 'white',
            borderRadius: getRoundCorner ? 25 : 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <PasswordLogo fill={getSelectionMode == 1 ? 'white' : '#4DAAAA'} />
        </TouchableOpacity>
        <TouchableOpacity
          TouchableOpacity
          activeOpacity={1}
          onPress={() => updatedSwitchData(2)}
          style={{
            flex: 1,
            backgroundColor: getSelectionMode == 2 ? selectionColor : 'white',
            borderRadius: getRoundCorner ? 25 : 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              color: getSelectionMode == 2 ? 'white' : selectionColor,
            }}
          >
            <EmailLogo fill={getSelectionMode == 2 ? 'white' : '#4DAAAA'} />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CustomSwitch;
