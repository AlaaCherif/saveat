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

const App = () => {
  const [token, setToken] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(async () => {
    setToken(await AsyncStorageLib.getItem('authToken'));
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const Stack = createNativeStackNavigator();
  if (loading)
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  return (
    <AuthProvider>
      <NavigationContainer>
        {token === null || true ? (
          <Stack.Navigator
            screenOptions={{
              headerTransparent: true,
              animation: 'fade_from_bottom',
            }}
          >
            <Stack.Screen
              name='Home'
              component={Home}
              options={{ headerTitle: props => <Title {...props} /> }}
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
              name='Success'
              component={SignupSuccess}
              options={{ headerTitle: props => <Title {...props} /> }}
            />
            <Stack.Screen
              name='LoggedHome'
              component={AuthedHome}
              options={{ headerTitle: props => <Title {...props} /> }}
            />
          </Stack.Navigator>
        ) : (
          <AuthedHome />
        )}
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
