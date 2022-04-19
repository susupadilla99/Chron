import React, { useState } from 'react';
import { StyleSheet, View, Image, Dimensions, ScrollView, Modal } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup'
import { useNavigation } from '@react-navigation/native';

import AppScreen from '../components/AppScreen';
import AppGradientScreen from '../components/AppGradientScreen';
import AppIconButton from '../components/AppIconButton';
import AppColors from '../config/AppColors';
import AppText from '../components/AppText';
import AppGradientIconButton from '../components/AppGradientIconButton';
import AppDataManager from '../data/AppDataManager';
import AppTextInput from '../components/AppTextInput';

const dataManager = AppDataManager.getInstance();

let yupSchema = Yup.object().shape(
  {
    image: Yup.string().label("Image"),
    title: Yup.string().required().label("Title"),
    date: Yup.string().required().label("Date"),
    content: Yup.string().required().max(1000).label("Content"),
  }
);

function MemoryInfoScreen({navigation, route}) {

  const [modalVisible, setModalVisible] = useState(false);
  const [memory, setMemory] = useState(route.params.memory)

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
              onPress={()=>setModalVisible(!modalVisible)} />
          </View>
        </View>
      </View>

      <View style={styles.midContainer}>
        <Image source={{uri: memory.image}} style={styles.image} />
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
          <View style={styles.content}>
            <AppText style={{fontFamily:'Avenir-Medium', marginTop:10}} size={24}>{memory.title}</AppText>
            <AppText size={16}>{memory.date}</AppText>
            <View style={{flex:1, marginBottom:122}}>
              <ScrollView style={{flex:1, marginTop:20}}>
                <AppText style={{marginTop:25}} size={16}>{memory.content}</AppText>
              </ScrollView>
            </View>
          </View>
        </View>
      </View>

      <Modal visible={modalVisible} animationType="slide">
      <AppScreen>
        <Formik
              initialValues={{
                title: memory.title, 
                date: memory.date, 
                content: memory.content, 
                image: memory.image }}
                onSubmit={ (values) => { 
                let newMemory = {
                  userID: memory.userID,
                  category: 'Vacation',
                  title: values.title,
                  date: values.date,
                  image: values.image,
                  content: values.content,
                  id: memory.id,
                };
                dataManager.editMemory(newMemory);
                setMemory(newMemory);
                setModalVisible(!modalVisible);
              }}
              validationSchema={yupSchema}
              >
            {({values, handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
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
                    onPress={(handleSubmit)} />
                </View>
              </View>
              <View style={styles.inputContainer}>
                <AppTextInput
                  value={values.image}
                  placeholderTextColor={AppColors.black}
                  textContentType="URL"
                  onBlur={()=>{setFieldTouched("image")}}
                  onChangeText={handleChange("image")}
                  />
                {touched.image && <AppText size={12} color="red">{errors.image}</AppText>}
              </View>
              <View style={styles.inputContainer}>
                <AppTextInput
                  value={values.title}
                  placeholderTextColor={AppColors.black}
                  textContentType="none"
                  onBlur={()=>{setFieldTouched("title")}}
                  onChangeText={handleChange("title")}
                  />
                {touched.title && <AppText size={12} color="red">{errors.title}</AppText>}
              </View>
              <View style={styles.inputContainer}>
                <AppTextInput
                  value={values.date}
                  placeholderTextColor={AppColors.black}
                  textContentType="none"
                  onBlur={()=>{setFieldTouched("date")}}
                  onChangeText={handleChange("date")}
                  />
                {touched.date && <AppText size={12} color="red">{errors.date}</AppText>}
              </View>
              <View style={styles.contentContainer}>
                <AppTextInput
                  value={values.content}
                  style={{flex:1}}
                  lineStyle={{borderWidth: 0}}
                  multiline={true}
                  placeholderTextColor={AppColors.black}
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
  content: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
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
})

export default MemoryInfoScreen;