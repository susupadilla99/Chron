import React from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-gradient-icon';

import AppColors from '../config/AppColors';
import AppGradientScreen from '../components/AppGradientScreen';
import AppIconButton from '../components/AppIconButton';
import AppText from '../components/AppText';
import AppMemoryCard from '../components/AppMemoryCard';
import AppMemoryData from '../data/AppMemoryData';

const memories = AppMemoryData.memories;

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

      <View style={styles.bottomContainer}>
        <View style={{height:100, alignItems:'flex-end', paddingTop:45, paddingRight:25}}>
          <TouchableOpacity>
            <AppText style={{textDecorationLine:'underline'}} size={14} color={AppColors.darkGray}>Sort by</AppText>
          </TouchableOpacity>
        </View>
        <View style={styles.memoryContainer}>
          <FlatList 
            style={{width: 332}}
            data={memories}
            renderItem={({item}) => (
              <AppMemoryCard 
                category={item.category}
                title={item.title}
                subtitle={item.subtitle}
                />
            )}
            ItemSeparatorComponent={() =>
              <View style={{height:15}}/>
            }
            />
        </View>
      </View>

      <View style={styles.absoluteContainer}>
        <TouchableHighlight style={{borderRadius:20}} onPress={() => console.log("Hi mom!")}>
          <View style={styles.categoryContainer}>
            <Icon
              style={{alignSelf:'center', marginRight: 20}}
              name="appstore1"
              type="antdesign"
              size={40}
              color={AppColors.darkGray}
            />
            <AppText style={{fontFamily:'Avenir-Heavy'}} size={24}>All memories</AppText>
          </View>
        </TouchableHighlight>
      </View>

    </AppGradientScreen>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    flex: 20,
  },
  topBar: {
    width: '100%',
    height: 65,
    flexDirection: 'row',
  },  
  bottomContainer: {
    flex: 77,
    backgroundColor: AppColors.backgroundColor,
  },
  memoryContainer: {
    flex: 1,
    alignItems: 'center',
  },
  absoluteContainer: {
    marginTop: 102,
    alignItems:'center',
    alignSelf:'center', 
    position:'absolute'
  },
  categoryContainer: {
    width: 330,
    height: 75,
    flexDirection: 'row',
    borderRadius: 20,
    backgroundColor: AppColors.white,
    shadowOffset: {width:1, height:1},
    shadowRadius: 5,
    shadowOpacity: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MemoryScreen;