import { Thumbnail } from "native-base";
import React from "react";
import { T } from "../styles";
import { Card, CardItem, Icon } from "native-base";

export const ShopItem = ({ shop, navigation }) => {
  return (
    <Card
      style={{
        flex: 0,
        width: "80%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardItem
        header
        button
        onPress={() => navigation.navigate("ShopDetail", { shop })}
      >
        <>
          <Thumbnail source={{ uri: shop.image }} />
          <T>{shop.name}</T>
          <Icon name="arrow-forward"></Icon>
        </>
      </CardItem>
    </Card>
  );
};
