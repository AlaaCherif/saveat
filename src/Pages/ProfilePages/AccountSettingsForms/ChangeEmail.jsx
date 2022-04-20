import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Input from '../../../UI/Input';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Button from '../../../UI/Button';

const formData = { email: '' };

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid Email').required('Email is required'),
});

const ChangeEmail = () => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const submitHandler = (values, formikAction) => {
    setLoading(true);
    console.log(values);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.help}>
        We will send you an email to your old address to confirm your identity.
      </Text>
      <Formik
        initialValues={formData}
        validationSchema={validationSchema}
        onSubmit={submitHandler}
      >
        {({ values, handleChange, touched, errors, handleSubmit }) => {
          const { email } = values;
          return (
            <>
              <Input
                placeholder='New address'
                value={email}
                onChangeText={handleChange('email')}
                error={touched.email && errors.email}
              />
              <Text>{error && error.toString()}</Text>
              <Button
                title='Send Email'
                onPress={handleSubmit}
                disabled={loading}
                backgroundColor='#FFBCBC'
              />
            </>
          );
        }}
      </Formik>
    </View>
  );
};

export default ChangeEmail;

const styles = StyleSheet.create({
  container: {
    maxWidth: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  help: {
    fontSize: 15,
    color: '#A5A5A5',
    marginBottom: 15,
  },
});
