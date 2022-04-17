import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import AppGradientScreen from '../components/AppGradientScreen';
import AppProfileItem from '../components/AppProfileItem';
import AppText from '../components/AppText';
import AppColors from '../config/AppColors';

function ProfileScreen(props) {
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
        <View style={{height:130}}/>
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
          title="Logout" />
        <View style={styles.bottomBar}>
          <View style={{flex:1, borderWidth:1}}></View>
          <View style={{flex:1, borderWidth:1}}></View>
          <View style={{flex:1, borderWidth:1}}></View>
        </View>
      </View>
      <View style={styles.absoluteContainer}>
        <View style={styles.profileContainer}></View>
      </View>
    </AppGradientScreen>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    flex:28.6,
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 66,
    backgroundColor: AppColors.backgroundColor,
  },
  bottomBar: {
    width: "100%" ,
    height: 85,
    flexDirection: 'row',
    borderWidth:1
  },
  absoluteContainer: {
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center', 
    position:'absolute'
  },
  profileContainer: {
    width: 330,
    height: 200,
    borderRadius: 30,
    backgroundColor: AppColors.white,
    marginTop: 130,
    shadowOffset: {width:1, height:1},
    shadowRadius: 5,
    shadowOpacity: 0.2,
  }
});

export default ProfileScreen;