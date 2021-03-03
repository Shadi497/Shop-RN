import { NavigationContainer } from "@react-navigation/native";

import React from "react";
import Home from "./components/Home";
import { TopStyling } from "./styles";
import { Provider } from "react-redux";
import store from "./store";
import ShopList from "./components/ShopList";
import ProductList from "./components/ProductList";
import { RootNavigator } from "./components/Navigation";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
}
