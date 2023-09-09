import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors, defaultStyle } from '../styles/style'
import Header from '../components/Header'
import Heading from '../components/Heading'
import { cartItemss } from './Cart'
import ConfirmOrderItem from '../components/ConfirmOrderItem'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

const ConfirmOrder = () => {
    const navigate= useNavigation();
    const itemsPrice=4000;
    const shippingCharges=200;
    const tax=0.18*itemsPrice;
    const totalAmount=itemsPrice+shippingCharges+tax;
  return (
    <View style={defaultStyle}>
      <Header back={true} />
      <Heading
        containerStyle={{ paddingTop: 70 }}
        text1="Confirm"
        text2="Order"
      />
      <View
        style={{
          paddingVertical: 20,
          flex: 1,
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          {cartItemss.map((i) => (
            <ConfirmOrderItem
              key={i.product}
              name={i.name}
              image={i.image}
              price={i.price}
              quantity={i.quantity}
            />
          ))}
        </ScrollView>
      </View>
      <PriceTag heading="SubTotal" value={itemsPrice} />
      <PriceTag heading="Shipping Charges" value={shippingCharges} />
      <PriceTag heading="Tax" value={tax} />
      <PriceTag heading="Total Amount" value={totalAmount} />
      <TouchableOpacity onPress={()=>navigate.navigate("payment",{
        itemsPrice,
        shippingCharges,
        tax,
        totalAmount
      })}>
      <Button 
      icon={"chevron-right"}
      textColor={colors.color2}
      style={{
        backgroundColor:colors.color3,
        borderRadius:100,
        padding:5,
        margin:10,
      }}
      >
        payment
      </Button>

      </TouchableOpacity>
    </View>
  );
}

const PriceTag = ({ heading, value }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginVertical: 5,
    }}
  >
    <Text style={{fontWeight:800}}>{heading}</Text>
    <Text>₹{value}</Text>
  </View>
);

export default ConfirmOrder