import React,{useState} from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import CustomInput from '../../Components/customInput'
import CustomButton from '../../Components/CustomButton'
import logo from '../../../assets/images/com.gif'


const onComfirm = () => {}

const ComfirmEmailScreen = () => {
    const {height} = useWindowDimensions()
    const {code, setCode} = useState("")
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.divin}>
    <Image source={logo} style={[styles.logo,{height: height * 0.3}]} resizeMode={'contain'}/>
     <Text  style={styles.title}>Comfirm your email.</Text>
      <CustomInput 
      placeholder={"Enter your comfirmation Code here."}
      value={code}
      setValue={setCode}
      />
   
      <CustomButton 
      text={'Comfirm'}
      onPress={onComfirm}
      />
       <CustomButton 
       text="Resend code" 
       type='SECONDARY'
        />
        <CustomButton 
       text="Back to sign in" 
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
export default ComfirmEmailScreen