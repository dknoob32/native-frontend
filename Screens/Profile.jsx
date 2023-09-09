import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { colors, defaultStyle, formStyles as styles } from "../styles/style";
import { Avatar, Button } from "react-native-paper";
import ButtonBox from "../components/ButtonBox";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import { useEffect } from "react";

const user = {
  name: "Darshan",
  email: "sample23@gmail.com",
};



const loading=false;

const Profile = ({ navigation,route }) => {

    const logoutHandler =()=>{
        console.log("signing out")
    }

    const navigateHandler = (text) => {
        switch (text) {
          case "Admin":
            navigation.navigate("admin");
            break;
          case "Orders":
            navigation.navigate("orders");
            break;
          case "Profile":
            navigation.navigate("updateprofile");
            break;
          case "Password":
            navigation.navigate("changepassword");
            break;
          case "Sign Out":
            logoutHandler();
            break;

          default:
            break;
        }
    };
  const [avatar, setAvatar] = useState(null);

   useEffect(() => {
     if (route.params?.image) setAvatar(route.params.image);
   }, [route.params]);
  return (
    <>
      <View style={defaultStyle}>
        <View style={{ marginBottom: 20, marginTop: 5 }}>
          <Text style={styles.heading}>Profile</Text>
        </View>
        {loading ?  (<Loader/>):
            (
       <>
        <View style={styless.container}>
          <Avatar.Image
            size={100}
            style={{ backgroundColor: colors.color1 }}
            source={{
              uri: avatar,
            }}
          />
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("camera", { updateProfile: true })
            }
          >
            <Button textColor={colors.color1}>Change Photo</Button>
          </TouchableOpacity>
          <Text style={styless.name1}>{user?.name}</Text>
          <Text style={{ fontWeight: "300", color: colors.color2 }}>
            {user?.email}
          </Text>
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              margin: 10,
            }}
          >
            <ButtonBox
              handler={navigateHandler}
              text={"Orders"}
              icon={"format-list-bulleted-square"}
            />
            <ButtonBox
              handler={navigateHandler}
              text={"Admin"}
              icon={"view-dashboard"}
              reverse={true}
            />
            <ButtonBox
              handler={navigateHandler}
              text={"Profile"}
              icon={"pencil"}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              margin: 10,
            }}
          >
            <ButtonBox
              handler={navigateHandler}
              text={"Password"}
              icon={"pencil"}
            />
            <ButtonBox
              handler={navigateHandler}
              text={"Sign Out"}
              icon={"exit-to-app"}
            />
          </View>
        </View>
        </>)}
      </View>
      
      <Footer/>
    </>
  );
};
const styless = StyleSheet.create({
  container: {
    backgroundColor: colors.color3,
    borderRadius: 10,
    elevation: 7,
    padding: 30,
    alignItems: "center",
  },
  name1: {
    fontSize: 20,
    fontWeight: "500",
    marginTop: 20,
    color: colors.color2,
  },
});

export default Profile;
