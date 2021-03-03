import { Card, CardItem, Icon, Thumbnail } from "native-base";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { Detail, ImageStyle, T } from "../../styles";

export const CartItem = ({ products }) => {
  const [quantity, setQuantity] = useState(products.quantity);

  const inc = () => {
    setQuantity(products.quantity++);
  };

  const dec = () => {
    setQuantity(products.quantity--);
  };

  return (
    <Card
      style={{
        flex: 0,
        width: "100%",
        height: "28%",
        display: "flex",
      }}
    >
      <CardItem>
        <>
          <Thumbnail source={{ uri: products.image }} />
          <View style={{ display: "flex", flexDirection: "column" }}>
            <T
              style={{
                marginTop: "15%",
                marginBottom: "5%",
                fontWeight: "bold",
              }}
            >
              {products.name}
            </T>
            <T style={{ color: "blue", backgroundColor: "lightgrey" }}>
              {products.price} BD
            </T>
          </View>
          <Text
            style={{
              marginLeft: "8%",
            }}
          >
            {(products.price * quantity).toFixed(2)} BD
          </Text>
          <>
            <Icon
              style={{
                marginLeft: "12%",
              }}
              type="AntDesign"
              name="minuscircleo"
              onPress={dec}
            ></Icon>
            <Text
              style={{
                marginRight: "2%",
              }}
            >
              {quantity}
            </Text>
            <Icon type="AntDesign" name="pluscircleo" onPress={inc}></Icon>
          </>
        </>
      </CardItem>
    </Card>
  );
};
