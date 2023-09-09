import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { colors } from "../styles/style";
import { Button } from "react-native-paper";

const ProductCard = ({
  stock,
  price,
  image,
  name,
  addToCartHandler,
  i,
  id,
  navigate,
}) => {
  return (
    <TouchableOpacity
    activeOpacity={1}
      onPress={() => navigate.navigate("productdetails", { id })}
    >
      <View
        style={{
          elevation: 5,
          width: 220,
          alignItems: "center",
          justifyContent: "space-between",
          margin: 20,
          borderRadius: 20,
          height: 400,
          backgroundColor: i % 2 === 0 ? colors.color1 : colors.color2,
        }}
      >
        <Image
          source={{ uri: image }}
          style={{
            width: "100%",
            height: 200,
            resizeMode: "contain",
            position: "absolute",
            left:20,
            top: 105,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 20,
            width: "100%",
          }}
        >
          <Text
            numberOfLines={2}
            style={{
              color: i % 2 === 0 ? colors.color2 : colors.color3,
              fontSize: 25,
              fontWeight: 300,
            }}
          >
            {name}
          </Text>
          <Text
            numberOfLines={2}
            style={{
              color: i % 2 === 0 ? colors.color2 : colors.color3,
              fontSize: 20,
              fontWeight: 700,
            }}
          >
            ₹{price}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: i % 2 === 0 ? colors.color2 : colors.color3,
            borderRadius: 0,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            width: "100%"
          }}
          >
          <Button 
          onPress={()=>addToCartHandler(id,stock)}
          textColor={i%2===0?colors.color1:colors.color2}>
          Add To Cart
          </Button>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
