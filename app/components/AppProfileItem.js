import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-gradient-icon';
import { LinearGradient } from 'expo-linear-gradient';

import AppText from './AppText';
import AppColors from '../config/AppColors';

function AppProfileItem({icon, iconType, title, onPress}) {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <LinearGradient 
        style={styles.icon} 
        colors={[AppColors.lightBlue, AppColors.darkBlue]} 
        start= {{x: 0, y: 0}}
        end= {{x: 1, y: 1}} >
        <Icon
          style={{alignSelf:'center'}}
          name={icon}
          type={iconType}
          size={32}
          color={AppColors.white} />
      </LinearGradient>
      <AppText size={20}>{title}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 40,
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    marginEnd: 40,
  }
});

export default AppProfileItem;