import { StatusBar } from "expo-status-bar";
import React from "react";
import Home from "./components/Home";
import { ThemeProvider } from "styled-components";
import { TopStyling } from "./styles";
import { Provider } from "react-redux";
import store from "./store";
import ShopList from "./components/ShopList";
import ProductList from "./components/ProductList";
import { ScrollView } from "react-native";

export default function App() {
  const theme = {
    light: {
      mainColor: "#242424", // main font color
      backgroundColor: "#fefafb", // main background color
    },
    dark: {
      mainColor: "#fefafb", // main font color
      backgroundColor: "#242424", // main background color
    },
  };
  return (
    <Provider store={store}>
      <ScrollView>
        <ThemeProvider theme={theme.light}>
          <TopStyling>
            <Home />
            <ShopList />
            <ProductList />
            <StatusBar style="auto" />
          </TopStyling>
        </ThemeProvider>
      </ScrollView>
    </Provider>
  );
}
