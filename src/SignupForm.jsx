import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Input from './UI/Input';
import Button from './UI/Button';
import FbLogo from './UI/FbLogo';
import Progress from './UI/Icons/Progress';
import { signUp } from './api/api.user';

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

const SignupForm = ({ next }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(prev => !prev);
  };
  const toggleShowConfirm = () => {
    setShowConfirm(prev => !prev);
  };
  return (
    <Formik
      initialValues={newUser}
      validationSchema={validationSchema}
      onSubmit={async (values, formikActions) => {
        if (values.password !== values.passwordConfirm) return;
        const usefulValues = { email: values.email, password: values.password };
        const res = await signUp(usefulValues);
        if (res === 'true') {
          console.log('we got here and executed next');
          next();
        } else {
          console.log('request timed out! sign up error !');
        }
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
            <Progress step={1} />
            <Input
              error={touched.email && errors.email}
              label='Email:'
              value={email}
              onBlur={handleBlur('email')}
              onChangeText={handleChange('email')}
            />
            <Input
              error={touched.password && errors.password}
              label='Password:'
              value={password}
              onBlur={handleBlur('password')}
              onChangeText={handleChange('password')}
              secureTextEntry={!showPassword}
              toggle={toggleShowPassword}
              showPassword={showPassword}
            />
            {!errors.password ? (
              <Text style={styles.help}>
                Must be longer than 8 characters and contain one capital letter.
              </Text>
            ) : null}
            <Input
              error={touched.passwordConfirm && errors.passwordConfirm}
              label='Confirm Password:'
              value={passwordConfirm}
              onBlur={handleBlur('passwordConfirm')}
              onChangeText={handleChange('passwordConfirm')}
              secureTextEntry={!showConfirm}
              toggle={toggleShowConfirm}
              showPassword={showConfirm}
            />
            <Button
              title='Submit'
              onPress={handleSubmit}
              disabled={isSubmitting}
            />
            <Text
              style={{ textAlign: 'center', ...styles.help, marginTop: 10 }}
            >
              Or
            </Text>
            <Button
              title={<FbLogo />}
              backgroundColor='white'
              color='#A5A5A5'
              borderColor='#A5A5A5'
            />
            <Button
              title={<FbLogo />}
              backgroundColor='white'
              color='#A5A5A5'
              borderColor='#A5A5A5'
              onPress={() => {
                next({ hello: 'fu' });
              }}
            />
          </View>
        );
      }}
    </Formik>
  );
};
//21125610
//53364802
//29212206
//53529891
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
