import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-gradient-icon';

import AppColors from '../config/AppColors';

function AppGradientIconButton({icon, iconType, size, onPress, buttonStyle, iconStyle}) {
  return (
    <TouchableOpacity style={[{flex:1},buttonStyle]} onPress={onPress}>
      <Icon
        style={iconStyle}
        name={icon}
        type={iconType}
        size={size}
        colors={[
          {color: AppColors.lightBlue, offset:"0"},
          {color: AppColors.darkBlue, offset:"1"},
        ]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({

});

export default AppGradientIconButton;