import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import {
  colors,
  defaultStyle,
  formStyles as styles,
  inputOptions,
  defaultImg
} from "../styles/style";
import { Avatar, Button, TextInput } from "react-native-paper";
import Footer from "../components/Footer";

const SignUp = ({ navigation ,route}) => {
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const[city,setCity]=useState("");
  const[country,setCountry] = useState("");
  const [pincode, setPincode] = useState("");

  const loading=false;

  const disableBtn= !name || !email || !password || !address || !city || !country||!pincode

  const submitHandler = () => {
    alert("burrah");
    // will change this in future
    navigation.navigate("verify");
  };
   useEffect(() => {
     if (route.params?.image) setAvatar(route.params.image);
   }, [route.params]);
  return (
    <>
      <View style={{ ...defaultStyle, backgroundColor: colors.color2 }}>
        <View style={{ marginBottom: 20, marginTop: 5 }}>
          <Text style={styles.heading}>Sign Up</Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            padding: 20,
            elevation: 10,
            borderRadius: 10,
            backgroundColor: colors.color3,
          }}
        >
          <View style={{ minHeight:900}}>
            <Avatar.Image
              style={{ alignSelf: "center", backgroundColor: colors.color1 }}
              size={80}
              source={{
                uri: avatar ? avatar : defaultImg,
              }}
            />
            <TouchableOpacity onPress={() => navigation.navigate("camera")}>
              <Button textColor={colors.color1}>Change Photo</Button>
            </TouchableOpacity>
            <TextInput
              {...inputOptions}
              placeholder="Name"
              value={name}
              onChangeText={setName}
            />

            <TextInput
              {...inputOptions}
              placeholder="Email"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              {...inputOptions}
              placeholder="password"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />
            <TextInput
              {...inputOptions}
              placeholder="Address"
              value={address}
              onChangeText={setAddress}
            />
            <TextInput
              {...inputOptions}
              placeholder="City"
              value={city}
              onChangeText={setCity}
            />
            <TextInput
              {...inputOptions}
              placeholder="Country"
              value={country}
              onChangeText={setCountry}
            />
            <TextInput
              {...inputOptions}
              placeholder="Pincode"
              keyboardType="number-pad"
              value={pincode}
              onChangeText={setPincode}
            />

            <Button
            loading={loading}
              style={styles.btn}
              disabled={disableBtn}
              onPress={submitHandler}
              textColor={colors.color2}
            >
            Sing Up
            </Button>
            <Text style={styles.or}>OR</Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate("login")}
            >
              <Text style={styles.link}>login</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <Footer activeRoute="profile" />
    </>
  );
};

export default SignUp;
