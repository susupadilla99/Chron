import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from './app/navigation/AuthNavigator';
import TabNavigator from './app/navigation/TabNavigator';
import MemoryScreen from './app/screens/MemoryScreen';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import MemoryInfoScreen from './app/screens/MemoryInfoScreen';

export default function App() {
  return (
    //<RegisterScreen/>
    <NavigationContainer>
      <AuthNavigator/>
    </NavigationContainer>
  );
};
