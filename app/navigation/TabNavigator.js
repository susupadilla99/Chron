import React from 'react';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from 'react-native-gradient-icon';
import { useNavigation } from '@react-navigation/native';

import AppColors from '../config/AppColors';
import HomeScreen from '../screens/HomeScreen';
import MemoryScreen from '../screens/MemoryScreen';
import ProfileScreen from '../screens/ProfileScreen';


const AppTab = createBottomTabNavigator();

const TabNavigator = () => (
  <AppTab.Navigator initialRouteName="Home">
    <AppTab.Screen 
      name="Memory" 
      component={MemoryScreen} 
      options={{
        headerShown:false,
        tabBarShowLabel:false,
        tabBarIcon:({focused, color, size}) => (
          <Icon 
            style={{alignSelf:'center'}}
            name="collections"
            type="material" 
            size={35}
            colors={focused?
              [{color:AppColors.lightBlue, offset:0},{color:AppColors.darkBlue,offset:1}]:
              [{color:AppColors.darkGray, offset:0},{color:AppColors.darkGray,offset:1}]
            }
          />),
      }} />
    <AppTab.Screen 
      name="Home" 
      component={HomeScreen} 
      options={{
        headerShown:false,
        tabBarShowLabel:false,
        tabBarIcon:({focused, color, size}) => (
          <Icon 
            style={{alignSelf:'center'}}
            name="home"
            type="antdesign" 
            size={35}
            colors={focused?
              [{color:AppColors.lightBlue, offset:0},{color:AppColors.darkBlue,offset:1}]:
              [{color:AppColors.darkGray, offset:0},{color:AppColors.darkGray,offset:1}]
            }
          />),
      }} />
    <AppTab.Screen 
      name="Profile" 
      component={ProfileScreen} 
      options={{
        headerShown:false,
        tabBarShowLabel:false,
        tabBarIcon:({focused, color, size}) => (
          <Icon 
            style={{alignSelf:'center'}}
            name="account"
            type="material-community" 
            size={35}
            colors={focused?
              [{color:AppColors.lightBlue, offset:0},{color:AppColors.darkBlue,offset:1}]:
              [{color:AppColors.darkGray, offset:0},{color:AppColors.darkGray,offset:1}]
            }
          />),
      }} />
  </AppTab.Navigator>
)

export default TabNavigator;
