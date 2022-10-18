import React,{useState} from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import logo from '../../../assets/images/sign.gif'
import CustomInput from '../../Components/customInput/customInput'
import CustomButton from '../../Components/CustomButton'

const onSignInPressed = () => {
    console.warn('Sign In')
}
const onForgotPassword = () => {
  console.log("forgrt password")
}
const onFacebook = () => {
  console.log('facebook')
}
const onGoogle = () => {
  console.log('google')
}

const onApple= () => {
  console.log('Apple')
}
const onSignup = () => {
  console.log('sign up')
}


const Signin = () => {
    const {username, setUsername} = useState('')
    const {password, setPassword} = useState('')
    const {height} = useWindowDimensions()
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
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
       <CustomButton
        text="Sign In"
         onPress={onSignInPressed}/>
       <CustomButton 
       text="Forgot Password?" 
       onPress={onForgotPassword} 
       type='TERTIARY'/>

       <CustomButton 
       text="Sign up with Facebook"
        onPress={onFacebook} 
        type='TERTIARY'
        bgColor={"#e7eafa"}
        fgColor={"#4765a9"}
        />
       <CustomButton
        text="Sign up with Google"
        onPress={onGoogle} type='TERTIARY'
        bgColor={"#fae9ea"}
        fgColor={"#dd4d44"}
        />
       <CustomButton 
       text="Sign up with Apple" 
       onPress={onApple} 
       type='TERTIARY'
       bgColor={"#e3e3e3"}
      fgColor={"#363636"}
        />
           <CustomButton 
       text="Don't have an account? create one" 
       onPress={onSignup} 
       type='TERTIARY'
       
        />
    </View>
    </ScrollView>
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