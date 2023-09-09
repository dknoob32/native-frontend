import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import {
  colors,
  defaultStyle,
  inputOptions,
  inputStyling,
  formStyles as styles,
} from "../../styles/style";
import Loader from "../../components/Loader";
import { Avatar, Button, TextInput } from "react-native-paper";
import SelecctComponent from "../../components/SelecctComponent";

const NewProduct = ({ navigation, route }) => {
  const loading = false;

  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("laptop");
  const [categoryID, setCategoryID] = useState("");
  const [categories, setCategories] = useState([
    { _id: "hbhdsc", category: "gadgets" },
    { _id: "hbsshdsc", category: "goods" },
    { _id: "hbhdxxsc", category: "itrms" },
  ]);
  const [visible, setVisible] = useState(false);

  const submitHandler = () => {
    console.log(name, description, stock, price, categoryID);
  };


  useEffect(() => {
    if(route.params?.image) setImage(route.params.image);
  }, [route.params])
  

  return (
    <>
      <View style={{ ...defaultStyle, backgroundColor: colors.color5 }}>
        <Header back={true} />
        <View style={{ marginBottom: 20, marginTop: 5, paddingTop: 70 }}>
          <Text style={styles.heading}>New Product</Text>
        </View>
        {loading ? (
          <Loader />
        ) : (
          <ScrollView
            style={{
              padding: 20,
              borderRadius: 10,
              elevation: 10,
              backgroundColor: colors.color3,
            }}
          >
            <View
              style={{
                justifyContent: "center",
                height: 650,
              }}
            >
              <View
                style={{
                  width: 80,
                  height: 80,
                  alignSelf: "center",
                  marginBottom: 20,
                }}
              >
                <Avatar.Image
                  size={80}
                  style={{ backgroundColor: colors.color1 }}
                  source={{
                    uri: image ? image : null,
                  }}
                />
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("camera", { NewProduct: true })
                  }
                >
                  <Avatar.Icon
                    icon={"camera"}
                    size={30}
                    color={colors.color3}
                    style={{
                      backgroundColor: colors.color2,
                      position: "absolute",
                      right: -5,
                      bottom: 0,
                    }}
                  />
                </TouchableOpacity>
              </View>
              

              <TextInput
                {...inputOptions}
                placeholder="Name"
                value={name}
                onChangeText={setName}
              />
              <TextInput
                {...inputOptions}
                placeholder="Description"
                value={description}
                onChangeText={setDescription}
              />

              <TextInput
                {...inputOptions}
                placeholder="Price"
                keyboardType="number-pad"
                value={price}
                onChangeText={setPrice}
              />
              <TextInput
                {...inputOptions}
                placeholder="Stock"
                value={stock}
                keyboardType="number-pad"
                onChangeText={setStock}
              />

              <Text
                style={{
                  ...inputStyling,
                  textAlign: "center",
                  textAlignVertical: "center",
                  borderRadius: 3,
                }}
                onPress={() => setVisible(true)}
              >
                {category}
              </Text>

              <Button
                textColor={colors.color2}
                style={{
                  backgroundColor: colors.color1,
                  margin: 20,
                  padding: 6,
                }}
                onPress={submitHandler}
                loading={loading}
                disabled={loading}
              >
                Create
              </Button>
            </View>
          </ScrollView>
        )}
      </View>
      <SelecctComponent
        setCategory={setCategory}
        setCategoryID={setCategoryID}
        categories={categories}
        visible={visible}
        setVisible={setVisible}
      />
    </>
  );
};

export default NewProduct;
