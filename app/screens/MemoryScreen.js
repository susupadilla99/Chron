import React, {useState} from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity, Modal, Button } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';

import AppColors from '../config/AppColors';
import AppGradientScreen from '../components/AppGradientScreen';
import AppIconButton from '../components/AppIconButton';
import AppText from '../components/AppText';
import AppCategoryColors from '../config/AppCategoryColors';
import AppCategoryPicker from '../components/AppCategoryPicker';
import AppCategories from '../data/AppCategories';
import AppDataManager from '../data/AppDataManager';
import AppScreen from '../components/AppScreen';
import AppMemoryCard from '../components/AppMemoryCard';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import AppAccountManager from '../data/AppAccountManager';

const categories = AppCategories.categories;
const dataManager = AppDataManager.getInstance();

let yupSchema = Yup.object().shape(
  {
    image: Yup.string().label("Image"),
    title: Yup.string().required().label("Title"),
    date: Yup.string().required().label("Date"),
    content: Yup.string().required().max(400).label("Content"),
  }
);

function MemoryScreen({navigation}) {

  const [refreshing, setRefreshing] = useState(false);
  const [memories, setMemories] = useState(dataManager.getData());
  const [currentCategory, setCurrentCategory] = useState(categories.find(item=>item.type==='All memories'));

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <AppGradientScreen gradientEnd={{x:1, y:0.3}}>

      <View style={styles.topContainer}>
        <View style={styles.topBar}>
          <View style={{flex:1, justifyContent:'center'}}>
            <AppIconButton 
              style={{marginLeft: 30}} 
              icon="menu" 
              size={30} 
              color={AppColors.white} />
          </View>
          <View style={{flex:1.5, justifyContent: 'center', alignItems: 'center'}}>
            <AppText style={{fontFamily:"Avenir-Medium"}} size={24} color={AppColors.white}>Chron</AppText>
          </View>
          <View style={{flex:1, justifyContent: 'center', alignItems:'flex-end'}}>
            <AppIconButton 
              style={{marginRight:30}} 
              icon="plus-circle" 
              size={30} 
              color={AppColors.white}
              onPress={()=>setModalVisible(!modalVisible)} />
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
            onRefresh={() => {setMemories(dataManager.getData())}}
            renderItem={({item}) => (
              <AppMemoryCard 
                category={item.category}
                title={item.title}
                subtitle={item.date}
                onPress={()=>{navigation.navigate("MemoryInfo", {memory: item})}}
                onSwipeLeft={() => (
                  <View style={styles.deleteBox}>
                    <AppIconButton
                      style={{alignSelf: 'center'}}
                      icon="trash-can"
                      iconType="material-community"
                      size={50}
                      color={AppCategoryColors.red}
                      onPress={()=>{
                        dataManager.deleteMemory(item.id);
                        setMemories(dataManager.getData());
                      }} />
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

      <Modal visible={modalVisible} animationType="slide">
      <AppScreen>
        <Formik
              initialValues={{title:'', date:'', content:'', image:'',}}
              onSubmit={ (values) => { 
                let newMemory = {
                  userID: dataManager.getUserID(),
                  category: 'Vacation',
                  title: values.title,
                  date: values.date,
                  image: values.image,
                  content: values.content,
                };
                dataManager.addMemory(newMemory);
                setMemories(dataManager.getData());
                setModalVisible(!modalVisible);
              }}
              validationSchema={yupSchema}
              >
            {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
              <>
              <View style={styles.topBar}>
                <View style={{flex:1, justifyContent:'center'}}>
                  <AppIconButton 
                    style={{marginLeft: 30}} 
                    icon="chevron-left"
                    size={30} 
                    color={AppColors.darkBlue}
                    onPress={()=>setModalVisible(!modalVisible)} />
                </View>
                <View style={{flex:1.5}}/>
                <View style={{flex:1, justifyContent: 'center', alignItems:'flex-end'}}>
                  <AppIconButton 
                    style={{marginRight:30}} 
                    icon="check-circle-outline" 
                    size={30} 
                    color={AppColors.darkBlue}
                    onPress={handleSubmit} />
                </View>
              </View>
              <View style={styles.inputContainer}>
                <AppTextInput
                  placeholderTextColor={AppColors.black}
                  placeholder="Image link"
                  textContentType="URL"
                  onBlur={()=>{setFieldTouched("image")}}
                  onChangeText={handleChange("image")}
                  />
                {touched.image && <AppText size={12} color="red">{errors.image}</AppText>}
              </View>
              <View style={styles.inputContainer}>
                <AppTextInput
                  placeholderTextColor={AppColors.black}
                  placeholder="Title"
                  textContentType="none"
                  onBlur={()=>{setFieldTouched("title")}}
                  onChangeText={handleChange("title")}
                  />
                {touched.title && <AppText size={12} color="red">{errors.title}</AppText>}
              </View>
              <View style={styles.inputContainer}>
                <AppTextInput
                  placeholderTextColor={AppColors.black}
                  placeholder="Date"
                  textContentType="none"
                  onBlur={()=>{setFieldTouched("date")}}
                  onChangeText={handleChange("date")}
                  />
                {touched.date && <AppText size={12} color="red">{errors.date}</AppText>}
              </View>
              <View style={styles.contentContainer}>
                <AppTextInput
                  style={{flex:1}}
                  lineStyle={{borderWidth: 0}}
                  multiline={true}
                  placeholderTextColor={AppColors.black}
                  placeholder="Content"
                  textContentType="none"
                  onBlur={()=>{setFieldTouched("content")}}
                  onChangeText={handleChange("content")}
                  />
                {touched.content && <AppText size={12} color="red">{errors.content}</AppText>}
              </View>
              </>
            )}
            </Formik>
      </AppScreen>
    </Modal>
          
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
  },
  inputContainer: {
    height: 100,
    alignItems: 'center',
    paddingTop: 25,
  },
  contentContainer: {
    height: 380,
    paddingTop: 25,
    borderWidth: 1,
    borderColor: AppColors.darkGray,
    marginHorizontal: 50
  }
});

export default MemoryScreen;