import React from 'react'
import { View, Text, StyleSheet,TextInput } from 'react-native'


const customInput = ({value,setValue,placeholder,secureTextEntry}) => {
  return (
    <View style={styles.container}>
     <TextInput 
     value={value}
     onChangeText={setValue}
     placeholder={placeholder} 
     style={styles.input}
     secureTextEntry={secureTextEntry}
     />
   
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#F9FBFC',
    width:'100%',
    borderColor:'#E8E8E8',
    borderWidth:1,
    borderRadius:5,
    padding:5,
    paddingHorizontal:10,
    marginVertical: 5
  },
  input:{
    color: 'gray'
  }
})
export default customInput