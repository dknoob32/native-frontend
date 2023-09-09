import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  colors,
  defaultStyle,
  formStyles as styles,
  inputOptions,
} from "../styles/style";
import { Button, TextInput } from "react-native-paper";
import Footer from "../components/Footer";

const ForgetPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");


  const submitHandler = () => {
    alert("burrah");
    // will change this in future
    navigation.navigate("verify");
  };
  return (
    <>
      <View style={{ ...defaultStyle, backgroundColor: colors.color2 }}>
        <View style={{ marginBottom: 20, marginTop: 5 }}>
          <Text style={styles.heading}>Forget Password</Text>
        </View>
        <View style={styles.container}>
          <TextInput
            {...inputOptions}
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          <Button
            style={styles.btn}
            disabled={email === ""}
            onPress={submitHandler}
            textColor={colors.color2}
          >
            Sent Otp
          </Button>
          <Text style={styles.or}>OR</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("login")}
          >
            <Text style={styles.link}>login</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer activeRoute="profile" />
    </>
  );
};

export default ForgetPassword;
