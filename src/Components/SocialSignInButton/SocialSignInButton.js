import React from 'react'
import { View, Text } from 'react-native'
import CustomButton from '../CustomButton'



const onFacebook = () => {
    console.log('facebook')
  }
  const onGoogle = () => {
    console.log('google')
  }
  
  const onApple= () => {
    console.log('Apple')
  }
const SocialSignInButton = () => {
  return (
    <View>
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
    </View>
  )
}

export default SocialSignInButton