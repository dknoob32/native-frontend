import { StyleSheet, Platform, StatusBar } from "react-native";

export const colors = {
  color1: "#c70049",
  color1_light: "rgba(227,25,99,1)",
  color1_light2: "rgba(199,0,73,0.8)",
  color2: "white",
  color3: "rgb(45,45,45)",
  color4: "transparent",
  color5: "#f2f2f2",
  color6: "#f7f7f7",
};

export const defaultStyle = StyleSheet.create({
  padding: 35,
  paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  flex: 1,
  backgroundColor: colors.color2,
});

export const inputStyling = StyleSheet.create({
  height: 50,
  backgroundColor: colors.color2,
  marginVertical: 10,
  marginHorizontal: 20,
});

export const formStyles = StyleSheet.create({
  heading: {
    backgroundColor: colors.color3,
    color: colors.color2,
    padding: 5,
    textAlign: "center",
    fontSize: 25,
    fontWeight: "500",
    borderRadius: 5,
  },
  container: {
    flex: 1,
    backgroundColor: colors.color3,
    padding: 20,
    justifyContent: "center",
    borderRadius: 10,
    elevation: 10,
  },
  forget: {
    color: colors.color2,
    marginHorizontal: 20,
    marginVertical: 20,
    alignSelf: "flex-end",
    fontWeight: "100",
  },
  btn: {
    backgroundColor: colors.color1,
    borderRadius: 100,
    margin: 20,
    padding: 5,
  },
  or: {
    color: colors.color2,
    fontSize: 25,
    fontWeight: "100",
    alignSelf: "center",
  },
  link: {
    color: colors.color2,
    fontSize: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    textTransform: "uppercase",
    alignSelf: "center",
  },
});

export const inputOptions = {
  style: inputStyling,
  mode: "outlined",
  activeOutlineColor: colors.color1,
};

export const defaultImg =
  "https://p.kindpng.com/picc/s/451-4517876_default-profile-hd-png-download.png";