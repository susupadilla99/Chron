import React from 'react';
import { StyleSheet, View, Image, Dimensions, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import AppGradientScreen from '../components/AppGradientScreen';
import AppIconButton from '../components/AppIconButton';
import AppColors from '../config/AppColors';
import AppText from '../components/AppText';
import AppGradientIconButton from '../components/AppGradientIconButton';

function MemoryInfoScreen({navigation, route}) {
  return (
    <AppGradientScreen gradientEnd={{x:1, y:0.2}}>

      <View style={styles.topContainer}>
        <View style={styles.topBar}>
          <View style={{flex:1, justifyContent:'center'}}>
            <AppIconButton 
              style={{marginLeft: 30}} 
              icon="chevron-left" 
              size={40} 
              color={AppColors.white} 
              onPress={()=>{navigation.goBack()}} />
          </View>
          <View style={{flex:1.5, justifyContent: 'center', alignItems: 'center'}}>
            <AppText style={{fontFamily:"Avenir-Medium"}} size={24} color={AppColors.white}>Chron</AppText>
          </View>
          <View style={{flex:1, justifyContent: 'center', alignItems:'flex-end'}}>
            <AppIconButton 
              style={{marginRight:30}} 
              icon="pencil" 
              size={30} 
              color={AppColors.white}
              onPress={()=>{console.log(route.params.memory)}} />
          </View>
        </View>
      </View>

      <View style={styles.midContainer}>
        <Image source={{uri: route.params.memory.image}} style={styles.image} />
      </View>
      
      <View style={styles.bottomContainer}>
        <View style={styles.infoContainer}>
          <View style={styles.topInfoContainer}>
            <View style={styles.buttonContainer}>
              <AppGradientIconButton 
                icon="facebook" 
                iconType="material-community"
                size={25}
                />
              <AppGradientIconButton 
                icon="twitter-with-circle" 
                iconType="entypo"
                size={25}
              />
              <AppGradientIconButton 
                icon="download-circle" 
                iconType="material-community"
                size={25}
                />
            </View>
          </View>
          <View style={styles.contentContainer}>
            <AppText style={{fontFamily:'Avenir-Medium', marginTop:10}} size={24}>{route.params.memory.title}</AppText>
            <AppText size={16}>{route.params.memory.date}</AppText>
            <View style={{flex:1, marginBottom:122}}>
              <ScrollView style={{flex:1, marginTop:20}}>
                <AppText style={{marginTop:25}} size={16}>{route.params.memory.content}</AppText>
              </ScrollView>
            </View>
          </View>
        </View>
      </View>
    
    </AppGradientScreen>
  );
}

const styles = StyleSheet.create({
  topContainer: {
  },
  topBar: {
    width: '100%',
    height: 65,
    flexDirection: 'row',
  },
  midContainer: {
    flex: 1.8,
  },
  image: {
    height: 250,
  },  
  bottomContainer: {
    marginTop: 265,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 265,
    flexDirection: 'column-reverse',
    position: 'absolute',
  },
  infoContainer: {
    flex: 1,
    backgroundColor: AppColors.backgroundColor,
    borderTopRightRadius: 60,
    borderWidth: 1,
  },
  topInfoContainer: {
    height: 55,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    width:120, 
    flexDirection:'row', 
    justifyContent:'flex-end', 
    alignSelf:'center', 
    paddingRight: 30,
  },
  contentContainer: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
  },
  content: {

  },  
})

export default MemoryInfoScreen;