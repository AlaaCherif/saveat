import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Input from '../../UI/Input';
import DateInput from '../../UI/DateInput';
import Button from './../../UI/Button';
import ProfilePage from './ProfilePage';

const EditProfile = ({ navigation, goHome }) => {
  const expand = () => {
    console.log(navigation);
    navigation.openDrawer();
  };
  const [data, setData] = useState({ date: null });
  const [date, setDate] = useState();

  const changeFN = name => {
    setData(previousData => {
      return { ...previousData, firstName: name };
    });
  };
  const changeLN = name => {
    setData(previousData => {
      return { ...previousData, lastName: name };
    });
  };
  const changePhone = number => {
    setData(previousData => {
      return { ...previousData, phoneNumber: number };
    });
  };
  const changeAddress = address => {
    setData(previousData => {
      return { ...previousData, address: address };
    });
  };
  return (
    <ProfilePage expand={expand} goHome={goHome}>
      <Input label='First Name' onChangeText={changeFN} />
      <Input label='Last Name' onChangeText={changeLN} />
      <Input label='Phone Number' onChangeText={changePhone} />
      <DateInput date={date} setDate={setDate} />
      <Input label='Address' onChangeText={changeAddress} />
      <Button backgroundColor='#FFBCBC' title='Save' />
    </ProfilePage>
  );
};

export default EditProfile;

const styles = StyleSheet.create({});
