import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import {
  colors,
  defaultStyle,
  inputOptions,
  inputStyling,
  formStyles as styles,
} from "../../styles/style";
import Loader from "../../components/Loader";
import { Button, TextInput } from "react-native-paper";
import SelecctComponent from "../../components/SelecctComponent";

const Updateproduct = ({ navigation, route }) => {
  const loading = false;
  const loadingOther = false;

  const images = [
    {
      url: "https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080",
      _id: "jfvjnjdjkdfnjnhbsdhjc",
    },
    {
      url: "https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080",
      _id: "jfvjnjdgdghjdjdjdjkdfnjnhbsdhjc",
    },
  ];

  const [id] = useState(route.params.id);
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

  

  return (
    <>
      <View style={{ ...defaultStyle, backgroundColor: colors.color5 }}>
        <Header back={true} />
        <View style={{ marginBottom: 20, marginTop: 5, paddingTop: 70 }}>
          <Text style={styles.heading}>Update Product</Text>
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
              <Button
                onPress={() => navigation.navigate("productimages", {
                    id,
                    images,
                    updateproduct:true
                })}
                textColor={colors.color1}
              >
                Manage Itmes
              </Button>

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
                loading={loadingOther}
                disabled={loadingOther}
              >
                Update
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

export default Updateproduct;
