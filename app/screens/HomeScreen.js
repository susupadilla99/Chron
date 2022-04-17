import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Icon } from 'react-native-gradient-icon';

import AppColors from '../config/AppColors';
import AppGradientScreen from '../components/AppGradientScreen';
import AppText from '../components/AppText';
import AppGradientIconButton from '../components/AppGradientIconButton';
import AppIconButton from '../components/AppIconButton';

function HomeScreen(props) {
  return (
    <AppGradientScreen gradientEnd={{x:1, y:0.7}}>
      
      <View style={styles.topContainer}>
        <View style={styles.topBar}>
          <View style={{flex:1, justifyContent:'center'}}>
            <AppIconButton style={{marginLeft: 30}} icon="menu" size={30} color={AppColors.white}/>
          </View>
          <View style={{flex:1.5, justifyContent: 'center', alignItems: 'center'}}>
            <AppText style={{fontFamily:"Avenir-Medium"}} size={24} color={AppColors.white}>Chron</AppText>
          </View>
          <View style={{flex:1, justifyContent: 'center', alignItems:'flex-end'}}>
            <AppIconButton style={{marginRight:30}} icon="bell" size={30} color={AppColors.white}/>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <View style={{flex:1, alignItems:'center', paddingTop: 40}}>
            <Image source={require('../assets/Sample1.jpg')} style={styles.image}/>
          </View>
          <View style={{flex:1, justifyContent:'flex-start', alignItems:'center', paddingBottom:10}}>
            <Image source={require('../assets/Sample5.jpg')} style={styles.image}/>
            <Image source={require('../assets/Sample2.jpg')} style={[styles.image,{marginTop:20}]}/>
          </View>
          <View style={{flex:1, paddingTop:20, alignItems:'center'}}>
            <Image source={require('../assets/Sample3.jpg')} style={styles.image}/>
          </View>
          <View style={{flex:1, alignItems:'center' ,paddingTop: 80}}>
            <Image source={require('../assets/Sample4.jpg')} style={styles.image}/>
          </View>
        </View>
        <View style={styles.textContainer}>
          <AppText style={{fontFamily:"Avenir-Heavy"}} size={28} color={AppColors.white}>Make everyday</AppText>
          <AppText style={{fontFamily:"Avenir-Heavy"}} size={28} color={AppColors.veryDarkBlue}>a little</AppText>
          <AppText style={{fontFamily:"Avenir-Heavy"}} size={28} color={AppColors.white}>more memorable</AppText>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <View style={{flex:15, flexDirection:'row'}}>
          <View style={{flex: 2, justifyContent: 'center'}}>
            <AppText style={{marginLeft:25}} size={20}>Recent memories</AppText>
          </View>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <AppGradientIconButton
            buttonStyle={{alignSelf:'flex-end', justifyContent:'center', marginRight:25}}
            icon="plus-circle" 
            iconType="material-community" 
            size={40}
            colors={[
              {color: AppColors.lightBlue, offset:"0"},
              {color: AppColors.darkBlue, offset:"1"},
            ]} />
          </View>
        </View>
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
  },
  imageContainer: {
    flex: 51,
    flexDirection: 'row',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  textContainer: {
    flex: 30,
    paddingLeft: 25,
  },
  bottomBar: {
    flex:22, 
    flexDirection: 'row',
    borderWidth:1
  },
});

export default HomeScreen;