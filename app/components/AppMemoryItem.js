import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppCategoryColors from '../config/AppCategoryColors';
import AppText from './AppText';
import AppColors from '../config/AppColors';

function AppMemoryItem({icon, iconSize, iconColor, title, subtitle}) {
  return (
    <TouchableOpacity style={styles.memoryCard}>
      <MaterialCommunityIcons name={icon} size={iconSize} color={iconColor} />
      <View style={styles.textContainer}>
        <AppText size={16} color={AppColors.darkGray}>{title}</AppText>
        <AppText size={16} color={AppColors.darkGray}>{subtitle}</AppText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  memoryCard: {
    marginTop: 5,
    flexDirection: 'row',
    width: '100%',
    height: 45,
    marginLeft: 25,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 15,
  },
})
export default AppMemoryItem;