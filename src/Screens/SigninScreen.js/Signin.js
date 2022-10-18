import React,{useState} from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import logo from '../../../assets/images/sign.gif'
import CustomInput from '../../Components/customInput/customInput'
import CustomButton from '../../Components/CustomButton'

const onSignInPressed = () => {
    console.warn('Sign In')
}
const onForgotPassword = () => {
  console.log("forgrt password")
}

const Signin = () => {
    const {username, setUsername} = useState('')
    const {password, setPassword} = useState('')
    const {height} = useWindowDimensions()
  return (
    <View style={styles.divin}>
     
      <Image source={logo} style={[styles.logo,{height: height * 0.3}]} resizeMode={'contain'}/>
      <CustomInput placeholder='Username'
       value={username} 
       setValue={setUsername}/>

      <CustomInput 
      placeholder='Password'
       value={password} 
       setValue={setPassword}
       secureTextEntry
       />
       <CustomButton text="Sign In" onPress={onSignInPressed}/>
       <CustomButton text="Forgot Password?" onPress={onForgotPassword} type='TERTIARY'/>
    </View>
  )
}


const styles = StyleSheet.create({
   divin:{
    alignItems:'center',
    padding:20
   }, 
    logo:{
        width:'70%',
        maxWidth:300,
        maxHeight:200
    }
})
export default Signin

;