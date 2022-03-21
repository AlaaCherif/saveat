import React from 'react';
import Title from './src/Title';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Pages/Home';
import Login from './src/Pages/Login';

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
            component={Login}
            options={{ headerTitle: props => <Title {...props} /> }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
