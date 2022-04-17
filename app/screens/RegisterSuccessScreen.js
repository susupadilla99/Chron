import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import AppScreen from '../components/AppScreen';
import AppColors from '../config/AppColors';
import AppText from '../components/AppText';
import { clearErrors } from 'react-native/Libraries/LogBox/Data/LogBoxData';

function RegisterSuccessScreen(props) {
  return (
    <AppScreen>
      
      <View style={styles.topContainer}>
        <MaterialCommunityIcons name='head-lightbulb' size={90} color={AppColors.lightBlue}/>
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.container}>
          <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <AppText size={30}>Success!</AppText>
            <AppText size={16}>Your account has been created</AppText>
          </View>
          <View style={{flex:1.5, paddingTop: 30, alignItems: 'center'}}>
            <MaterialCommunityIcons name="check-circle-outline" size={120} color={AppColors.lightBlue}/>
          </View>
        </View>
      </View>
      
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
  },
  bottomContainer: {
    flex: 3.4,
    paddingTop: 80,
    alignItems: 'center',
  },
  container: {
    width: 300,
    height: 350,
    backgroundColor: AppColors.gray,
    borderRadius: 50,
  }
});

export default RegisterSuccessScreen;