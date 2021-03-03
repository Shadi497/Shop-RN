import { Button } from "react-native";
import React from "react";
import { View } from "react-native";
import { ImageStyle, Detail } from "../styles";

export const ProductItem = ({ product, navigation }) => {
  return (
    <View style={{ marginBottom: "7%" }}>
      <ImageStyle source={{ uri: product.image }} />
      <Detail>{product.name}</Detail>
      <Detail>{product.price} BD</Detail>
      <Button
        title="Add to Cart"
        onPress={() => navigation.navigate("CartList")}
      ></Button>
    </View>
  );
};
