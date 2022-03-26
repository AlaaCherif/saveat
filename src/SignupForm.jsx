import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Input from './UI/Input';
import Button from './UI/Button';

const newUser = {
  email: '',
  password: '',
  passwordConfirm: '',
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email!')
    .required('You need to input your email!'),
  password: Yup.string().required('You need to input your password !'),
  passwordConfirm: Yup.string()
    .equals([Yup.ref('password')], 'Password s do not match !')
    .required('Please confirm your password !'),
});

const SignupForm = () => {
  return (
    <Formik
      initialValues={newUser}
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
        errors,
        handleChange,
        touched,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => {
        const { email, password, passwordConfirm } = values;
        return (
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
            {!errors.password ? (
              <Text style={styles.help}>
                Must be longer than 8 characters and contain one capital letter.
              </Text>
            ) : null}
            <Input
              error={touched.passwordConfirm && errors.passwordConfirm}
              label='Confirm Password'
              value={passwordConfirm}
              onBlur={handleBlur('passwordConfirm')}
              onChangeText={handleChange('passwordConfirm')}
              secureTextEntry
            />

            <Button
              title='Submit'
              onPress={handleSubmit}
              disabled={isSubmitting}
            />
          </View>
        );
      }}
    </Formik>
  );
};

export default SignupForm;

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
