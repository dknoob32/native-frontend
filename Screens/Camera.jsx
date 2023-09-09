import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Camera, CameraType } from "expo-camera";
import { Avatar } from "react-native-paper";
import { colors, defaultStyle } from "../styles/style";
import * as ImagePicker from "expo-image-picker";

const CameraComponent = ({ navigation, route }) => {
  const [hasPermission, setHasPermision] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [camera, setCamera] = useState(null);

  const openimagePicker = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false)
      return "Permission is require to access gallery";

    const data = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (route.params?.NewProduct)
      return navigation.navigate("newproduct", {
        image: data.assets[0].uri,
      });
    if (route.params?.updateproduct)
      return navigation.navigate("productimages", {
        image: data.assets[0].uri,
      });
    if (route.params?.updateProfile)
      return navigation.navigate("profile", {
        image: data.assets[0].uri,
      });
    else
      return navigation.navigate("signup", {
        image: data.assets[0].uri,
      });
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermision(status === "granted");
    })();
  }, []);

  const clickPicture = async () => {
    const data = await camera.takePictureAsync();
    if (route.params?.NewProduct)
      return navigation.navigate("newproduct", {
        image: data.assets[0].uri,
      });
    if (route.params?.updateproduct)
      return navigation.navigate("productimages", {
        image: data.uri,
      });
    if (route.params?.updateProfile)
      return navigation.navigate("profile", {
        image: data.uri,
      });
    else
      return navigation.navigate("signup", {
        image: data.uri,
      });
  };
  if (hasPermission === null) return <View />;
  if (hasPermission === false)
    return (
      <View style={defaultStyle}>
        <Text>no permission access</Text>
      </View>
    );
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Camera
        type={type}
        style={{
          flex: 1,
          aspectRatio: 1,
        }}
        ratio="1:1"
        ref={(e) => setCamera(e)}
      />
      <View
        style={{
          flexDirection: "row",
          bottom: 10,
          width: "100%",
          justifyContent: "space-evenly",
          position: "absolute",
        }}
      >
        <MyIcon icon="image" handler={openimagePicker} />
        <MyIcon icon="camera" handler={clickPicture} />
        <MyIcon
          icon="camera-flip"
          handler={() => {
            setType((prevType) =>
              prevType === CameraType.back ? CameraType.front : CameraType.back
            );
          }}
        />
      </View>
    </View>
  );
};
const MyIcon = ({ icon, handler }) => (
  <TouchableOpacity onPress={handler}>
    <Avatar.Icon
      icon={icon}
      size={40}
      color={colors.color2}
      style={{
        backgroundColor: colors.color1,
      }}
    />
  </TouchableOpacity>
);

export default CameraComponent;
