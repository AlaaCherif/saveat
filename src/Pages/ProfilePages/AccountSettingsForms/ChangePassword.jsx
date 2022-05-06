import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Formik } from 'formik';
import Input from '../../../UI/Input';
import Button from '../../../UI/Button';
import * as Yup from 'yup';

const data = { oldPass: '', newPass: '', confirm: '' };
const validationSchema = Yup.object({
  oldPass: Yup.string().required('You need to input your old password!'),
  newPass: Yup.string().required('You need to input your new password!'),
  confirm: Yup.string()
    .equals([Yup.ref('newPass')], 'Passwords do not match !')
    .required('Please confirm your password !'),
});

const ChangePassword = () => {
  const [loading, setLoading] = useState(false);
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const toggleShow = setShow => {
    setShow(prev => !prev);
  };
  const submitHandler = (values, formikAction) => {
    setLoading(true);
    console.log(values);
    setTimeout(() => {
      formikAction.resetForm();
      setLoading(false);
    }, 1000);
  };
  return (
    <View>
      <Formik
        initialValues={data}
        validationSchema={validationSchema}
        onSubmit={submitHandler}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors,
        }) => {
          const { oldPass, confirm, newPass } = values;
          return (
            <>
              <Input
                label='Old Password'
                error={touched.oldPass && errors.oldPass}
                placeholder='Actual password'
                value={oldPass}
                onBlur={handleBlur('oldPass')}
                onChangeText={handleChange('oldPass')}
                secureTextEntry={!showOld}
                editable={!loading}
                toggle={toggleShow.bind(this, setShowOld)}
              />
              <Input
                label='New Password'
                error={touched.newPass && errors.newPass}
                placeholder='New password'
                value={newPass}
                onBlur={handleBlur('newPass')}
                onChangeText={handleChange('newPass')}
                secureTextEntry={!showNew}
                editable={!loading}
                toggle={toggleShow.bind(this, setShowNew)}
              />
              <Input
                label='Confirm'
                error={touched.confirm && errors.confirm}
                placeholder='Confirm password'
                value={confirm}
                onBlur={handleBlur('confirm')}
                onChangeText={handleChange('confirm')}
                secureTextEntry={!showConfirm}
                editable={!loading}
                toggle={toggleShow.bind(this, setShowConfirm)}
              />
              <Button
                title='Save'
                backgroundColor='#FFBCBC'
                onPress={handleSubmit}
                disabled={loading}
              />
            </>
          );
        }}
      </Formik>
    </View>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({});
