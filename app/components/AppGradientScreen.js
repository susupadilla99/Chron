import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';

import AppColors from '../config/AppColors';

function AppGradientScreen({gradientEnd, children}) {
  return (
    <LinearGradient
      style={{flex:1}}
      colors={[AppColors.lightBlue, AppColors.darkBlue]}
      start={{x:0, y:0}}
      end={gradientEnd}
      >
      <View style={styles.screen}>
        <StatusBar
          animated={true}
          backgroundColor={AppColors.backgroundColor}
          barStyle='light-content' />
        {children}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
    marginTop: Constants.statusBarHeight,
  },
})

export default AppGradientScreen;