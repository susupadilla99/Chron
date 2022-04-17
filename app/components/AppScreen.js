import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import Constants from 'expo-constants';

import AppColors from '../config/AppColors';

function AppScreen({children}) {
  return (
    <View style={{flex:1, backgroundColor:AppColors.backgroundColor}}>
      <View style={styles.screen}>
        <StatusBar
          animated={true}
          backgroundColor={AppColors.backgroundColor}
          barStyle='dark-content' />
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: AppColors.backgroundColor,
    marginTop: Constants.statusBarHeight,
  },
})

export default AppScreen;