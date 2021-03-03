import { Button } from "react-native";
import React, { useState } from "react";
import { View } from "react-native";
import { ImageStyle, Detail } from "../styles";
import NumericInput from "react-native-numeric-input";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../store/actions/cartActions";
import { List, ListItem } from "native-base";

export const ProductItem = ({ product, navigation }) => {
  const [quantity, setQuantity] = useState(0);

  const dispatch = useDispatch();

  const addTocart = () => {
    const newProduct = { quantity, productId: product.id, id: product.id };
    dispatch(addProductToCart(newProduct));
  };

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: "7%",
      }}
    >
      <ImageStyle source={{ uri: product.image }} />
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "13%",
          alignItems: "center",
        }}
      >
        <Detail>{product.name}</Detail>
        <Detail>{product.price} BD</Detail>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "8%",
          alignItems: "center",
        }}
      >
        <NumericInput
          rounded
          value={quantity}
          onChange={setQuantity}
          initValue={0}
          totalHeight={40}
          totalWidth={90}
          style={{ marginBottom: "7%" }}
        />
        <Button
          style={{ marginBottom: "7%", color: "black" }}
          title="Add to Cart"
          onPress={addTocart}
        ></Button>
      </View>
    </View>
  );
};
