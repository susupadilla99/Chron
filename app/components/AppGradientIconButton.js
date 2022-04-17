import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-gradient-icon';

function AppGradientIconButton({icon, iconType, size, onPress, buttonStyle, iconStyle, colors}) {
  return (
    <TouchableOpacity style={[{flex:1},buttonStyle]} onPress={onPress}>
      <Icon
        style={iconStyle}
        name={icon}
        type={iconType}
        size={size}
        colors={colors}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({

});

export default AppGradientIconButton;