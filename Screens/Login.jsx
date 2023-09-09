import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { colors, defaultStyle, inputStyling } from "../styles/style";
import { Button, TextInput } from "react-native-paper";
import Footer from "../components/Footer"

const Login = ({ navigation }) => {
  const inputOptions = {
    style: inputStyling,
    mode: "outlined",
    activeOutlineColor: colors.color1,
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = () => {
    alert("burrah");
  };
  return (
    <>
      <View style={{ ...defaultStyle, backgroundColor: colors.color2 }}>
        <View style={{ marginBottom: 20, marginTop: 5 }}>
          <Text style={styles.heading}>Login</Text>
        </View>
        <View style={styles.container}>
          <TextInput
            {...inputOptions}
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            {...inputOptions}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("forgetpassword")}
          >
            <Text style={styles.forget}>forget password?</Text>
          </TouchableOpacity>
          <Button
          textColor={colors.color2}
          style={styles.btn}
          disabled={email===""||password ===""}
          onPress={submitHandler}
          >
            Login
          </Button>
          <Text style={styles.or}>OR</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("signup")}
          >
            <Text style={styles.link}>sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer activeRoute="profile" />
    </>
  );
};
const styles = StyleSheet.create({
  heading: {
    backgroundColor: colors.color3,
    color: colors.color2,
    padding: 5,
    textAlign: "center",
    fontSize: 25,
    fontWeight: "500",
    borderRadius: 5,
  },
  container: {
    flex: 1,
    backgroundColor: colors.color3,
    padding: 20,
    justifyContent: "center",
    borderRadius: 10,
    elevation: 10,
  },
  forget: {
    color: colors.color2,
    marginHorizontal: 20,
    marginVertical: 20,
    alignSelf: "flex-end",
    fontWeight: "100",
  },
  btn: {
    backgroundColor: colors.color1,
    borderRadius: 100,
    margin: 20,
    padding: 5,
  },
  or: {
    color: colors.color2,
    fontSize: 25,
    fontWeight: "100",
    alignSelf: "center",
  },
  link: {
    color: colors.color2,
    fontSize: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    textTransform: "uppercase",
    alignSelf:"center"
  },
});

export default Login;
