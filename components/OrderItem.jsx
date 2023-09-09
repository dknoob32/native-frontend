import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../styles/style'
import { Button } from 'react-native-paper';

const OrderItem = ({
    id,
    price,
    address,
    orderedOn,
    updateHandler,
    status,
    paymentmethod,
    admin=false,
    loading,
    i=0,
}) => {
  return (
    <View
      style={{
        ...styless.container,
        backgroundColor: i % 2 === 0 ? colors.color2 : colors.color3,
      }}
    >
      <Text
        style={{
          ...styless.text,
          backgroundColor: i % 2 === 0 ? colors.color3 : colors.color1,
        }}
      >
        Id - #{id}
      </Text>
      <TextBox title={"Address"} value={address} i={i} />
      <TextBox title={"Ordered On"} value={orderedOn} i={i} />
      <TextBox title={"Price"} value={price} i={i} />
      <TextBox title={"Status"} value={status} i={i} />
      <TextBox title={"Payment Method"} value={paymentmethod} i={i} />
      {admin && (
        <Button
        icon={"update"}
          mode="contained"
          textColor={i % 2 === 0 ? colors.color2 : colors.color3}
          style={{
            width: 120,
            alignSelf: "center",
            backgroundColor: i % 2 === 0 ? colors.color3 : colors.color2,
            marginTop:10,
          }}
          onPress={()=>{updateHandler(id)}}
          loading={loading}
          disabled={loading}
        >
          Update
        </Button>
      )}
    </View>
  );
}
const TextBox=({title,value,i}) =>(
    <Text style={{
        marginVertical:6,
        color:i%2===0?colors.color3:colors.color2,
    }}>
    <Text style={{fontWeight:"900"}}>{title} -</Text>
    {title==="Price"?"₹" :""}
    {value}

    </Text>
)

const styless =StyleSheet.create({
    container:{
        padding:20,
        borderRadius:10,
        marginVertical:10,
        elevation:5,
    },
    text:{
        color:colors.color2,
        fontSize:16,
        fontWeight:"900",
        marginHorizontal:-20,
        marginTop:-20,
        marginBottom:10,
        paddingVertical:10,
        paddingHorizontal:20,
        borderTopRightRadius:10,
        borderTopLeftRadius:10,

    }
})

export default OrderItem