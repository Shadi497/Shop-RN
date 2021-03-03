import { createStackNavigator } from "@react-navigation/stack";
import { ScrollView } from "react-native";
import { ThemeProvider } from "styled-components";

import React from "react";
import Home from "../Home";
import ShopList from "../ShopList";
import { ShopDetail } from "../ShopDetail";
import { CartList } from "../Cart/CartList";
import { CartButton } from "../Buttons/CartButton";

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
        options={{ headerRight: () => <CartButton /> }}
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
        }}
      />
    </Navigator>
  );
};
