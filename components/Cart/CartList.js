import { List, ListItem } from "native-base";
import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { Txt } from "../../styles";
import { CartItem } from "./CartItem";

export const CartList = () => {
  const cart = useSelector((state) => state.cartReducer.items);

  const products = useSelector((state) => state.productReducer.products);

  const cartProduct = cart
    .map((item) => ({
      ...products.find((product) => product.id === item.id),
      quantity: item.quantity,
    }))
    .map((item) => <CartItem products={item} key={item.id} />);

  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {cartProduct}
    </View>
  );
};
