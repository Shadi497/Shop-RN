import { Icon, ListItem, Text } from "native-base";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

export const CartButton = () => {
  const navigation = useNavigation();

  const items = useSelector((state) => state.cartReducer.items);

  let total = 0;
  items.forEach((item) => (total += item.quantity));
  return (
    <ListItem onPress={() => navigation.navigate("CartList")}>
      <Icon
        type="MaterialCommunityIcons"
        name="cart"
        style={{ marginRight: 2 }}
      />
      <Text>{total}</Text>
    </ListItem>
  );
};
