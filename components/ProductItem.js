import { ListItem } from "native-base";
import React from "react";
import { View, Text } from "react-native";
import { ImageStyle, V, Detail, TBold } from "../styles";

export const ProductItem = ({ product }) => {
  return (
    <ListItem>
      <V>
        <TBold>Products List</TBold>
        <ImageStyle source={{ uri: product.image }} />
        <Detail>{product.name}</Detail>
        <Detail>{product.price} BD</Detail>
      </V>
    </ListItem>
  );
};
