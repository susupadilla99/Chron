import React, {useState} from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity, TouchableHighlight } from 'react-native';

import AppColors from '../config/AppColors';
import AppGradientScreen from '../components/AppGradientScreen';
import AppIconButton from '../components/AppIconButton';
import AppText from '../components/AppText';
import AppMemoryCard from '../components/AppMemoryCard';
import AppMemoryData from '../data/AppMemoryData';
import AppCategoryColors from '../config/AppCategoryColors';
import AppCategoryPicker from '../components/AppCategoryPicker';
import AppCategories from '../data/AppCategories';

const categories = AppCategories.categories;

function MemoryScreen(props) {

  const [refreshing, setRefreshing] = useState(false);
  const [memories, setMemories] = useState(AppMemoryData.memories);
  const [currentCategory, setCurrentCategory] = useState(categories[5]);

  const deleteMemories = (memory) => {
    const temp = memories.filter(item => item.id !== memory.id);
    setMemories(temp);
    
  };

  return (
    <AppGradientScreen gradientEnd={{x:1, y:0.3}}>

      <View style={styles.topContainer}>
        <View style={styles.topBar}>
          <View style={{flex:1, justifyContent:'center'}}>
            <AppIconButton 
              style={{marginLeft: 30}} 
              icon="menu" 
              size={30} 
              color={AppColors.white} 
              onPress={()=>{console.log(currentCategory)}} />
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
            refreshing={refreshing}
            onRefresh={() => setMemories(AppMemoryData.memories)}
            renderItem={({item}) => (
              <AppMemoryCard 
                category={item.category}
                title={item.title}
                subtitle={item.date}
                onPress={()=>console.log("Going to info screen")}
                onSwipeLeft={() => (
                  <View style={styles.deleteBox}>
                    <AppIconButton
                      style={{alignSelf: 'center'}}
                      icon="trash-can"
                      iconType="material-community"
                      size={50}
                      color={AppCategoryColors.red}
                      onPress={()=>deleteMemories(item)} />
                  </View>
                )}
                />
            )}
            ItemSeparatorComponent={() =>
              <View style={{height:15}}/>
            }
            />
        </View>
      </View>

      <View style={styles.absoluteContainer}>
        <AppCategoryPicker 
          category={currentCategory} 
          onSelectItem={(item) => setCurrentCategory(item)} />
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
  deleteBox: {
    width:75,
    justifyContent:'center',
  }
});

export default MemoryScreen;