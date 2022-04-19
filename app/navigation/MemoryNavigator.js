import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import MemoryScreen from '../screens/MemoryScreen';
import MemoryInfoScreen from '../screens/MemoryInfoScreen';

const MemoryStack = createStackNavigator();

const MemoryNavigator = () => (
  <MemoryStack.Navigator>
    <MemoryStack.Screen name="Memory" component={MemoryScreen} options={{headerShown:false}}/>
    <MemoryStack.Screen name="MemoryInfo" component={MemoryInfoScreen} options={{headerShown:false}}/>
  </MemoryStack.Navigator>
)

export default MemoryNavigator;