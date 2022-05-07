import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useContext } from 'react';
import Input from '../../UI/Input';
import DateInput from '../../UI/DateInput';
import Button from './../../UI/Button';
import ProfilePage from './ProfilePage';
import AuthContext from '../../context/AuthProvider';
import { updateMe } from '../../api/api.user';

const EditProfile = ({ navigation, goHome }) => {
  const { auth } = useContext(AuthContext);
  const expand = () => {
    navigation.openDrawer();
  };
  const [data, setData] = useState(auth);
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
  const submitEdit = async () => {
    // console.log(await updateMe(data, auth.token));
    await updateMe(data, auth.token);
  };
  return (
    <ProfilePage expand={expand} goHome={goHome} title='PROFILE'>
      <Input
        label='First Name'
        onChangeText={changeFN}
        placeholder='Enter your first name'
        value={data.firstName}
      />
      <Input
        label='Last Name'
        onChangeText={changeLN}
        placeholder='Enter your last name'
        value={data.lastName}
      />
      <Input
        label='Phone Number'
        onChangeText={changePhone}
        placeholder='Enter your phone number'
        value={data.phoneNumber && data.phoneNumber.toString()}
      />
      <DateInput date={date} setDate={setDate} />
      <Input
        label='Address'
        onChangeText={changeAddress}
        placeholder='Enter your address'
        value={data.address}
      />
      <Button backgroundColor='#FFBCBC' title='Save' onPress={submitEdit} />
      <Button
        backgroundColor='#FFBCBC'
        title='auth'
        onPress={() => {
          console.log(auth);
        }}
      />
    </ProfilePage>
  );
};

export default EditProfile;

const styles = StyleSheet.create({});
