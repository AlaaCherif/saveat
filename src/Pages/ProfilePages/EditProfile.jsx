import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useState, useContext } from 'react';
import Input from '../../UI/Input';
import DateInput from '../../UI/DateInput';
import Button from './../../UI/Button';
import ProfilePage from './ProfilePage';
import AuthContext from '../../context/AuthProvider';
import { updateMe } from '../../api/api.user';
import Message from './../../UI/Message';

const EditProfile = ({ navigation, goHome }) => {
  const { auth, refresh } = useContext(AuthContext);
  const [data, setData] = useState(auth);
  const [date, setDate] = useState();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState();

  const expand = () => {
    navigation.openDrawer();
  };

  const submitEdit = async () => {
    setLoading(true);
    const result = await updateMe(data, auth.token);
    if (result) {
      setMessage('Your information have been saved !');
    } else {
      setMessage('Something went wrong');
    }
    setLoading(false);
    await refresh();
  };
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
    <ProfilePage expand={expand} goHome={goHome} title='PROFILE'>
      <ScrollView>
        <Input
          label='First Name'
          onChangeText={changeFN}
          placeholder='Enter your first name'
          value={data.firstName}
          editeable={!loading}
        />
        <Input
          label='Last Name'
          onChangeText={changeLN}
          placeholder='Enter your last name'
          value={data.lastName}
          editeable={!loading}
        />
        <Input
          label='Phone Number'
          onChangeText={changePhone}
          placeholder='Enter your phone number'
          value={data.phoneNumber && data.phoneNumber.toString()}
          editeable={!loading}
        />
        <DateInput date={date} setDate={setDate} />
        <Input
          label='Address'
          onChangeText={changeAddress}
          placeholder='Enter your address'
          value={data.address}
          editeable={!loading}
        />
        <Button
          disabled={loading}
          backgroundColor='#FFBCBC'
          title='Save'
          onPress={submitEdit}
        />
      </ScrollView>
      {message && (
        <Message
          disappear={() => {
            setMessage(false);
          }}
        />
      )}
    </ProfilePage>
  );
};

export default EditProfile;

const styles = StyleSheet.create({});
