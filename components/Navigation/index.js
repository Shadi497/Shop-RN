import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "../Home";
import ShopList from "../ShopList";
import { ShopDetail } from "../ShopDetail";
import { CartList } from "../Cart/CartList";
import { CartButton } from "../Buttons/CartButton";
import { ShopButton } from "../Buttons/ShopButton";
import { User } from "../Buttons/User";
import SignIn from "../Authentication/SignIn";
import SignUp from "../Authentication/SignUp";

export const RootNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{ headerTitleAlign: "center" }}
    >
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen
        name="ShopList"
        component={ShopList}
        options={{
          title: "Shop List",
          headerRight: () => <CartButton />,
        }}
      />
      <Screen
        name="ShopDetail"
        component={ShopDetail}
        options={({ route }) => {
          return {
            title: route.params.shop.name,

            headerRight: () => <CartButton />,
          };
        }}
      />
      <Screen
        name="CartList"
        component={CartList}
        options={{
          title: "Shopping Cart",
          headerRight: () => <ShopButton />,
        }}
      />

      <Screen
        name="SignIn"
        component={SignIn}
        options={{
          title: "Sign In",
          headerShown: false,
        }}
      />

      <Screen
        name="SignUp"
        component={SignUp}
        options={{
          title: "Sign Up",
          headerShown: false,
        }}
      />
    </Navigator>
  );
};
