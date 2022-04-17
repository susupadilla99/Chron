import React from 'react';
import { Text, StyleSheet } from 'react-native'
import AppColors from '../config/AppColors';


function AppText({children, size, color, style}) {
  return (
    <Text style={[styles.text, {fontSize: size, color: color}, style]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: AppColors.black,
    fontFamily: 'Avenir',
    fontSize: 20,
  }
})

export default AppText;