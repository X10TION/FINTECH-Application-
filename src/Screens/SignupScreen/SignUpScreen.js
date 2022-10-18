import React,{useState} from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import CustomInput from '../../Components/customInput/customInput'
import CustomButton from '../../Components/CustomButton'
import logo from '../../../assets/images/bb.gif'


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


const SignupScreen = () => {
    const {firstName, setFirst} = useState('')
    const {lastName, setLast} = useState('')
    const {birth, setBirth} = useState('')
    const {email, setEmail} = useState('')
    const {phone, setPhone} = useState('')
    const {password, setPassword} = useState('')
    const {cpassword, setcPassword} = useState('')

    const {height} = useWindowDimensions()
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.divin}>
    <Image source={logo} style={[styles.logo,{height: height * 0.3}]} resizeMode={'contain'}/>
     <Text  style={styles.title}>Create a Wallet Account</Text>
      
      <CustomInput placeholder='First Name'
       value={firstName} 
       setValue={setFirst}/>

      <CustomInput 
      placeholder='Last Name'
       value={lastName} 
       setValue={setLast}
       />
       <CustomInput 
      placeholder='Date of Birth'
       value={lastName} 
       type='birth'
       setValue={setBirth}
       />

<CustomInput 
      placeholder='Phone'
       value={lastName} 
       type='phone'
       setValue={setPhone}
       />
       <CustomInput 
      placeholder='Email'
       value={lastName} 
       type='email'
       setValue={setEmail}
       />
  <CustomInput 
      placeholder='Password'
       value={lastName} 
       type='password'
       setValue={setPassword}
       secureTextEntry
       />

<CustomInput 
      placeholder='Comfirm Password'
       value={lastName} 
       type='cpassword'
       setValue={setcPassword}
       secureTextEntry

       />
   

     
       <CustomButton 
       text="Create account" 
       onPress={onApple} 
       bgColor={"green"}
      fgColor={"#f5f4f3"}
        />
        <Text>----- Sign up with------</Text>
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
       text="Already have an acoount? Login" 
       onPress={onSignup} 
       type='TERTIARY'
       
        />
        <Text styl={styles.text}>
          By registering, you confirm that you accept our {` `} 
          <Text style={styles.link}> Term of Use
          </Text> and {` `}
          <Text style={styles.link}>
             Privacy Plicy 
          </Text>
          </Text>
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
    },
  title:{
    fontSize: 27,
    fontWeight:'bold',
    color: "green",
    margin:10,
  },
  text:{
    color:'gray'
  },
  link:{
    color:'green'
  }
})
export default SignupScreen