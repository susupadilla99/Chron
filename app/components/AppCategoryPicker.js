import React, {useState} from 'react';
import { StyleSheet, View, TouchableHighlight, Modal, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import AppCategories from '../data/AppCategories';
import AppColors from '../config/AppColors';
import AppText from './AppText';
import AppScreen from './AppScreen';
import AppIconButton from './AppIconButton';
import AppCategoryColors from '../config/AppCategoryColors';
import AppCategoryItem from './AppCategoryItem';
import { FlatList } from 'react-native-gesture-handler';

const categories = AppCategories.categories;

function AppCategoryPicker({category, onSelectItem, ...otherProp}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
    <TouchableHighlight style={{borderRadius:20}} onPress={() => setModalVisible(!modalVisible)}>
      <View style={styles.picker}>
        <MaterialCommunityIcons 
          style={{marginRight: 15}}
          name={categories.find(x=>x.id===category.id).icon}
          size={40}
          color={categories.find(x=>x.id===category.id).color} 
          />
        <AppText style={{fontFamily:'Avenir-Heavy'}} size={24}>{category.type}</AppText>
      </View>
    </TouchableHighlight>

    <Modal visible={modalVisible} animationType="slide">
      <AppScreen>
        <View style={styles.modalTop}>
          <AppIconButton
            icon="close-circle"
            size={40}
            color={AppCategoryColors.red}
            onPress={()=>setModalVisible(!modalVisible)}
            />
        </View>
        <View style={styles.modalBottom}>
          <FlatList
            data={categories}
            renderItem={({item})=>(
              <AppCategoryItem 
                category={item} 
                key={item.id} 
                onPress={() => {
                  onSelectItem(item);
                  setModalVisible(!modalVisible);
                }} />
            )}
            />
        </View>
      </AppScreen>
    </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  picker: {
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
  modalTop: {
    height: 80,
    flexDirection: 'column',
    alignItems:'flex-end',
    marginTop: 20,
    marginRight: 20,
  },
  modalBottom: {
    flex: 1,
  },
});

export default AppCategoryPicker;