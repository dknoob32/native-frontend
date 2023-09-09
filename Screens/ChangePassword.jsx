import { View, Text, } from "react-native";
import React, { useState } from "react";
import { colors, defaultStyle, inputStyling ,formStyles as styles} from "../styles/style";
import { Button, TextInput } from "react-native-paper";

import Header from "../components/Header"

const ChangePassword = ({ navigation }) => {
  const inputOptions = {
    style: inputStyling,
    mode: "outlined",
    activeOutlineColor: colors.color1,
  };

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const submitHandler = () => {
    alert("burrah");
  };
  return (
      <View style={{ ...defaultStyle, backgroundColor: colors.color2 }}>
        <Header back={true} />
        <View style={{ marginBottom: 20, marginTop: 5, paddingTop: 70 }}>
          <Text style={styles.heading}>Change Password</Text>
        </View>
        <View style={styles.container}>
          <TextInput
            {...inputOptions}
            placeholder="Old Password"
            secureTextEntry={true}
            value={oldPassword}
            onChangeText={setOldPassword}
          />

          <TextInput
            {...inputOptions}
            placeholder="New Password"
            secureTextEntry={true}
            value={newPassword}
            onChangeText={setNewPassword}
          />

          <Button
            textColor={colors.color2}
            style={styles.btn}
            disabled={oldPassword === "" || newPassword === ""}
            onPress={submitHandler}
          >
        Change
          </Button>
        
         
        </View>
      </View>
  
  );
};




export default ChangePassword