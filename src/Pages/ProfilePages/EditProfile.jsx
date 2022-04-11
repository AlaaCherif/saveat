import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Input from '../../UI/Input';
import DateInput from '../../UI/DateInput';
import Button from './../../UI/Button';

const EditProfile = () => {
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
    <View style={styles.container}>
      <Text style={styles.title}>PROFILE</Text>
      <Input label='First Name' onChangeText={changeFN} />
      <Input label='Last Name' onChangeText={changeLN} />
      <Input label='Phone Number' onChangeText={changePhone} />
      <DateInput date={date} setDate={setDate} />
      <Input label='Address' onChangeText={changeAddress} />
      <Button backgroundColor='#FFBCBC' title='Save' />
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 40,
    letterSpacing: 10,
    color: '#4DAAAA',
    fontWeight: '100',
    marginBottom: 50,
  },
});
