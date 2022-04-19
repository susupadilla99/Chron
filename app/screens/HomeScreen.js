import React from 'react';
import { Image, View, StyleSheet, FlatList } from 'react-native';

import AppColors from '../config/AppColors';
import AppGradientScreen from '../components/AppGradientScreen';
import AppText from '../components/AppText';
import AppGradientIconButton from '../components/AppGradientIconButton';
import AppIconButton from '../components/AppIconButton';
import AppMemoryItem from '../components/AppMemoryItem';
import AppCategories from '../data/AppCategories';
import AppDataManager from '../data/AppDataManager';

function HomeScreen(props) {

  const memories = AppDataManager.getInstance().getData()!=undefined?AppDataManager.getInstance().getData():{};
  const categories = AppCategories.categories;

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
            <Image source={{uri: memories[0]!=undefined?memories[0].image:'https://www.colorhexa.com/4fb1ff.png'}} style={styles.image}/>
          </View>
          <View style={{flex:1, justifyContent:'flex-start', alignItems:'center', paddingBottom:10}}>
            <Image source={{uri: memories[1]!=undefined?memories[1].image:'https://www.colorhexa.com/4fb1ff.png'}} style={styles.image}/>
            <Image source={{uri: memories[2]!=undefined?memories[2].image:'https://www.colorhexa.com/4fb1ff.png'}} style={[styles.image,{marginTop:20}]}/>
          </View>
          <View style={{flex:1, paddingTop:20, alignItems:'center'}}>
            <Image source={{uri: memories[3]!=undefined?memories[3].image:'https://www.colorhexa.com/4fb1ff.png'}} style={styles.image}/>
          </View>
          <View style={{flex:1, alignItems:'center' ,paddingTop: 80}}>
            <Image source={{uri: memories[4]!=undefined?memories[4].image:'https://www.colorhexa.com/4fb1ff.png'}} style={styles.image}/>
          </View>
        </View>
        <View style={styles.textContainer}>
          <AppText style={{fontFamily:"Avenir-Heavy"}} size={28} color={AppColors.white}>Make everyday</AppText>
          <AppText style={{fontFamily:"Avenir-Heavy"}} size={28} color={AppColors.veryDarkBlue}>a little</AppText>
          <AppText style={{fontFamily:"Avenir-Heavy"}} size={28} color={AppColors.white}>more memorable</AppText>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <View style={{flex:19, flexDirection:'row'}}>
          <View style={{flex: 2, justifyContent: 'center'}}>
            <AppText style={{marginLeft:25}} size={20}>Recent memories</AppText>
          </View>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <AppGradientIconButton
            buttonStyle={{alignSelf:'flex-end', justifyContent:'center', marginRight:25}}
            icon="plus-circle" 
            iconType="material-community" 
            size={40} />
          </View>
        </View>
        <View style={styles.memoryContainer}>
          <FlatList
            data={memories}
            renderItem={({item}) => 
              <AppMemoryItem
                icon={categories.find(category => category.type===item.category).icon}
                iconSize={45}
                iconColor={categories.find(category => category.type===item.category).color}
                title={item.title}
                subtitle={item.date}
                key={item.id}
                />}
            />
        </View>

      </View>

    </AppGradientScreen>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    flex: 59,
  },
  bottomContainer: {
    flex: 41,
    backgroundColor: AppColors.backgroundColor,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  topBar: {
    width: '100%',
    height: 65,
    flexDirection: 'row',
  },
  imageContainer: {
    flex: 63,
    flexDirection: 'row',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  textContainer: {
    flex: 37,
    paddingLeft: 25,
  },
  memoryContainer: {
    flex:81, 
  },
  bottomBar: {
    width: "100%" ,
    height: 85,
    flexDirection: 'row',
    borderWidth:1
  },
});

export default HomeScreen;