import { Icon } from "native-base";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export const CartButton = () => {
  const navigation = useNavigation();

  return (
    <Icon
      type="MaterialCommunityIcons"
      name="cart"
      onPress={() => navigation.navigate("CartList")}
    />
  );
};
