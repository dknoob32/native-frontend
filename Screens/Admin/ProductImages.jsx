import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { colors, defaultStyle, formStyles as styles } from "../../styles/style";
import Header from "../../components/Header";
import ImageCard from "../../components/ImageCard";
import { Avatar, Button } from "react-native-paper";

const ProductImages = ({ navigation, route }) => {
  const [images] = useState(route.params.images);
  const [productId] = useState(route.params.id);
  const [image, setImage] = useState(null);
  const [imageChanged, setImageChanged] = useState(false);

  const loading = false;

  const submitHandler = () => {};

  useEffect(() => {
    if (route.params?.image) {
      setImage(route.params.image);
      setImageChanged(true);
    }
  }, [route.params]);

  const deletehandler = (id) => {
    console.log("Image Id", id);
    console.log("product Id", productId);
  };

  return (
    <View style={{ ...defaultStyle, backgroundColor: colors.color5 }}>
      <Header back={true} />
      <View style={{ marginBottom: 20, marginTop: 5, paddingTop: 70 }}>
        <Text style={styles.heading}>Images</Text>
      </View>
      <ScrollView
        style={{
          marginBottom: 20,
        }}
      >
        <View
          style={{
            backgroundColor: colors.color2,
            padding: 40,
            minHeight: 400,
          }}
        >
          {images.map((i) => (
            <ImageCard
              key={i._id}
              id={i._id}
              src={i.url}
              deletehandler={deletehandler}
            />
          ))}
        </View>
      </ScrollView>
      <View
        style={{
          backgroundColor: colors.color3,
          padding: 20,
          borderRadius: 10,
        }}
      >
        <Image
          style={{
            backgroundColor: colors.color2,
            width: 100,
            height: 100,
            alignSelf: "center",
            resizeMode: "contain",
          }}
          source={{ uri: image }}
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate("camera", { updateproduct: true })
            }
          >
            <Avatar.Icon
              icon={"camera"}
              size={30}
              color={colors.color3}
              style={{ backgroundColor: colors.color2, margin: 10 }}
            />
          </TouchableOpacity>
        </View>
        <Button
          style={{ backgroundColor: colors.color1, padding: 6 }}
          textColor={colors.color2}
          loading={loading}
          onPress={submitHandler}
          disabled={!imageChanged}
        >
          Add
        </Button>
      </View>
    </View>
  );
};

export default ProductImages;
