import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle } from '../styles/style'
import Header from '../components/Header'
import Heading from "../components/Heading"
import { Button, RadioButton } from 'react-native-paper'

const Payment = ({navigation,route}) => {
    const[paymentMethod,setPaymentMethod]=useState("COD")
    console.log(paymentMethod);

     const isAuthenticated = false;

    const redirectToLogin=()=>{
        navigation.navigate("login");
    }
 
    const codHandler=()=>{}

    const onlineHandler=()=>{

    }
   

  return (
    <View style={defaultStyle}>
      <Header back={true} />
      <Heading
        text1="Payment"
        text2="Method"
        containerStyle={{ paddingTop: 70 }}
      />
      <View style={style.container}>
        <RadioButton.Group 
        onValueChange={setPaymentMethod}
        value={paymentMethod}
        >
          <View style={style.RadioStyle}>
            <Text style={style.RadioStyleText}>Cash On Delivery</Text>
            <RadioButton color={colors.color1} value="COD"/>
          </View>
          <View style={style.RadioStyle}>
            <Text style={style.RadioStyleText}>Online Method</Text>
            <RadioButton color={colors.color1} value="ONLINE"/>
          </View>
        </RadioButton.Group>
      </View>
      <TouchableOpacity onPress={!isAuthenticated?redirectToLogin:paymentMethod==="cod"?codHandler:onlineHandler}>
        <Button style={style.btn}
        textColor={colors.color2}
        icon={paymentMethod==="COD"? "check-circle":"circle-multiple-outline"}>
          {
            paymentMethod==="COD"?"Place order": "Pay Now"
          }
        </Button>
      </TouchableOpacity>
    </View>
  );
}

const style= StyleSheet.create({
    container:{
        backgroundColor:colors.color3,
        borderRadius:10,
        padding:30,
        marginVertical:20,
        flex:1,
        justifyContent:"center",
    },
    RadioStyle:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginVertical:5,
    },
    RadioStyleText:{
        fontWeight:"700",
        fontSize:18,
        color:colors.color2,
    },
    btn:{
        backgroundColor:colors.color3,
        borderRadius:100,
        padding:5,
        margin:10,
    }
})

export default Payment