import React from 'react'
import {
SafeAreaView,
ScrollView,
StatusBar,
StyleSheet,
Text,
View
} from 'react-native'
import Signin from './src/Screens/SigninScreen.js/Signin'


const app = () => {
  return(
    <SafeAreaView style={styles.root}>
        <Signin />
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