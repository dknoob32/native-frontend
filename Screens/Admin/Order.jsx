import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import { colors, defaultStyle,formStyles as styles } from '../../styles/style'

import { orders } from "../Orders";
import OrderItem from '../../components/OrderItem';


const Order = () => {
    const loading=false;
    const processOrderLoading=false;
    const updateHandler=()=>{};
  return (
    <View style={{ ...defaultStyle, backgroundColor: colors.color5 }}>
      <Header back={true} />
      <View style={{ marginBottom: 20, marginTop: 5, paddingTop: 70 }}>
        <Text style={styles.heading}>Categeories</Text>
      </View>
      {loading ? (
        <Loader />
      ) : (
        <View
          style={{
            padding: 10,
            flex: 1,
          }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            {orders.length > 0 ? (
              orders.map((item, index) => (
                <OrderItem
                  key={item._id}
                  id={item._id}
                  i={index}
                  price={item.totalAmount}
                  status={item.orderStatus}
                  orderedOn={item.createdAT.split("T")[0]}
                  paymentmethod={item.paymentMethod}
                  address={`${item.shippingInfo.address}, ${item.shippingInfo.city}, ${item.shippingInfo.country} ${item.shippingInfo.pincode}`}
                  admin={true}
                  updateHandler={updateHandler}
                  loading={processOrderLoading}
                />
              ))
            ) : (
              <Headline style={{ textAlign: "center" }}>No Orders Yet</Headline>
            )}
          </ScrollView>
        </View>
      )}
    </View>
  );
}

export default Order