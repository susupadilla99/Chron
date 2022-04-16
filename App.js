import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

import AppColors from './app/config/AppColors';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, backgroundColor: "red" }} />
      <View style={{ flex: 1, backgroundColor: AppColors.white }} />
      <View style={{ flex: 1, backgroundColor: AppColors.black }} />
    </View> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});
