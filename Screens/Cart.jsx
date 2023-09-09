import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { colors, defaultStyle } from "../styles/style";
import Header from "../components/Header";
import Heading from "../components/Heading";
import { Button } from "react-native-paper";
import CartItem from "../components/CartItem";
import { useNavigation } from "@react-navigation/native";

export const cartItemss = [
  {
    name: "macbook",
    price: 56331,
    stock: 5,
    quantity: 2,
    product: "gshdjbcsjnd0b",
    image:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "chromebook",
    price: 36331,
    stock: 5,
    quantity: 2,
    product: "gshdjbcsjnw8wdb",
    image:
      "https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080",
  },
  {
    name: "chromebook",
    price: 36331,
    stock: 5,
    quantity: 2,
    product: "gshdjbcsjnw2wdb",
    image:
      "https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080",
  },
  {
    name: "chromebook",
    price: 36331,
    stock: 5,
    quantity: 2,
    product: "gshdjbcsjnwwdwb",
    image:
      "https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080",
  },
  {
    name: "chromebook",
    price: 36331,
    stock: 5,
    quantity: 2,
    product: "gshdjbcsjnqwwdb",
    image:
      "https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080",
  },
  {
    name: "chromebook",
    price: 36331,
    stock: 5,
    quantity: 2,
    product: "gshdjbcsjn3w2wdb",
    image:
      "https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080",
  },
  {
    name: "chromebook",
    price: 36331,
    stock: 5,
    quantity: 2,
    product: "gshdjbcsjnw2w2db",
    image:
      "https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080",
  },
];

const Cart = () => {
    const navigate= useNavigation();

  const incrementHandler = (id, qty, stock) => {
    console.log("increasing", id, qty, stock);
  };
  const decrementHandler = (id, qty) => {
    console.log("decreasing", id, qty);
  };

  return (
    <View style={{ ...defaultStyle, padding: 0 }}>
      <Header back={true} emptyCart={true} />
      <Heading
        text1="Shopping"
        text2="Cart"
        containerStyle={{ paddingTop: 70, marginLeft: 35 }}
      />
      <View
        style={{
          paddingVertical: 20,
          flex: 1,
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          {cartItemss.map((i, index) => (
            <CartItem
              key={i.product}
              id={i.product}
              stock={i.stock}
              imgSrc={i.image}
              qty={i.quantity}
              index={index}
              amount={i.price}
              name={i.name}
              incrementHandler={incrementHandler}
              decrementHandler={decrementHandler}
            />
          ))}
        </ScrollView>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 35,
        }}
      >
        <Text>6 items</Text>
        <Text>₹5</Text>
      </View>
      <TouchableOpacity
        onPress={
          cartItemss.length > 0 ? () => navigate.navigate("confirmorder") : null
        }
      >
        <Button
          style={{
            backgroundColor: colors.color3,
            borderRadius: 100,
            margin: 30,
            padding: 5,
          }}
          icon={"cart"}
          textColor={colors.color2}
        >
          CheckOut
        </Button>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;
