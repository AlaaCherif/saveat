import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useDispatch } from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { Back } from './Icons/ProfileLogos';
const CustomDrawer = ({ navigation }) => {
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
