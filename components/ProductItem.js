import React from "react";
import { View } from "react-native";
import {
  ProductTBold,
  ImageStyle,
  ShopImageStyle,
  Detail,
  TBold,
} from "../styles";

export const ProductItem = ({ product, shop }) => {
  return (
    <View>
      {shop && <TBold>{shop.name}</TBold> && (
          <ProductTBold>Products List</ProductTBold>
        ) && <ShopImageStyle source={{ uri: shop.image }} />}

      <ImageStyle source={{ uri: product.image }} />
      <Detail>{product.name}</Detail>
      <Detail>{product.price} BD</Detail>
    </View>
  );
};
