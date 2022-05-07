import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useContext } from 'react';
import Page from '../Page';
import LoginLogo from '../UI/Icons/LoginLogo';
import Progress from '../UI/Icons/Progress';
import Input from '../UI/Input';
import Button from '../UI/Button';
import { Timer } from '../logic/Timer';
import { verifySignup } from '../api/api.user';
import AuthContext from '../context/AuthProvider';

const EmailVerification = ({ route, navigation }) => {
  const { setInfo } = useContext(AuthContext);
  const [error, setError] = useState();
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const handleChange = text => {
    setCode(text);
  };
  const verifyAccount = async () => {
    setLoading(true);
    const res = await verifySignup({ code: code });
    if (res === 'true') {
      setInfo({ ...res, email: route.params.email });
      next();
    } else {
      setLoading(false);
      setError(res);
    }
  };
  const next = () => {
    navigation.navigate('Success');
  };
  return (
    <Page third={true}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <LoginLogo />
          <Text style={styles.title}>Email Verification</Text>
        </View>
        <Progress step={2} />
        <Text style={styles.help}>
          We sent a verification code to *******@***.***. please enter your code{' '}
        </Text>
        <Input
          label='Verification code:'
          placeholder='Enter code'
          value={code}
          onChangeText={handleChange}
        />
        <Text style={{ ...styles.help, marginVertical: 10 }}>
          <View>
            <Timer />
          </View>
        </Text>
        <Text style={{ ...styles.help, marginVertical: 5 }}>Resend code ?</Text>
        <Text>{error && error.toString()}</Text>
        <Button
          title='Verify Email'
          onPress={verifyAccount}
          disabled={loading}
        />
      </View>
    </Page>
  );
};

export default EmailVerification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: '15%',
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
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
  },
  help: {
    fontSize: 15,
    color: '#A5A5A5',
    marginVertical: 30,
    width: 220,
  },
});
