import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Formik } from 'formik';
import * as Yup from 'yup';

import AppScreen from '../components/AppScreen';
import AppIconButton from '../components/AppIconButton';
import AppColors from '../config/AppColors';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';


let yupSchema = Yup.object().shape(
  {
    email: Yup.string().required().email().label("Email"),
    username: Yup.string().required().min(8).max(40).label("Username"),
    password: Yup.string().required().min(4).max(12).label("Password"),
    cfpassword: Yup.string().required().oneOf([Yup.ref("password"),null],"Passwords must match").label("Confirm password"),
  }
);

function RegisterScreen(props) {
  return (
    <AppScreen>

        <View style={styles.topContainer}>
          <AppIconButton 
            style={styles.iconButton} 
            icon="chevron-left" size={30} 
            color={AppColors.black} 
            onPress={()=>{console.log("Go to welcome screen!")}}
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
              initialValues={{email:'', username:'', password:'', cfpassword:''}}
              onSubmit={ (values) => {console.log(values)} }
              validationSchema={yupSchema}
              >
            {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
              <>
              <View style={styles.inputContainer}>
                <AppTextInput
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
                  placeholder="Username"
                  textContentType="username"
                  onBlur={()=>{setFieldTouched("username")}}
                  onChangeText={handleChange("username")}
                  />
                {touched.username && <AppText size={12} color="red">{errors.username}</AppText>}
              </View>
              <View style={styles.inputContainer}>
                <AppTextInput
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
    marginLeft: 117,
  },
  inputContainer: {
    flex:0.6,
    alignItems: 'center',
    paddingTop: 30,
  },
  buttonContainer: {
    flex:1.2,
    paddingTop: 20,
    alignItems: 'center',
  },
  button: {
    width: 200,
  },  
});

export default RegisterScreen;