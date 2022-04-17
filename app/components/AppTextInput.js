import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import AppColors from '../config/AppColors';

function AppTextInput({...otherProp}) {
  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        autoCapitalize='none'
        autoCorrect={false} 
        {...otherProp}/>
      <View style={styles.line}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  input: {
    fontFamily: 'Avenir',
    fontSize: 20,
    color: AppColors.black,
    opacity: 0.8,
  },
  line: {
    width: 264,
    height: 1,
    borderWidth: 1,
  }
})

export default AppTextInput;