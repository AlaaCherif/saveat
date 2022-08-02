import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { Back } from './Icons/ProfileLogos';
const CustomDrawer = props => {
  // useEffect(() => {
  //   // if (props.state.routes[0].name === 'Settings') {
  //   // }
  //   // console.log(props.navigation.isFocused);
  // }, [props.state]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        paddingTop: 60,
      }}
    >
      <View style={{ padding: 15 }}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.closeDrawer();
            // console.log(props.state);
          }}
        >
          <Back />
        </TouchableOpacity>
      </View>

      <DrawerContentScrollView>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({});
