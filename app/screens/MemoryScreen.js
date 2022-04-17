import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppColors from '../config/AppColors';
import AppGradientScreen from '../components/AppGradientScreen';
import AppIconButton from '../components/AppIconButton';
import AppText from '../components/AppText';

function MemoryScreen(props) {
  return (
    <AppGradientScreen gradientEnd={{x:1, y:0.3}}>

      <View style={styles.topContainer}>
        <View style={styles.topBar}>
          <View style={{flex:1, justifyContent:'center'}}>
            <AppIconButton style={{marginLeft: 30}} icon="menu" size={30} color={AppColors.white}/>
          </View>
          <View style={{flex:1.5, justifyContent: 'center', alignItems: 'center'}}>
            <AppText style={{fontFamily:"Avenir-Medium"}} size={24} color={AppColors.white}>Chron</AppText>
          </View>
          <View style={{flex:1, justifyContent: 'center', alignItems:'flex-end'}}>
            <AppIconButton style={{marginRight:30}} icon="plus-circle" size={30} color={AppColors.white}/>
          </View>
        </View>
      </View>

      <View style={styles.bottomContainer}></View>

    </AppGradientScreen>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    borderWidth:1,
  },
  topBar: {
    width: '100%',
    height: 65,
    flexDirection: 'row',
  },  
  bottomContainer: {
    flex: 3.8,
    borderWidth: 1,
    backgroundColor: AppColors.backgroundColor,
  },
});

export default MemoryScreen;