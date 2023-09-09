import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import {
  colors,
  defaultStyle,
  inputOptions,
  formStyles as styles,
} from "../../styles/style";
import Header from "../../components/Header";
import { Avatar, Button, TextInput } from "react-native-paper";

const categories = [
  {
    name: "laptop",
    _id: "hdjhbdhs",
  },
  {
    name: "laptop",
    _id: "hdjhsdbdhs",
  },
  {
    name: "laptop",
    _id: "hdjhaddabdhs",
  },
];

const Categories = () => {
  const loading = false;

  const [category, setCategory] = useState("");

  const deleteHandler = (id) => {
    console.log(`deletin category,${id}`);
  };

  const submitHandler = () => {};
  return (
    <View style={{ ...defaultStyle, backgroundColor: colors.color5 }}>
      <Header back={true} />
      <View style={{ marginBottom: 20, marginTop: 5, paddingTop: 70 }}>
        <Text style={styles.heading}>Categeories</Text>
      </View>
      <ScrollView
        style={{
          marginBottom: 20,
        }}
      >
        <View
          style={{
            backgroundColor: colors.color2,
            padding: 20,
            minHeight: 400,
          }}
        >
          {categories.map((i) => (
            <CategoryCard
              key={i._id}
              id={i._id}
              name={i.name}
              deletehandler={deleteHandler}
            />
          ))}

          <View style></View>
        </View>
      </ScrollView>
      <View style={styless.container}>
        <TextInput
          {...inputOptions}
          placeholder="Category"
          value={category}
          onChangeText={setCategory}
        />
        <Button
          textColor={colors.color2}
          style={{
            backgroundColor: colors.color1,
            margin: 10,
            padding: 6,
          }}
          disabled={!category}
          onPress={() => submitHandler}
          loading={loading}
        >
          Add
        </Button>
      </View>
    </View>
  );
};

const CategoryCard = ({ id, name, deletehandler }) => (
  <View style={styless.cardContainer}>
    <Text style={styless.cardText}>{name}</Text>
    <TouchableOpacity onPress={() => deletehandler(id)}>
      <Avatar.Icon
        icon={"delete"}
        size={30}
        style={{
          backgroundColor: colors.color1,
        }}
      />
    </TouchableOpacity>
  </View>
);

const styless = StyleSheet.create({
  container: {
    backgroundColor: colors.color3,
    padding: 20,
    borderRadius: 10,
    elevation: 10,
  },
  cardContainer: {
    backgroundColor: colors.color2,
    borderRadius: 10,
    elevation: 5,
    margin: 10,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardText: {
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});

export default Categories;
