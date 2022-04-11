import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { Back } from './Icons/ProfileLogos';
import { DrawerActions } from '@react-navigation/native';

const CustomDrawer = props => {
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
            console.log('pressed');
            DrawerActions.toggleDrawer();
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
