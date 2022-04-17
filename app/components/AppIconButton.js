import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'


function AppIconButton({icon, size, onPress, style, color}) {
  return (
    <TouchableOpacity style={[styles.icon, style]} onPress={onPress}>
      <MaterialCommunityIcons name={icon} size={size} color={color}/>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    flex: 1,
    justifyContent: 'center'
  }
});

export default AppIconButton;