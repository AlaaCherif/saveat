import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Button from './UI/Button';
import { Formik } from 'formik';
import Input from './UI/Input';
import * as Yup from 'yup';

const userCreds = {
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email!')
    .required('You need to input your email!'),
  password: Yup.string().required('You need to input your password!'),
});

const LoginForm = () => {
  return (
    <Formik
      initialValues={userCreds}
      validationSchema={validationSchema}
      onSubmit={(values, formikActions) => {
        setTimeout(() => {
          formikActions.resetForm();
          formikActions.setSubmitting(false);
        }, 3000);
      }}
    >
      {({
        values,
        handleChange,
        errors,
        handleBlur,
        touched,
        handleSubmit,
        isSubmitting,
      }) => {
        const { email, password } = values;
        return (
          <>
            <View style={styles.inputContainer}>
              <Input
                error={touched.email && errors.email}
                label='Email'
                value={email}
                onBlur={handleBlur('email')}
                onChangeText={handleChange('email')}
              />
              <Input
                error={touched.password && errors.password}
                label='Password'
                value={password}
                onBlur={handleBlur('password')}
                onChangeText={handleChange('password')}
                secureTextEntry
              />
              <Text style={styles.help}>
                Must be longer than 8 characters and contain one capital letter.
              </Text>
              <Button
                title='Submit'
                onPress={handleSubmit}
                disabled={isSubmitting}
              />
              <Text style={{ ...styles.help, marginVertical: 6 }}>
                Forgot your password ?
              </Text>
            </View>
          </>
        );
      }}
    </Formik>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  inputContainer: {
    marginLeft: '20%',
    marginTop: '15%',
    maxWidth: '60%',
  },
  help: {
    fontSize: 15,
    color: '#A5A5A5',
  },
});
