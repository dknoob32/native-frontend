import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../styles/style'
import { Avatar } from 'react-native-paper'

const ImageCard = ({src,id,deletehandler}) => {
  return (
    <View style={styless.container}>
      <Image source={{
        uri:src,
      }} style={{
        width:"100%",
        height:"80%",
        resizeMode:"contain",
      }}/>
      <TouchableOpacity onPress={()=> {deletehandler(id)}}>
        <Avatar.Icon icon={"delete"} size={30} style={{
        backgroundColor:colors.color1,
        }}/>
      </TouchableOpacity>
    </View>
  )
}

export default ImageCard

const styless= StyleSheet.create({
    container:{
        backgroundColor:colors.color2,
        elevation:5,
        padding:15,
        margin:10,
        alignItems:"center",
        borderRadius:10,
        height:300,
    }
})