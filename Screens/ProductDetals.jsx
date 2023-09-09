import { View, Dimensions, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { colors, defaultStyle } from "../styles/style";
import Header from "../components/Header";
import Carousel from "react-native-snap-carousel";
import { useRef } from "react";
import { Avatar, Button } from "react-native-paper";
import { Toast } from "react-native-toast-message/lib/src/Toast";

const SLIDER_WIDTH = Dimensions.get("screen").width;
const ITEM_WIDTH = SLIDER_WIDTH;
 export const iconOptions = {
  size: 20,
  style: {
    borderRadius: 5,
    backgroundColor: colors.color5,
    width: 25,
    height: 25,
  },
};

const ProductDetals = ({ route: { params } }) => {
  console.log(params.id);

  const name = "Pegasus";
  const price = 7817;
  const stock = 5;
  const description =
    "Nike air max zoom soul technology,will your run easy and comfortable,mesh material,pushtechnolgy,Nike air max zoom soul technology,will your run easy and comfortable,mesh material,pushtechnolgy hahahaha";
  const isCarousel = useRef(null);
  const[quantity,setQuantity]=useState(1);

  const decrementQty =()=>{
    if(quantity<=1) return ;
    setQuantity((prev)=>prev-1)
  }
  const incrementQty = () => {
    if (stock <=quantity) return;
    setQuantity((prev) => prev + 1);
  };

          
  const addToCartHandler=()=>{
    if(stock===0)return Toast.show({
      type:"error",
      text1:"Out of stock"
    })
    Toast.show({
      type:"success",
      text1:"Added to Cart"
    })
  }

  const images = [
    {
      id: "dhhdhfhsk",
      url: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "dhhdxchfhsk",
      url: "https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080",
    },
  ];

  return (
    <View
      style={{
        ...defaultStyle,
        padding: 0,
        backgroundColor: colors.color1,
      }}
    >
      <Header back={true} />
      {/* carousel */}
      <Carousel
        layout="stack"
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        ref={isCarousel}
        data={images}
        renderItem={carouselCardItem}
      />
      <View
        style={{
          backgroundColor: colors.color2,
          padding: 35,
          flex: 1,
          marginTop: -380,
          borderTopLeftRadius: 55,
          borderTopRightRadius: 55,
        }}
      >
        <Text
          numberOfLines={2}
          style={{
            fontSize: 25,
          }}
        >
          {name}
        </Text>
        <Text style={{ fontSize: 18, fontWeight: 900 }}>₹{price}</Text>
        <Text
          numberOfLines={8}
          style={{ marginVertical: 15, letterSpacing: 1, lineHeight: 20 }}
        >
          {description}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 5,
          }}
        >
          <Text
            style={{
              color: colors.color3,
              fontWeight: 100,
            }}
          >
            Quantity
          </Text>
          <View
            style={{
              width: 80,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={decrementQty}>
              <Avatar.Icon icon={"minus"} {...iconOptions} />
            </TouchableOpacity>
            <Text style={style.quantity}>{quantity}</Text>
            <TouchableOpacity onPress={incrementQty}>
              <Avatar.Icon icon={"plus"} {...iconOptions} />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <TouchableOpacity 
          activeOpacity={0.9}
          onPress={addToCartHandler} 
          >
            <Button 
            icon={"cart"}
            textColor={colors.color2} 
            style={style.btn}>
              Add to Cart
            </Button>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const carouselCardItem = ({ index, item }) => (
  <View style={style.container} key={index}>
    <Image source={{ uri: item.url }} style={style.image} />
  </View>
);

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.color1,
    width: ITEM_WIDTH,
    paddingVertical: 65,
    height: 380,
  },
  image: {
    width: ITEM_WIDTH,
    resizeMode: "center",
    height: 220,
    padding: 25,
  },
  quantity: {
    width: 25,
    height: 25,
    borderRadius: 5,
    textAlignVertical: "center",
    textAlign: "center",
    backgroundColor: colors.color4,
    borderWidth: 1,
    borderColor: colors.color5,
  },
  btn:{
    backgroundColor:colors.color3,
    borderRadius:100,
    padding:5,
    marginVertical:35,
  }
});

export default ProductDetals;
