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

const Verify = ({ navigation }) => {
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = ({}) => {
    alert("burrah");
    // will change this in future
    navigation.navigate("login");
  };
  return (
    <>
      <View style={{ ...defaultStyle, backgroundColor: colors.color2 }}>
        <View style={{ marginBottom: 20, marginTop: 5 }}>
          <Text style={styles.heading}>Reset Password</Text>
        </View>
        <View style={styles.container}>
          
          <TextInput
            {...inputOptions}
            placeholder="Otp"
            keyboardType="number-pad"
            value={otp}
            onChangeText={setOtp}
          />
          <TextInput
            {...inputOptions}
            placeholder="New Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />

          <Button
            style={styles.btn}
            disabled={otp ===" "|| password===" "}
            onPress={submitHandler}
            textColor={colors.color2}
          >
            Reset password
          </Button>
          <Text style={styles.or}>OR</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("forgetpassword")}
          >
            <Text style={styles.link}>Resen Otp</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer activeRoute="profile" />
    </>
  );
};




export default Verify;
