import React from 'react';
import Title from './src/UI/Title';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Pages/Home';
import AccountAccess from './src/Pages/AccountAccess';
import Signup from './src/Pages/Singup';
import EmailVerification from './src/Pages/EmailVerification';
import AuthedHome from './src/Pages/AuthedHome';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTransparent: true,
            animation: 'simple_push',
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
            name='Authed'
            component={AuthedHome}
            options={{ headerTitle: props => <Title {...props} /> }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
