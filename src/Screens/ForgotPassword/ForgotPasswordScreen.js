import React,{useState} from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import CustomInput from '../../Components/customInput/customInput'
import CustomButton from '../../Components/CustomButton'
import logo from '../../../assets/images/rot.gif'

const onSend = () => {}

const ForgotPassWordScreen = () => {
   const {user,setUser} = useState('')

    const {height} = useWindowDimensions()
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.divin}>
    <Image source={logo} style={[styles.logo,{height: height * 0.3}]} resizeMode={'contain'}/>
     <Text  style={styles.title}>Reset Password</Text>
      
     <CustomInput 
     placeholder={"Username"}
     value={user}
     setValue={setUser}/>
     <CustomButton 
      text={'Send'}
      onPress={onSend}
      />

      <CustomButton 
       text="Back to Sign in" 
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
export default ForgotPassWordScreen