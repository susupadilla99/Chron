import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Swipeable } from 'react-native-gesture-handler';

import AppColors from '../config/AppColors';
import AppCategories from '../data/AppCategories';
import AppText from './AppText';

const categories = AppCategories.categories;

function AppMemoryCard({category, title, subtitle, onPress, onSwipeLeft}) {
  return (
    <Swipeable renderRightActions={onSwipeLeft}>
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={[styles.tint,{backgroundColor: categories.find(x => x.type===category).color}]}/>
      <View style={styles.container}>
        <View style={styles.category}>
          <MaterialCommunityIcons
            style={{marginRight:10}}
            name={categories.find(x => x.type===category).icon}
            size={15}
            color={AppColors.darkGray}
            />
          <AppText size={10} color={AppColors.darkGray}>{category}</AppText>
        </View>
        <AppText style={{fontFamily:'Avenir-Medium', marginTop:20}} size={16}>{title}</AppText>
        <AppText style={{marginTop:5}} size={12} color={AppColors.darkGray}>{subtitle}</AppText>
      </View>
    </TouchableOpacity>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 330,
    height: 100,
    flexDirection:'row',
    borderRadius: 20,
    backgroundColor: AppColors.white,
    shadowOffset: {width:1, height:1},
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },  
  tint: {
    width: 30,
    height: '100%',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  container: {
    flex: 1,
    paddingTop: 10,
    paddingLeft: 20,
  },
  category: {
    flexDirection: 'row',
  }
});

export default AppMemoryCard;