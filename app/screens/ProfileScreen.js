import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import AppGradientScreen from '../components/AppGradientScreen';
import AppProfileItem from '../components/AppProfileItem';
import AppText from '../components/AppText';
import AppColors from '../config/AppColors';

function ProfileScreen({navigation}) {
  return (
    <AppGradientScreen gradientEnd={{x:1, y: 0.4}}>
      <View style={styles.topContainer}>
        <AppText 
          style={{fontFamily: "Avenir-Medium", marginTop:60}} 
          size={24} 
          color={AppColors.white}
          >Profile
        </AppText>
      </View>
      <View style={styles.bottomContainer}>
        <View style={{height:110}}/>
        <AppProfileItem 
          icon="appstore1"
          iconType="antdesign"
          title="Dashboard" />
        <AppProfileItem 
          icon="medal"
          iconType="material-community"
          title="Badges" />
        <AppProfileItem 
          icon="settings-sharp"
          iconType="ionicon"
          title="Settings" />
        <AppProfileItem 
          icon="logout"
          iconType="antdesign"
          title="Logout"
          onPress={()=>{navigation.navigate("Welcome")}} />
      </View>
      <View style={styles.absoluteContainer}>
        <View style={styles.profileContainer}>
          <Image source={require('../assets/Sample1.jpg')} style={styles.image} />
          <AppText size={18}>Will Smith</AppText>
          <AppText size={14}>@oscarslapper</AppText>
        </View>
      </View>
    </AppGradientScreen>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    flex:38.5,
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 61.4,
    backgroundColor: AppColors.backgroundColor,
  },
  absoluteContainer: {
    marginTop: 160,
    alignItems:'center',
    alignSelf:'center', 
    position:'absolute'
  },
  profileContainer: {
    width: 330,
    height: 200,
    borderRadius: 30,
    backgroundColor: AppColors.white,
    shadowOffset: {width:1, height:1},
    shadowRadius: 5,
    shadowOpacity: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: AppColors.darkGray,
    marginBottom: 15,
  },
});

export default ProfileScreen;