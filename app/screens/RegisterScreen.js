import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';

import AppScreen from '../components/AppScreen';
import AppIconButton from '../components/AppIconButton';
import AppColors from '../config/AppColors';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import AppAccountManager from '../data/AppAccountManager';

let yupSchema = Yup.object().shape(
  {
    name: Yup.string().required().min(1).max(60).label("Full Name"),
    email: Yup.string().required().email().label("Email"),
    username: Yup.string().required().min(8).max(40).label("Username"),
    password: Yup.string().required().min(4).max(12).label("Password"),
    cfpassword: Yup.string().required().oneOf([Yup.ref("password"),null],"Passwords must match").label("Confirm password"),
  }
);

const accountManager = AppAccountManager.getInstance();

function RegisterScreen( {navigation} ) {
  return (
    <AppScreen>

        <View style={styles.topContainer}>
          <AppIconButton 
            style={styles.iconButton} 
            icon="chevron-left" size={30} 
            color={AppColors.black} 
            onPress={()=>{navigation.navigate("Welcome")}}
            />
          <MaterialCommunityIcons 
            style={styles.logo} 
            name='head-lightbulb' 
            size={60} 
            color={AppColors.lightBlue}
            />
        </View>

        <View style={styles.midContainer}>
          <AppText size={28} color={AppColors.black}>Create an account</AppText>
        </View>
          
        <View style={styles.bottomContainer}>
          <View style={{flex:0.5}}/>
          <View style={{flex:5.2}}>
            <Formik
              initialValues={{email:'', username:'', name:'', password:'', cfpassword:''}}
              onSubmit={ (values) => {
                accountManager.addUser(values);
                navigation.navigate("RegisterSuccess");
              }}
              validationSchema={yupSchema}
              >
            {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
              <>
              <View style={styles.inputContainer}>
                <AppTextInput
                  placeholderTextColor={AppColors.darkGray}
                  placeholder="Full name"
                  textContentType="name"
                  onBlur={()=>{setFieldTouched("name")}}
                  onChangeText={handleChange("name")}
                  />
                {touched.name && <AppText size={12} color="red">{errors.name}</AppText>}
              </View>
              <View style={styles.inputContainer}>
                <AppTextInput
                  placeholderTextColor={AppColors.darkGray}
                  placeholder="Email address"
                  keyboardType="email-address"
                  textContentType="emailAddress"
                  onBlur={()=>{setFieldTouched("email")}}
                  onChangeText={handleChange("email")}
                  />
                {touched.email && <AppText size={12} color="red">{errors.email}</AppText>}
              </View>
              <View style={styles.inputContainer}>
                <AppTextInput
                  placeholderTextColor={AppColors.darkGray}
                  placeholder="Username"
                  textContentType="username"
                  onBlur={()=>{setFieldTouched("username")}}
                  onChangeText={handleChange("username")}
                  />
                {touched.username && <AppText size={12} color="red">{errors.username}</AppText>}
              </View>
              <View style={styles.inputContainer}>
                <AppTextInput
                  placeholderTextColor={AppColors.darkGray}
                  placeholder="Password"
                  secureTextEntry={true}
                  textContentType="password"
                  onBlur={()=>{setFieldTouched("password")}}
                  onChangeText={handleChange("password")}
                  />
                {touched.password && <AppText size={12} color="red">{errors.password}</AppText>}
              </View>
              <View style={styles.inputContainer}>
                <AppTextInput
                  placeholderTextColor={AppColors.darkGray}
                  placeholder="Confirm Password"
                  secureTextEntry={true}
                  textContentType="password"
                  onBlur={()=>{setFieldTouched("cfpassowrd")}}
                  onChangeText={handleChange("cfpassword")}
                  />
                {touched.cfpassword && <AppText size={12} color="red">{errors.cfpassword}</AppText>}
              </View>
              <View style={styles.buttonContainer}>
                <AppButton style={styles.button} title="Sign in" titleSize={18} onPress={handleSubmit}/>
              </View>
              </>
            )}
            </Formik>
          </View>
        </View>

    </AppScreen>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flex:1, 
    flexDirection: 'row',
  },
  midContainer: {
    flex:0.75, 
    paddingTop: 20,
    alignItems: 'center',
  },
  bottomContainer: {
    flex:4,
    backgroundColor: AppColors.gray,
    borderTopLeftRadius: 150,
    borderTopRightRadius: 150,
  },
  iconButton: {
    alignSelf: 'flex-start',
    marginTop: 45,
    marginLeft: 10,
  },
  logo: {
    alignSelf: 'center',
    flex: 2,
    marginLeft: 40,
  },
  inputContainer: {
    flex:0.6,
    alignItems: 'center',
    paddingTop: 25,
  },
  buttonContainer: {
    flex:1.2,
    paddingTop: 30,
    alignItems: 'center',
  },
  button: {
    width: 200,
  },  
});

export default RegisterScreen;