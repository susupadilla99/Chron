import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './app/navigation/AuthNavigator';

import ProfileScreen from './app/screens/ProfileScreen';
import HomeScreen from './app/screens/HomeScreen';

export default function App() {
  return (
    <ProfileScreen/>
    /*
    <NavigationContainer>
      <AuthNavigator/>
    </NavigationContainer>
    */
  );
};
