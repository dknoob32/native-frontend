import { View, Text, StyleSheet,  TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../styles/style'
import { Avatar, Button } from 'react-native-paper'

const MyModal = ({id,deletehandler,navigate,setOpenModal}) => {
  return (
    <View style={styless.container}>
      <TouchableOpacity
      style={{
        position:"absolute",
        top:10,
        left:200,
      }}
      onPress={()=> setOpenModal(false)}
      >
        <Avatar.Icon 
            icon={"close"}
            size={25}
            style={{
                backgroundColor:colors.color1
            }}
        />
      </TouchableOpacity>
      <Text style={styless.text}
      onPress={()=>navigate.navigate("updateproduct",{id})}
      >edit</Text>
      <Button 
      textColor={colors.color1}
      onPress={()=>deletehandler(id)}>Delete</Button>
    </View>
  )
}
const styless=StyleSheet.create({
    container:{
        elevation:9,
        width:200,
        height:100,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
        color:colors.color2,
        padding:20,
        zIndex:100,
    },
    text:{
        fontWeight:"900",
        textAlign:"center",
        textTransform:"uppercase",

    }

})
export default MyModal