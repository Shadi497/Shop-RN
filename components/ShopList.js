import { ListItem, Spinner } from "native-base";
import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { Txt } from "../styles";
import { ShopItem } from "./ShopItem";

const ShopList = ({ navigation }) => {
  const shops = useSelector((state) => state.shopReducer.shops);

  const loading = useSelector((state) => state.shopReducer.loading);

  const shoplist = shops.map((shop) => (
    <ShopItem navigation={navigation} shop={shop} key={shop.id} />
  ));

  return (
    <View>
      {loading ? (
        <>
          <Txt>Shops List</Txt>
          <Spinner />
        </>
      ) : (
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20%",
          }}
        >
          {shoplist}
        </View>
      )}
    </View>
  );
};

export default ShopList;
