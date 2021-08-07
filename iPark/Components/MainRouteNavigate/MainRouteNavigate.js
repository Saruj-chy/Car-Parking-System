import React from 'react';

import {Button, View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// import Registrat from './pages/FirstPage';
// import SecondPage from './pages/SecondPage';
// import ThirdPage from './pages/ThirdPage';
import RegistrationScreen from '../RegistrationScreen/RegistrationScreen';
import MainNavigationScreen from '../MainNavigationScreen/MainNavigationScreen';
import LoginScreen from '../LoginScreen/LoginScreen';

const Stack = createStackNavigator();

const MainRouteNavigate = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MainNavigation"
          component={MainNavigationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>


      
    </NavigationContainer>
  );
};

export default MainRouteNavigate;
