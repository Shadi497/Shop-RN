import { Icon } from "native-base";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export const ShopButton = () => {
  const navigation = useNavigation();

  return (
    <Icon
      type="Entypo"
      name="shop"
      style={{ marginRight: 12 }}
      onPress={() => navigation.navigate("ShopList")}
    />
  );
};
