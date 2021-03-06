import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import RegisterSuccessScreen from '../screens/RegisterSuccessScreen';
import HomeScreen from '../screens/HomeScreen';
import TabNavigator from './TabNavigator';
import MemoryInfoScreen from '../screens/MemoryInfoScreen';

const AppStack = createStackNavigator();

const AuthNavigator = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}}/>
    <AppStack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
    <AppStack.Screen name="Register" component={RegisterScreen} options={{headerShown: false}}/>
    <AppStack.Screen name="RegisterSuccess" component={RegisterSuccessScreen} options={{headerShown: false}}/>
    <AppStack.Screen name="Tab" component={TabNavigator} options={{headerShown: false}}/>
  </AppStack.Navigator>
)

export default AuthNavigator;