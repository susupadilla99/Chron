import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Formik } from 'formik';
import * as Yup from 'yup';

import AppScreen from '../components/AppScreen';
import AppColors from '../config/AppColors';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import AppIconButton from '../components/AppIconButton';

let yupSchema = Yup.object().shape(
  {
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).max(16).label("Password"),
  }
);

function LoginScreen(props) {
  return (
    <AppScreen>

      <View style={styles.topContainer}>
        <AppIconButton 
          icon="chevron-left" 
          size={30} 
          color={AppColors.black}
          onPress={()=>{console.log("Go to welcome screen!")}}
          />
      </View>

      <View style={styles.midContainer}>
        <MaterialCommunityIcons name="head-lightbulb" size={90} color={AppColors.lightBlue}/>
      </View>

      <View style={styles.bottomContainer}>
        <View style={{flex:2.5}}></View>
        <View style={{flex:7}}>
          <Formik
            initialValues={{email:'', password:'',}}
            onSubmit= {(values) => {console.log(values)}}
            validationSchema= {yupSchema}
            >
            {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
              <>
              <View style={styles.inputContainer}>
                <AppTextInput 
                  placeholder="Email address"
                  keyboardType="email-address"
                  textContentType="emailAddress"
                  onBlur={ () => {setFieldTouched("email")} }
                  onChangeText ={handleChange("email")}
                  />
                {touched.email && <AppText size={12} color="red">{errors.email}</AppText>}
              </View>
              <View style={styles.inputContainer}>
                <AppTextInput 
                  placeholder="Password"
                  secureTextEntry={true}
                  textContentType="password"
                  onBlur={ () => {setFieldTouched("password")} }
                  onChangeText={handleChange("password")} 
                  />
                {touched.password && <AppText size={12} color="red">{errors.password}</AppText>}
              </View>
              <View style={styles.buttonContainer}>
                <AppButton title="Login" titleSize={18} style={styles.button} onPress={handleSubmit}/>
              </View>
              </>
            )}
          </Formik>
        </View>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    flex: 2,
    justifyContent: 'center',
    marginLeft: 10,
  },
  midContainer: {
    flex: 3,
    alignItems: 'center',
    marginTop: 5,
  },
  bottomContainer: {
    flex: 9,
    backgroundColor: AppColors.gray,
    borderTopLeftRadius: 150,
    borderTopRightRadius: 150,
  },
  inputContainer: {
    flex:2,
    alignItems: 'center',
    marginTop: 35,
  },
  buttonContainer: {
    flex:3,
    marginTop: 40,
    alignItems: 'center',
  },
  button: {
    width: 150,
  },
})

export default LoginScreen;