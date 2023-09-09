import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";
import { Avatar, Headline } from "react-native-paper";
import { colors } from "../styles/style";

const SelecctComponent = ({
  visible,
  setVisible,
  setCategory,
  setCategoryID,
  categories = [],
}) => {
  const selectCategoryhandler = (item) => {
    console.log(item);
    setCategory(item.category);
    setCategoryID(item._id);
    setVisible(false);
  };

  return (
    visible && (
      <View style={styless.container}>
        <TouchableOpacity onPress={() => setVisible(false)}>
          <Avatar.Icon
            icon={"close"}
            size={30}
            style={{
              alignSelf: "flex-end",
              backgroundColor: colors.color1,
            }}
          />
        </TouchableOpacity>
        <Headline style={styless.heading}>Select a Category</Headline>
        <ScrollView>
          {categories.map((i) => (
            <Text
              key={i._id}
              onPress={() => selectCategoryhandler(i)}
              style={styless.text}
            >
              {i.category}
            </Text>
          ))}
        </ScrollView>
      </View>
    )
  );
};

export default SelecctComponent;

const styless = StyleSheet.create({
  container: {
    backgroundColor: colors.color2,
    position: "absolute",
    padding: 35,
    borderRadius: 10,
    width: "90%",
    height: "90%",
    top: 50,
    alignSelf: "center",
    elevation: 5,
  },
  heading: {
    backgroundColor: colors.color3,
    textAlign: "center",
    marginVertical: 10,
    borderRadius: 5,
    padding: 3,
    color: colors.color2,
  },
  text: {
    fontWeight: "100",
    fontSize: 17,
    marginVertical: 10,
    textTransform: "uppercase",
  },
});
