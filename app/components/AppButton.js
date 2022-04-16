import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import AppColors from '../config/AppColors';
import AppText from './AppText';

function AppButton({title, titleSize, style, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient 
        colors={[AppColors.lightBlue, AppColors.darkBlue]} 
        style={[styles.button, style]}
        locations={[0.2, 1]}
        start={{x: 0.0, y: 0.0}}
        end={{ x: 1.0, y:1.0}}>
        <AppText size={titleSize} color={AppColors.white}>{title}</AppText>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: AppColors.darkBlue,
    borderRadius: 20,
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default AppButton;