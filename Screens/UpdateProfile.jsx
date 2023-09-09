import { View, Text,  ScrollView } from "react-native";
import React, { useState } from "react";
import {
  colors,
  defaultStyle,
  formStyles as styles,
  inputOptions,
} from "../styles/style";
import { Button, TextInput } from "react-native-paper";
import Header from "../components/Header";


const UpdateProfile = ({ navigation }) => {
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPincode] = useState("");

  const loading = false;

  const disableBtn =
    !name || !email || !address || !city || !country || !pincode;

  const submitHandler = () => {
    alert("burrah");
  }

  return (
    <View style={{ ...defaultStyle, backgroundColor: colors.color2 }}>
      <Header back={true}/>
      <View style={{ marginBottom: 20, marginTop: 5, paddingTop: 70 }}>
        <Text style={styles.heading}>Edit Profile</Text>
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
        <View>
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
            Update Profile
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

export default UpdateProfile;
