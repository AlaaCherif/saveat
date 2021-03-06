import React, { useEffect, useState } from 'react';
import Title from './src/UI/Title';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Pages/Home';
import AccountAccess from './src/Pages/AccountAccess';
import EmailVerification from './src/Pages/EmailVerification';
import AuthedHome from './src/Pages/AuthedHome';
import SignupSuccess from './src/Pages/SignupSuccess';
import AsyncStorageLib from '@react-native-async-storage/async-storage';
import { View, ActivityIndicator } from 'react-native';
import { AuthProvider } from './src/context/AuthProvider';
import { StyleSheet } from 'react-native';
import ForgotPasswordPage from './src/Pages/ForgotPasswordPage';
import Profile from './src/Pages/Profile';
import { StatusBar } from 'expo-status-bar';
import Slides from './src/Pages/Slides';

const App = () => {
  const [token, setToken] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(async () => {
    setToken(await AsyncStorageLib.getItem('user'));
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const Stack = createNativeStackNavigator();
  let toRender;
  if (loading)
    toRender = (
      <View style={styles.center}>
        <ActivityIndicator color='#4DAAAA' size='large' />
      </View>
    );
  else
    toRender = (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Slides'
          screenOptions={{
            headerTransparent: true,
            animation: 'fade_from_bottom',
          }}
        >
          <Stack.Screen
            name='Slides'
            component={Slides}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Home'
            component={Home}
            options={{
              headerTitle: props => <Title {...props} />,
              headerLeft: null,
            }}
          />
          <Stack.Screen
            name='Login1'
            component={AccountAccess}
            options={{
              headerTitle: props => <Title {...props} />,
            }}
          />
          <Stack.Screen
            name='EmailVerification'
            component={EmailVerification}
            options={{ headerTitle: props => <Title {...props} /> }}
          />
          <Stack.Screen
            name='ForgotPassword'
            component={ForgotPasswordPage}
            options={{ headerTitle: props => <Title {...props} /> }}
          />

          <Stack.Screen
            name='Success'
            component={SignupSuccess}
            options={{ headerTitle: props => <Title {...props} /> }}
          />
          <Stack.Screen
            name='LoggedHome'
            component={AuthedHome}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Profile'
            component={Profile}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  return (
    <AuthProvider>
      {toRender}
      <StatusBar />
    </AuthProvider>
  );
};
const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default App;
