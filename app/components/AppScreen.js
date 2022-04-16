import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';

import AppColors from '../config/AppColors';

function AppScreen({children}) {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar
        animated={true}
        backgroundColor={AppColors.backgroundColor}
        barStyle='dark-content' />
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: AppColors.backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default AppScreen;