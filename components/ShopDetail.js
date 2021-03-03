import React from "react";
// import { useSelector } from "react-redux";
// import { Image } from "react-native";
// import { Card, CardItem, Text, Body } from "native-base";
// import ProductList from "./ProductList";

import { Spinner } from "native-base";
import { useSelector } from "react-redux";
import ProductList from "./ProductList";
import { ScrollView, View } from "react-native";
import { ShopImageStyle, TBold } from "../styles";

export const ShopDetail = ({ route, navigation }) => {
  const products = useSelector((state) => state.productReducer.products);

  const { shop } = route.params;
  const loading = useSelector((state) => state.shopReducer.loading);

  if (loading) return <Spinner />;

  const Shopproducts = shop.products.map((product) =>
    products.find((_product) => _product.id === product.id)
  );

  return (
    <ScrollView>
      <TBold>{shop.name}</TBold>
      <ShopImageStyle source={{ uri: shop.image }} />

      <ProductList products={Shopproducts} navigation={navigation} />
    </ScrollView>
  );
};
