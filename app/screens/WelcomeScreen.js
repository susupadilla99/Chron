import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

import AppScreen from '../components/AppScreen';
import AppColors from '../config/AppColors';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
  return (
    <AppScreen>

      <View style={styles.topContainer}>
        <MaterialCommunityIcons name="head-lightbulb" size={60} color={AppColors.lightBlue} />
      </View>

      <View style={styles.midContainer}>
        <AppText size={50}>Welcome!</AppText>
        <View style={{flex: 1, paddingRight: 150}}> 
          <AppText size={16}>Get started by login or sign up for an account</AppText>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <AppButton title="Sign up" titleSize={18} style={styles.button} onPress={() => {console.log("Going to sign in screen!")}}/>
        <View style={styles.orContainer}>
          <View style={styles.line}/>
          <AppText size={12}>or</AppText>
          <View style={styles.line}/>
        </View>
        <View style={styles.textContainer}>
          <AppText size={14}>Already have an account: </AppText>
          <TouchableOpacity onPress={() => {console.log("Going to login screen!")}}>
            <Text style={styles.hyperlink}> Login now</Text>
          </TouchableOpacity>
        </View>
      </View>

    </AppScreen>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    flex: 2,
    padding: 40,
    justifyContent: 'center',
  },
  midContainer: {
    flex: 5,
    paddingTop: 100,
    paddingLeft: 40,
  },
  bottomContainer: {
    flex: 2,
  },
  button: {
    alignSelf: 'center',
    width: 300,
  },
  line: {
    width: 160, 
    height: 1, 
    borderWidth:1, 
    borderColor: AppColors.darkGray, 
    margin: 10
  },
  orContainer: {
    flex:1, 
    flexDirection: 'row', 
    height: 35, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  textContainer: {
    flex:1, 
    flexDirection: 'row',
    justifyContent: 'center',
  },
  hyperlink: {
    fontFamily: 'Avenir',
    fontSize: 14, 
    color: 'blue',
    textDecorationLine: 'underline',
  }
})

export default WelcomeScreen;