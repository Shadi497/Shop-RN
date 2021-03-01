import { Spinner, List } from "native-base";
import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { Txt } from "../styles";
import { ShopItem } from "./ShopItem";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Icon,
  Right,
} from "native-base";

const ShopList = () => {
  const shops = useSelector((state) => state.shopReducer.shops);

  const loading = useSelector((state) => state.shopReducer.loading);

  const shoplist = shops.map((shop) => <ShopItem shop={shop} key={shop.id} />);

  return (
    <View>
      {loading ? (
        <Txt>
          <Txt>Shops List</Txt>
          <Spinner />
        </Txt>
      ) : (
        <>
          <Txt>Shops List</Txt>
          {shoplist}
        </>
      )}
    </View>
  );
};

export default ShopList;
