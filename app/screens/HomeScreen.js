import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import AppScreen from '../components/AppScreen';
import AppColors from '../config/AppColors';
import AppGradientScreen from '../components/AppGradientScreen';
import AppText from '../components/AppText';

function HomeScreen(props) {
  return (
    <AppGradientScreen gradientEnd={{x:1, y:0.7}}>
      
      <View style={styles.topContainer}>
        <View style={styles.topBar}>
          <View style={{flex:1, borderWidth:1, justifyContent:'center'}}>
            <MaterialCommunityIcons style={{marginLeft: 30}} name="menu" size={30} color={AppColors.white}/>
          </View>
          <View style={{flex:1, borderWidth:1, justifyContent: 'center', alignItems: 'center'}}>
            <AppText style={{fontFamily:"Avenir-Medium"}} size={24} color={AppColors.white}>Chron</AppText>
          </View>
          <View style={{flex:1, borderWidth:1, justifyContent: 'center', alignItems:'flex-end'}}>
            <MaterialCommunityIcons style={{marginRight:30}} name="bell" size={30} color={AppColors.white}/>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <View style={{flex:1, borderWidth:1}}></View>
          <View style={{flex:1, borderWidth:1}}></View>
          <View style={{flex:1, borderWidth:1}}></View>
          <View style={{flex:1, borderWidth:1}}></View>
        </View>
        <View style={styles.textContainer}>
          <AppText style={{fontFamily:"Avenir-Heavy"}} size={28} color={AppColors.white}>Make everyday</AppText>
          <AppText style={{fontFamily:"Avenir-Heavy"}} size={28} color={AppColors.veryDarkBlue}>a little</AppText>
          <AppText style={{fontFamily:"Avenir-Heavy"}} size={28} color={AppColors.white}>more memorable</AppText>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <View style={{flex:15, borderWidth:1}}></View>
        <View style={{flex:63, borderWidth:1}}></View>
        <View style={styles.bottomBar}>
          <View style={{flex:1, borderWidth:1}}></View>
          <View style={{flex:1, borderWidth:1}}></View>
          <View style={{flex:1, borderWidth:1}}></View>
        </View>
      </View>

    </AppGradientScreen>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    borderWidth: 1,
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: AppColors.backgroundColor,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  topBar: {
    flex: 18,
    flexDirection: 'row',
    borderWidth: 1,
  },
  imageContainer: {
    flex: 51,
    flexDirection: 'row',
    borderWidth: 1,
  },
  textContainer: {
    flex: 30,
    borderWidth: 1,
    paddingLeft: 25,
  },
  bottomBar: {
    flex:22, 
    flexDirection: 'row',
    borderWidth:1
  },
});

export default HomeScreen;