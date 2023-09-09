import { View, Text, ScrollView } from "react-native";
import React from "react";
import { colors, defaultStyle, formStyles as styles } from "../../styles/style";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import ButtonBox from "../../components/ButtonBox";
import ProductListHeading from "../../components/ProductListHeading";
import { products } from "../Home";
import ProductListItem from "../../components/ProductListItem";
import Chart from "../../components/Chart";

const AdminPanel = ({ navigation }) => {
  const loading = false;

  const navigationHandler = (text) => {
    switch (text) {
      case "Category":
        navigation.navigate("categories");
        break;
      case "All Orders":
        navigation.navigate("adminorders");
        break;
      case "Product":
        navigation.navigate("newproduct");
        break;

      default:
        navigation.navigate("adminorders");
        break;
    }
  };

  const deleteProductHandler = (id) => {
    console.log(`delete Product with ID : ${id}`);
  };
  return (
    <View style={defaultStyle}>
      <Header back={true} />
      <View style={{ marginBottom: 20, paddingTop: 70 }}>
        <Text style={styles.heading}>Admin Panel</Text>
      </View>
      {loading ? (
        <Loader />
      ) : (
        <>
          <View
            style={{
              backgroundColor: colors.color3,
              alignItems: "center",
              borderRadius:10,
            }}
          >
            <Chart inStock={12} outOfStock={2} />
          </View>
          <View>
            <View
              style={{
                flexDirection: "row",
                margin: 10,
                justifyContent: "space-between",
              }}
            >
              <ButtonBox
                icon={"plus"}
                text={"Product"}
                handler={navigationHandler}
              />
              <ButtonBox
                icon={"format-list-bulleted-square"}
                text={"All Orders"}
                handler={navigationHandler}
                reverse={true}
              />
              <ButtonBox
                icon={"plus"}
                text={"Category"}
                handler={navigationHandler}
              />
            </View>
          </View>
          <ProductListHeading />
          <ScrollView showsVerticalScrollIndicator={false}>
            {products.map((item, index) => (
              <ProductListItem
                navigate={navigation}
                deletehandler={deleteProductHandler}
                key={item._id}
                id={item._id}
                i={index}
                name={item.name}
                price={item.price}
                stock={item.stock}
                category={item.category}
                imgSrc={item.images[0].url}
              />
            ))}
          </ScrollView>
        </>
      )}
    </View>
  );
};

export default AdminPanel;
