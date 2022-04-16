import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppColors from '../config/AppColors';
import AppText from './AppText';

function AppButton({title, titleSize, style, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.button, style]}>
        <AppText size={titleSize} color={AppColors.white}>{title}</AppText>
      </View>
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