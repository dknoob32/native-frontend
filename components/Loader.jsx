import React from 'react'
import { ActivityIndicator } from 'react-native-paper'
import { colors } from '../styles/style'

const Loader = () => {
  return (
    <ActivityIndicator style={{
        position:"absolute",
        top:"50%",
        alignSelf:"center"
    }} 
    size={100}
        color={colors.color3}
    />
  )
}

export default Loader