import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Screens/Home";
import ProductDetals from "./Screens/ProductDetals";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import Cart from "./Screens/Cart";
import ConfirmOrder from "./Screens/ConfirmOrder";
import Payment from "./Screens/Payment";
import Login from "./Screens/Login";
import ForgetPassword from "./Screens/ForgetPassword";
import Verify from "./Screens/Verify";
import SignUp from "./Screens/SignUp";
import Profile from "./Screens/Profile";
import UpdateProfile from "./Screens/UpdateProfile";
import ChangePassword from "./Screens/ChangePassword";
import Orders from "./Screens/Orders";
import AdminPanel from "./Screens/Admin/AdminPanel";
import Categories from "./Screens/Admin/Categories";
import Order from "./Screens/Admin/Order";
import Updateproduct from "./Screens/Admin/Updateproduct";
import NewProduct from "./Screens/Admin/NewProduct";
import ProductImages from "./Screens/Admin/ProductImages";
import Camera from "./Screens/Camera";

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Group>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="productdetails" component={ProductDetals} />
          <Stack.Screen name="cart" component={Cart} />
          <Stack.Screen name="confirmorder" component={ConfirmOrder} />
          <Stack.Screen name="payment" component={Payment} />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="signup" component={SignUp} />
          <Stack.Screen name="profile" component={Profile} />
          <Stack.Screen name="updateprofile" component={UpdateProfile} />
          <Stack.Screen name="changepassword" component={ChangePassword} />
          <Stack.Screen name="orders" component={Orders} />
          <Stack.Screen name="camera" component={Camera} />

          {/* forget password route */}
          <Stack.Screen name="forgetpassword" component={ForgetPassword} />
          <Stack.Screen name="verify" component={Verify} />
          {/* admin routes */}
          <Stack.Screen name="admin" component={AdminPanel} />
          <Stack.Screen name="categories" component={Categories} />
          <Stack.Screen name="adminorders" component={Order} />
          <Stack.Screen name="updateproduct" component={Updateproduct} />
          <Stack.Screen name="newproduct" component={NewProduct} />
          <Stack.Screen name="productimages" component={ProductImages} />
        </Stack.Group>
      </Stack.Navigator>
      <Toast position="top" />
    </NavigationContainer>
  );

};

export default Main;
