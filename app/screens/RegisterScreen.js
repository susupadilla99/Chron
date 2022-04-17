import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Formik } from 'formik';

import AppScreen from '../components/AppScreen';
import AppColors from '../config/AppColors';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';



function RegisterScreen(props) {
  return (
    <AppScreen>

      <View style={styles.topContainer}>
        <MaterialCommunityIcons name="chevron-left" size={30} color={AppColors.black}/>
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
            >
            {({handleChange, handleSubmit}) => (
              <>
              <View style={styles.inputContainer}>
                <AppTextInput 
                  placeholder="Email address"
                  keyboardType="email-address"
                  textContentType="emailAddress"
                  onChangeText ={handleChange("email")}
                  />
              </View>
              <View style={styles.inputContainer}>
                <AppTextInput 
                  placeholder="Password"
                  secureTextEntry={true}
                  textContentType="password"
                  onChangeText ={handleChange("password")}
                  />
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

export default RegisterScreen;