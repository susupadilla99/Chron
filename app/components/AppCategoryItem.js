import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import AppText from './AppText';

function AppCategoryItem({category, onPress}) {
  return (
    <TouchableOpacity style={styles.categoryItem} onPress={onPress}>
      <MaterialCommunityIcons
        style={{marginRight: 30}}
        name={category.icon}
        size={60}
        color={category.color}
        />
      <AppText style={{fontFamily:'Avenir-Heavy'}} size={30}>{category.type}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  categoryItem: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 30,
  },
})

export default AppCategoryItem;