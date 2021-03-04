import { Icon, ListItem, Text, View } from "native-base";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

export const User = () => {
  const navigation = useNavigation();

  const user = useSelector((state) => state.authReducer.user);
  console.log(user);

  return (
    <View>
      <Text>Hiufkut,d</Text>
    </View>
  );
};
