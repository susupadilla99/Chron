import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppColors from '../config/AppColors';
import AppText from './AppText';

function AppButton({title, titleSize}) {
  return (
    <TouchableOpacity>
      <View style={styles.button}>
        <AppText size={titleSize}>{title}</AppText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: AppColors.lightBlue,
    borderRadius: 20,
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 4,
    margin: 15,
    justifyContent: 'center',
  },
})

export default AppButton;