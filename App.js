import React from 'react'
import {
SafeAreaView,
ScrollView,
StatusBar,
StyleSheet,
Text,
View
} from 'react-native'
import Signin from './src/Screens/SigninScreen/Signin'
import SignupScreen from './src/Screens/SignupScreen'
import ComfirmEmailScreen from './src/Screens/ComfirmScreen'
import ForgotPassWordScreen from './src/Screens/ForgotPassword/ForgotPasswordScreen'
import RestNewPasswordScreen from './src/Screens/RestNewPasswordScreen'


const app = () => {
  return(
    <SafeAreaView style={styles.root}>
        <Signin />
        <SignupScreen />
        <ComfirmEmailScreen />
        <ForgotPassWordScreen />
        <RestNewPasswordScreen />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  root:{
    flex:1,
    backgroundColor:'white'
  }
})
export default app