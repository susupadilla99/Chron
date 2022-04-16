import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import AppColors from './app/config/AppColors';
import AppText from './app/components/AppText';

export default function App() {
  return (
    <View style={styles.container}>
      <AppText>Hello World</AppText>
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
