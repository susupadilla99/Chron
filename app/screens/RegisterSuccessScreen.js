import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Icon } from 'react-native-gradient-icon';
import { useNavigation } from '@react-navigation/native';

import AppScreen from '../components/AppScreen';
import AppColors from '../config/AppColors';
import AppText from '../components/AppText';

function RegisterSuccessScreen( {navigation} ) {
  return (
    <AppScreen>
      
      <View style={styles.topContainer}>
        <MaterialCommunityIcons name='head-lightbulb' size={90} color={AppColors.lightBlue}/>
      </View>

      <View style={styles.bottomContainer}>
        <TouchableWithoutFeedback onPress={() => {navigation.navigate("Welcome")}}>
          <View style={styles.container}>
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
              <AppText size={30}>Success!</AppText>
              <AppText size={16}>Your account has been created</AppText>
            </View>
            <View style={{flex:1.5, paddingTop: 30, alignItems: 'center'}}>
              <Icon 
                style={{alignSelf: 'center'}}
                name="check-circle" 
                type="feather" 
                size={120}
                colors={[
                  {color:AppColors.lightBlue, offset: "0", opacity:"1"},
                  {color:AppColors.darkBlue, offset: "1", opacity:"1"},
                ]}
                />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
      
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
  },
  bottomContainer: {
    flex: 3.4,
    paddingTop: 80,
    alignItems: 'center',
  },
  container: {
    width: 300,
    height: 350,
    backgroundColor: AppColors.gray,
    borderRadius: 50,
  }
});

export default RegisterSuccessScreen;