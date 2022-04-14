import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Formik } from 'formik';
import Input from '../../../UI/Input';
import Button from '../../../UI/Button';
import * as Yup from 'yup';

const data = { old: '', new: '', confirm: '' };
const validationSchema = Yup.object({
  old: Yup.string().required('You need to input your old password!'),
  new: Yup.string().required('You need to input your new password!'),
  confirm: Yup.string()
    .equals([Yup.ref('new')], 'Passwords do not match !')
    .required('Please confirm your password !'),
});
const ChangePassword = () => {
  return (
    <View>
      <Formik initialValues={data} validationSchema={validationSchema}>
        {({ handleChange, handleBlur, handleSubmit, values }) => {
          return (
            <>
              <Input label='Old Password' />
              <Input label='New Password' />
              <Input label='Confirm' />
              <Button title='Save' backgroundColor='#FFBCBC' />
            </>
          );
        }}
      </Formik>
    </View>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({});
