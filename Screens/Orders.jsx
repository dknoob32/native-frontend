import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { colors, defaultStyle, formStyles as styles } from '../styles/style'
import Header from "../components/Header"
import Loader from "../components/Loader"
import { Headline } from 'react-native-paper'
import OrderItem from '../components/OrderItem'

export const orders = [
  {
    _id: "hbdhjbsdbvsb",
    shippingInfo: {
      address: "sector 14 Apmc",
      city: "Turbhe",
      country: "India",
      pincode: 400701,
    },
    createdAT: "12-8-202T2365",
    orderStatus: "Processing",
    paymentMethod: "COD",
    totalAmount: 25061,
  },
  {
    _id: "hbdhjbssdsdbvsb",
    shippingInfo: {
      address: "sector 14 Apmc",
      city: "Turbhe",
      country: "India",
      pincode: 400701,
    },
    createdAT: "30-7-202T2365",
    orderStatus: "Processing",
    paymentMethod: "Online",
    totalAmount: 25061,
  },
];

const Orders = () => {
    const loading=false;
  return (
    <View style={{ ...defaultStyle, backgroundColor: colors.color5 }}>
      {/* header */}
      <Header back={true} />
      <View style={{ marginBottom: 20,marginTop:5, paddingTop: 70 }}>
        <Text style={styles.heading}>Orders</Text>
      </View>
    {
        loading? <Loader /> :(
            <View style={{
                padding:10,
                flex:1,
            }}>
           <ScrollView showsVerticalScrollIndicator={false}>
           {
            orders.length>0? orders.map((item,index)=>(
                <OrderItem 
                    key={item._id}
                    id={item._id}
                    i={index}
                    price={item.totalAmount}
                    status={item.orderStatus}
                   orderedOn={item.createdAT.split("T")[0]}
                    paymentmethod={item.paymentMethod}
                    address={`${item.shippingInfo.address}, ${item.shippingInfo.city}, ${item.shippingInfo.country} ${item.shippingInfo.pincode}`}

                />

            )):(
                <Headline style={{textAlign:"center"}}>No Orders Yet</Headline>)
           }

           </ScrollView>
            </View>
        )
    }
    </View>
  );
}

export default Orders