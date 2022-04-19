import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import AppGradientScreen from '../components/AppGradientScreen';
import AppProfileItem from '../components/AppProfileItem';
import AppText from '../components/AppText';
import AppColors from '../config/AppColors';
import AppAccountManager from '../data/AppAccountManager';
import AppDataManager from '../data/AppDataManager';



function ProfileScreen({navigation}) {
  
  const userID = AppDataManager.getInstance().getUserID(); 
  console.log(userID);
  const userData =  AppAccountManager.getInstance().getUserData({userID});

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
          <Image source={{
            uri: (userData.profileImage!=undefined)&&(userData.profileImage!='')?userData.profileImage:'https://cdn1.vectorstock.com/i/thumb-large/22/05/male-profile-picture-vector-1862205.jpg'}} 
            style={styles.image} />
          <AppText size={18}>{userData.name}</AppText>
          <AppText size={14}>@{userData.username}</AppText>
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