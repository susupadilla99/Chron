import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../screens/ProfileScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import AuthNavigator from './AuthNavigator';

const ProfileStack = createStackNavigator();

const ProfileNavigator = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{headerShown:false}}/>
    <ProfileStack.Screen name="Auth" component={AuthNavigator} options={{headerShown:false}}/>
  </ProfileStack.Navigator>
)

export default ProfileNavigator;