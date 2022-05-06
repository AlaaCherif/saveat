import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Page from '../Page';
import Input from '../UI/Input';
import Button from '../UI/Button';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { forgotPassword } from '../api/api.user';

const formData = {
  email: '',
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email !')
    .required('You need to provide your email !'),
});

const ForgotPasswordPage = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const submitHandler = async values => {
    setLoading(true);
    let data = { email: values.email };
    const res = await forgotPassword(data);
    console.log(res);
    if (!res) {
      setLoading(false);
      setError('There is no account with this email address!');
    } else {
      setLoading(false);
      setError('Please check your email to continue');
    }
  };
  return (
    <Page third={true}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Trouble Loggin In ?</Text>
        </View>
        <Text style={styles.help}>
          Enter your email and we’ll send you a link to reset your password
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
                  placeholder='Provide your email here'
                  value={email}
                  onChangeText={handleChange('email')}
                  error={touched.email && errors.email}
                />
                <Text>{error && error.toString()}</Text>
                <Button
                  title='Reset Password'
                  onPress={handleSubmit}
                  disabled={loading}
                />
              </>
            );
          }}
        </Formik>

        <View style={styles.separator}>
          <View style={styles.line} />
          <View>
            <Text style={{ width: 50, textAlign: 'center', color: '#A5A5A5' }}>
              Or
            </Text>
          </View>
          <View style={styles.line} />
        </View>
        <Button
          title='New Account'
          backgroundColor='white'
          color='#4DAAAA'
          borderWidth='1'
          onPress={() => navigation.navigate('Login1', { login: false })}
        />
      </View>
    </Page>
  );
};

export default ForgotPasswordPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: '10%',
    alignItems: 'center',
    marginHorizontal: '10%',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    color: '#4DAAAA',
    marginLeft: 20,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  help: {
    fontSize: 15,
    color: '#A5A5A5',
    width: 230,
    marginBottom: 15,
  },
  separator: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 210,
    marginTop: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#A5A5A5',
  },
  seperatorText: { width: 50, textAlign: 'center', color: '#A5A5A5' },
});
