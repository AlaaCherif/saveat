import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import React, { useState, useContext } from 'react';
import Button from './UI/Button';
import { Formik } from 'formik';
import Input from './UI/Input';
import * as Yup from 'yup';
import FbLogo from './UI/Icons/FbLogo';
import { login } from './api/api.user';
import AuthContext from './context/AuthProvider';

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

const LoginForm = ({ next, forgotPassword }) => {
  const { setAuth } = useContext(AuthContext);
  const [showPassword, setshowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [failed, setfailed] = useState(false);
  const toggleShow = () => {
    setshowPassword(prev => !prev);
  };
  const submitHandler = async values => {
    setfailed(false);
    setLoading(true);
    let usefulValues = { email: values.email, password: values.password };
    const res = await login(usefulValues);
    if (!res) {
      setTimeout(() => {
        setLoading(false);
        return setfailed(`These credentiels don't match any account!`);
      }, 1000);
    } else {
      setAuth({ email: usefulValues.email, token: res });
      next();
    }
  };

  return (
    <KeyboardAvoidingView>
      <Formik
        initialValues={userCreds}
        validationSchema={validationSchema}
        onSubmit={submitHandler}
      >
        {({
          values,
          handleChange,
          errors,
          handleBlur,
          touched,
          handleSubmit,
        }) => {
          const { email, password } = values;
          return (
            <>
              <View style={styles.inputContainer}>
                <Input
                  error={touched.email && errors.email}
                  label='Email:'
                  value={email}
                  onBlur={handleBlur('email')}
                  onChangeText={handleChange('email')}
                  editable={!loading}
                />
                <Input
                  error={touched.password && errors.password}
                  label='Password:'
                  value={password}
                  onBlur={handleBlur('password')}
                  onChangeText={handleChange('password')}
                  secureTextEntry={!showPassword}
                  toggle={toggleShow}
                  editable={!loading}
                />
                {!errors.password ? (
                  <Text style={styles.help}>
                    Must be longer than 8 characters and contain one capital
                    letter.
                  </Text>
                ) : null}
                <Button
                  title='Submit'
                  onPress={handleSubmit}
                  disabled={loading}
                />
                <Text style={styles.error}>{failed && failed.toString()}</Text>
                <TouchableOpacity onPress={forgotPassword}>
                  <Text style={{ ...styles.help, marginTop: 10 }}>
                    Forgot your password ?
                  </Text>
                </TouchableOpacity>
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
              </View>
            </>
          );
        }}
      </Formik>
    </KeyboardAvoidingView>
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
  error: {
    fontSize: 15,
    color: 'red',
  },
});
