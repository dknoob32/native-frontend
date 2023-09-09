import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../styles/style'
import { Avatar } from 'react-native-paper';
import { iconOptions } from '../Screens/ProductDetals';

const CartItem = ({
    name,
    amount,
    stock,
    qty,
    index,
    id,
    imgSrc,
    incrementHandler,
    decrementHandler
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 100,
        marginVertical: 20,
      }}
    >
      <View
        style={{
          width: "40%",
          backgroundColor: index % 2 == 0 ? colors.color1 : colors.color3,
          borderTopRightRadius: 100,
          borderBottomRightRadius: 100,
        }}
      >
        <Image
          source={{
            uri: imgSrc,
          }}
          style={styles.img}
        />
      </View>
      <View
        style={{
          width: "40%",
          paddingHorizontal: 20,
        }}
      >
        <Text
        numberOfLines={1}
          style={{
            fontSize: 17,
          }}
        >
          {name}
        </Text>
        <Text
        numberOfLines={1}
          style={{
            fontSize: 17,
            fontWeight: 700,
          }}
        >
          ₹{amount}
        </Text>
      </View>
      <View
        style={styles.qtyContainer}>
        <TouchableOpacity onPress={()=>decrementHandler(id,qty)}>
          <Avatar.Icon icon={"minus"} {...iconOptions} />
        </TouchableOpacity>
        <Text style={styles.qtytext}>
          {qty}
        </Text>
        <TouchableOpacity onPress={()=>incrementHandler(id,qty,stock)}>
          <Avatar.Icon icon={"plus"} {...iconOptions} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
    img:{
        width: 200,
            height: "70%",
            resizeMode: "contain",
            left: 2,
        },
  qtytext: {
    backgroundColor: colors.color4,
    width: 25,
    height: 25,
    textAlignVertical: "center",
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.color5,
  },
  qtyContainer: {
    width: "20%",
    height: 80,
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "center",
  },
});



export default CartItem