import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './app/navigation/AuthNavigator';

import MemoryScreen from './app/screens/MemoryScreen';
import LoginScreen from './app/screens/LoginScreen';

export default function App() {
  return (
    <LoginScreen/>
    /*
    <NavigationContainer>
      <AuthNavigator/>
    </NavigationContainer>
    */
  );
};
