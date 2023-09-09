import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../styles/style'

const ProductListHeading = () => {
  return (
    <View style={styless.container}>
      <Text style={styless.text}>Image</Text>
      <Text style={styless.text}>Price</Text>
      <Text style={{ ...styless.text, width: null,maxWidth:120 }}>Name</Text>
      <Text style={{...styless.text,width:60,}}>Category</Text>
      <Text style={styless.text}>Stock</Text>

    </View>
  );
}
const styless = StyleSheet.create({
    container:{
        backgroundColor:colors.color3,
        flexDirection:"row",
        margin:10,
        alignItems:"center",
        height:40,
        justifyContent:"space-between",
        borderRadius:5,
        padding:10,
    },
    text:{
        color:colors.color2,
        width:40,
        fontWeight:"900",
    }
})
export default ProductListHeading