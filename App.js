import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import AppColors from './app/config/AppColors';
import AppText from './app/components/AppText';
import AppButton from './app/components/AppButton';

export default function App() {
  return (
    <View style={styles.container}>
      <AppText size={30}>Hello World</AppText>
      <AppButton title="Login" titleSize={16}/>
    </View> 
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
