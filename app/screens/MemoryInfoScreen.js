import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppGradientScreen from '../components/AppGradientScreen';
import AppIconButton from '../components/AppIconButton';
import AppColors from '../config/AppColors';
import AppText from '../components/AppText';

function MemoryInfoScreen(props) {
  return (
    <AppGradientScreen gradientEnd={{x:1, y:0.2}}>
      <View style={styles.topContainer}>
        <View style={styles.topBar}>
          <View style={{flex:1, justifyContent:'center'}}>
            <AppIconButton style={{marginLeft: 30}} icon="chevron-left" size={40} color={AppColors.white}/>
          </View>
          <View style={{flex:1.5, justifyContent: 'center', alignItems: 'center'}}>
            <AppText style={{fontFamily:"Avenir-Medium"}} size={24} color={AppColors.white}>Chron</AppText>
          </View>
          <View style={{flex:1, justifyContent: 'center', alignItems:'flex-end'}}>
            <AppIconButton style={{marginRight:30}} icon="pencil" size={30} color={AppColors.white}/>
          </View>
        </View>
      </View>
      <View style={styles.midContainer}></View>
      <View style={styles.bottomContainer}></View>
    </AppGradientScreen>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    borderWidth: 1,
  },
  topBar: {
    width: '100%',
    height: 65,
    flexDirection: 'row',
  },
  midContainer: {
    flex: 1.8,
    borderWidth: 1,
  },
  bottomContainer: {
    flex: 5,
    borderWidth: 1,
  }
})

export default MemoryInfoScreen;