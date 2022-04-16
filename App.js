import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

import AppColors from './app/config/AppColors';
import AppText from './app/components/AppText';
import AppButton from './app/components/AppButton';
import AppScreen from './app/components/AppScreen';

export default function App() {
  return (
    <AppScreen>
      <AppText size={30}>Hello World</AppText>
      <AppButton title="Login" titleSize={16}/>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
