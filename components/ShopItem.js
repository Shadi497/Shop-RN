import { Body, Left, ListItem, Thumbnail } from "native-base";
import { useState } from "react";
import React from "react";
import { T } from "../styles";
import { useSelector } from "react-redux";
import { Card, CardItem, Icon } from "native-base";
import { ProductItem } from "./ProductItem";

export const ShopItem = ({ shop }) => {
  const [status, setStatus] = useState(false);

  const products = useSelector((state) => state.productReducer.products);

  const showImg = () => {
    setStatus(!status);
  };

  const productList = products
    .filter((product) => product.shopId === +shop.id)
    .map((product) => <ProductItem product={product} key={product.id} />);

  const arrlist = [];
  arrlist.push(productList);
  return (
    <>
      <Card style={{ flex: 0 }}>
        <CardItem>
          <Thumbnail source={{ uri: shop.image }} />
          <T onPress={showImg}>{shop.name}</T>
          <Icon name="arrow-forward" onPress={showImg}></Icon>
        </CardItem>
        <CardItem>{status && arrlist}</CardItem>
      </Card>
    </>
    // <ListItem>
    //   {/* <V> */}
    //   {/* <H> */}
    //   <Left>
    //
    //   </Left>
    //   <Body>
    //
    //   </Body>
    //   {/* </H> */}
    //   {status && arrlist}
    //   {/* </V> */}
    // </ListItem>
  );
};